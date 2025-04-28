import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Story-styles.css';
import DATA from '../DataBusiness';
import BatashevPhoto from '../../../assets/speaker-photoes/batashov-wide.webp';
import DATABusiness  from '../DataBusiness';
import StoriesMore from '../../StoriesMore/StoriesMore';
import NotPaidAllert from '../../NotPaidAllert/NotPaidAllert';
import BatashevRshort from './BatashevR-short';
import StoriesPreview from '../../StoriesPreview/StoriesPreview';
import Preloader from '../../Preloader/Preloader';
import { Helmet } from 'react-helmet-async';


////поменять в фалйе
// текст!!
// storyId

const BatashevR = ({ 
  fetchViews,
  saveStory,
  removeStory,
  isStorySaved,
  onIncreaseView,
  newViews,
  hasActiveSubscription,
  getHistoryWord1,
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
    fetchViews(storyId);
    setTimeout(() => setIsLoading(false), 1000); 
  }, []);

  // Фильтруем карточки, чтобы оставить только те, которые не равны storyId
  const combinedStories = DATABusiness.filter(story => story.storyId !== storyId);

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
    setIsMobile(width < 1280);
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
      <Helmet>
        <title>{story.title} — CEOstory</title>
        <meta 
          name="description" 
          content="Как Роман Баташов построил бизнес на умных домах. История предпринимателя, 
          который построил бизнес в сфере IoT и цифровизации." 
        />
        <meta 
          name="keywords" 
          content="Роман Баташов, история успеха, предприниматель, как открыть бизнес, умный дом, умные дома, бизнес на умных домах, уроки бизнеса, мотивация" 
        />
         <link rel="canonical" href="https://ceostory.ru/batashovr-story " />
      </Helmet>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className='story'>
          <NotPaidAllert 
            hasActiveSubscription={hasActiveSubscription}
            free={story.free} 
            getHistoryWord1={getHistoryWord1}
          />
          <div  className='story-container'>

            {isMobile ? (
              <div className='story__main-mobile'>
                <div className='story__main-mobile-container'> 
                  <img className='story__story__main-mobile-photo batashov-background ' src={BatashevPhoto} alt={story.name}/>
                  <div className='story__main-mobile-small-container'>
                    <p className='story__main-mobile-name'>{story.job}<br/> {story.name}</p>
                    <p className='story__main-mobile-date'>{formatDate(story.publicationDate)} <br/>{newViews} {getReadingForm(newViews)}</p>
                  </div>
                </div>
                <h2 className='story__main-mobile-title'>{story.title}</h2>
                  <div className='story__preview'>
                      {story && (
                        <StoriesPreview
                          key={story.storyId}
                          storyId={story.storyId}
                          name={story.name}
                          field={story.field}
                          income={story.income}
                          title={story.title}
                          navigation={story.navigation}
                          job={story.job}
                          incomeFilter={story.incomeFilter}
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
                          field={story.field}
                          income={story.income}
                          title={story.title}
                          navigation={story.navigation}
                          job={story.job}
                          incomeFilter={story.incomeFilter}
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
                  <img className='story__photo green' src={BatashevPhoto} alt={story.name}/>
                </div>

                <div className='story__title-block story__title-block-batashov'>
                  <h2 className='story__title'>{story.title}</h2>
                  <p className='story__date'>{story.job}, {story.name}</p>
                  <p className='story__view'>{formatDate(story.publicationDate)}, {newViews} {getReadingForm(newViews)}</p>
                </div>
            </div>
            )}
            <div className='story__container'>
              <BatashevRshort />
            </div>
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
              incomeFilter={story.incomeFilter}
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
export default BatashevR;

