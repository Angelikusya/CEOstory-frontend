import React, { useState, useEffect, useRef } from 'react';
import '../../Story-styles.css';
import StoriesPreview from '../../../StoriesPreview/StoriesPreview';
import DATA from '../../../Data/DataCareer';
import Preloader from '../../../Preloader/Preloader';
import KorotkovaPhoto from '../../../../assets/speaker-photoes/korotkova-wide.webp';
import DATACareer  from '../../../Data/DataCareer';
import StoriesMore from '../../../StoriesMore/StoriesMore';
import KorotkovaEshort from './KorotkovaE-short';
import KorotkovaElong from './KorotkovaE-long';
import NotPaidAllert from '../../../NotPaidAllert/NotPaidAllert';


////поменять в фалйе
// текст!!
// storyId

const KorotkovaE = ({ 
  fetchViews,
  saveStory,
  removeStory,
  isStorySaved,
  onIncreaseView,
  newViews,
  hasActiveSubscription,
}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isShort, setIsShort] = useState(true);
  const [visibleStories, setVisibleStories] = useState(3);
  const pathname = window.location.pathname; // Получаем текущий путь


  // Находим историю с storyId: 1
  const story = DATA.find(story => story.storyId === 1);
  const storyId = 1;


  useEffect(() => {
    document.title = `${story.title}  — CEOstory`;
  }, []);

  // useEffect для получения количества просмотров только при открытии страницы
  useEffect(() => {
    // Здесь можно добавить логику для запроса количества просмотров
    fetchViews(storyId);  // Вызываем функцию для получения просмотров только при монтировании компонента
    setIsLoading(false);  // После получения данных, устанавливаем флаг загрузки в false
  }, []); // Пустой массив зависимостей, чтобы сработало только при монтировании


  // Фильтруем карточки, чтобы оставить только те, которые не равны storyId
  const combinedStories = DATACareer.filter(story => story.storyId !== storyId);

  // Теперь combinedStories содержит карточки, которые не равны storyId
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280);

  //изменение формата даты
  const months = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()]; // Получаем месяц в родительном падеже
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`; // Формат: день месяц год
  };

  // Функция для обновления количества видимых историй в зависимости от ширины экрана
  const updateLayout = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 1280);
    if (width >= 1280) {
        setVisibleStories(3);
    } else if (width >= 768) {
        setVisibleStories(2);
    } else {
        setVisibleStories(1);
    }
  };

  useEffect(() => {
      updateLayout(); // Устанавливаем начальное значение при монтировании
      window.addEventListener('resize', updateLayout);

      return () => {
          window.removeEventListener('resize', updateLayout);
      };
  }, []);

  const getReadingForm = (count) => {
    if (count % 10 === 1 && count % 100 !== 11) {
        return 'прочтение';
    }
    if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
        return 'прочтения';
    }
    return 'прочтений';
    };   

  return (
    <section>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className='story'>
          <NotPaidAllert 
            hasActiveSubscription={hasActiveSubscription}
            free={story.free} 
          />
          <div  className='story-container'>

          {isMobile ? (
            <div className='story__main-mobile'>
              <div className='story__main-mobile-container'> 
                <img className='story__story__main-mobile-photo pink' src={KorotkovaPhoto} alt={story.name}/>
                <div className='story__main-mobile-small-container'>
                  <p className='story__main-mobile-name'>{story.job},<br/> {story.name}</p>
                  <p className='story__main-mobile-date'>{formatDate(story.publicationDate)}, {newViews} {getReadingForm(newViews)}</p>
                </div>
              </div>
              <h2 className='story__main-mobile-title'>{story.title}</h2>
                <div className='story__preview'>
                    {story && (
                      <StoriesPreview
                        key={story.storyId}
                        storyId={story.storyId}
                        name={story.name}
                        type={story.type}
                        field={story.field}
                        income={story.income}
                        title={story.title}
                        navigation={story.navigation}
                        job={story.job}
                        readingTime={story.readingTime}
                        publicationDate={story.publicationDate}
                        textPreview1={story.textPreview1}
                        textPreview2={story.textPreview2}
                        textPreview3={story.textPreview3}
                        free={story.free} 
                        experience={story.experience} 
                        investments={story.investments} 
                        onRemove={removeStory} 
                        onSave={saveStory} 
                        isSaved={isStorySaved(story.storyId)}
                        photo={story.photo}
                      />
                    )}
            </div>
            </div>
          ) : (
          <div className='story__main'>
            <div className='story__preview'>
                    {story && (
                      <StoriesPreview
                        key={story.storyId}
                        storyId={story.storyId}
                        name={story.name}
                        type={story.type}
                        field={story.field}
                        income={story.income}
                        title={story.title}
                        navigation={story.navigation}
                        job={story.job}
                        readingTime={story.readingTime}
                        publicationDate={story.publicationDate}
                        textPreview1={story.textPreview1}
                        textPreview2={story.textPreview2}
                        textPreview3={story.textPreview3}
                        free={story.free} 
                        experience={story.experience} 
                        investments={story.investments} 
                        onRemove={removeStory} 
                        onSave={saveStory} 
                        isSaved={isStorySaved(story.storyId)}
                        photo={story.photo}
                      />
                    )}
            </div>

              <div className='story__photo-container'>
                <img className='story__photo pink' src={KorotkovaPhoto} alt={story.name}/>
              </div>

              <div className='story__title-block'>
                <h2 className='story__title'>{story.title}</h2>
                <p className='story__date'>{story.job}, {story.name}</p>
                <p className='story__view'>{formatDate(story.publicationDate)}, {newViews} {getReadingForm(newViews)}</p>
              </div>
          </div>
          )}
          
          {isMobile ? (
            <div className='story__buttons-mobile'>
              <button 
                className={`button story__button-mobile right ${isShort ? 'active' : ''}`} 
                onClick={() => {
                setIsShort(true);
              }}
              >
                <p className={`story__button-title-mobile ${isShort ? 'active' : ''}`} >Как добиться того же самого?</p>
              </button>
              <button 
                className={`button story__button-mobile left ${!isShort ? 'active' : ''}`}  
                onClick={() => {
                setIsShort(false);
                }}
              >
              <p className={`story__button-title-mobile mini ${!isShort ? 'active' : ''}`} >Весь путь героя</p>
            </button>
            </div>
          ) : (
          <div className='story__buttons'>
            <button 
              className={`story__button right ${isShort ? 'active' : ''}`} 
              onClick={() => {
                setIsShort(true);
              }}
            >
              <p className={`story__button-title ${isShort ? 'active' : ''}`} >Как добиться того же самого?</p>
              <p className='story__button-text'>Краткая инструкция для развития карьеры,
              чтобы с нуля добиться того же самое
              </p>
            </button>
            <button 
              className={`story__button left ${!isShort ? 'active' : ''}`}  
              onClick={() => {
                setIsShort(false);
              }}
            >
             <p className={`story__button-title mini ${!isShort ? 'active' : ''}`} >Узнать весь путь героя</p>
              <p className='story__button-text mini'>
                Полное интервью с героем, чтобы раскрыть все его секреты
              </p>
            </button>
          </div>
          )}

          <div className='story__container'>
            {isShort ? <KorotkovaEshort /> : <KorotkovaElong />}
          </div>
          {isShort ? 
            <button 
              className='link link__story' 
              onClick={() => {
                setIsShort(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>
                Узнать весь путь героя
              </span>
            </button>
          : 
            <button 
              className='link link__story' 
              onClick={() => {
              setIsShort(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          > 
          <span>
            Коротко о главном
          </span>
          </button>
          }
          </div>
        </div>
      )}

      <div className='story__more'>
        <p className='story__more-header'>Рекомендуем прочитать</p>
        <div className='story__more-line'></div>
        <div className="story__more-flex">
          {combinedStories.slice(0, visibleStories).map((story, index) => (
            <StoriesMore
              {...story}
              key={story.id ||  story._id  || index }     
              name={story.name}
              type={story.type}
              field={story.field}
              income={story.income}
              title={story.title}
              navigation={story.navigation}
              job={story.job}
              textPreview1={story.textPreview1}
              textPreview2={story.textPreview2} 
              textPreview3={story.textPreview3} 
              experience={story.experience} 
              investments={story.investments} 
              publicationDate={story.publicationDate}
              free={story.free}
              readingTime={story.readingTime}
              photo={story.photo}
              onIncreaseView={onIncreaseView}
              isSaved={isStorySaved(story.storyId)} 
              newViews={story.views}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default KorotkovaE;

