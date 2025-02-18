import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../Story-styles.css';
import StoriesPreview from '../../../StoriesPreview/StoriesPreview';
import DATA from '../../../Data/DataBusiness';
import NotJoinedAllert from '../../../NotJoinedAllert/NotJoinedAllert';
import NotPaidAllert from '../../../NotPaidAllert/NotPaidAllert';
import Preloader from '../../../Preloader/Preloader';
import * as auth from '../../../../utils/MainApi';
import Batashev from '../../../../assets/speaker-photoes/batashev.png';
import BatashevRlong from './BatashevR-long';
import BatashevRshort from './BatashevR-short';
import DATABusiness  from '../../../Data/DataBusiness';
import StoriesMore from '../../../StoriesMore/StoriesMore';

////поменять в фалйе
// текст!!
// storyId

const BatashevR = ({ 
  saveStory,
  removeStory,
  isStorySaved,
  onIncreaseView,
}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [newViews, setNewViews] = useState(0);
  const [isShort, setIsShort] = useState(true);
  const [visibleStories, setVisibleStories] = useState(3);

  // Находим историю с storyId: 1
  const story = DATA.find(story => story.storyId === 1);
  const storyId = 1;

  const combinedStories = DATABusiness;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  //изменение формата даты
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('ru-RU', { month: 'long' });
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`; // Формат: день месяц год
  };

  // useEffect для остальных функций
  useEffect(() => {
  
    // Функция для получения количества просмотров
    const fetchViews = async () => {
      try {
        const viewData = await auth.getViews(storyId);
        if (viewData && typeof viewData.views === 'number') {
          setNewViews(viewData.views);
        } else {
          console.error('Неверный формат данных:', viewData);
        }
      } catch (error) {
        console.error('Ошибка при получении просмотров:', error);
      }
    };
  
    // Установка таймера для прелоадера
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Задержка на 1 секунду
  
  
    // Вызов функции для получения просмотров
    fetchViews();
  }, [storyId]); // Добавьте storyId в 

  // Функция для обновления количества видимых историй в зависимости от ширины экрана
  const updateVisibleStories = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setVisibleStories(3);
    } else if (width >= 768) {
      setVisibleStories(2);
    } else {
      setVisibleStories(3); // Изменено на 1, так как в условии указано "меньше 767"
    }
  };

  useEffect(() => {
    // Устанавливаем начальное значение при монтировании компонента
    updateVisibleStories();
    
    // Добавляем обработчик события изменения размера окна
    window.addEventListener('resize', updateVisibleStories);

    // Убираем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateVisibleStories);
    };
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {

          window.removeEventListener('resize', handleResize);
      };
  }, []); 


  return (
    <section>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className='story'>
          <NotJoinedAllert />
          <NotPaidAllert />

          {isMobile ? (
            <div className='story__main-mobile'>
              <img className='story__story__main-mobile-photo' src={story.photo} alt={story.name}/>
              <div className='story__main-mobile-container'>
                <h2 className='story__main-mobile-title'>{story.title}</h2>
                <p className='story__main-mobile-name'>Бизнесмен, {story.name}</p>
                <p className='story__main-mobile-date'>{formatDate(story.publicationDate)}, {newViews} прочтений</p>
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
                <img className='story__photo' src={Batashev} alt={story.name}/>
              </div>

              <div className='story__title-block'>
                <h2 className='story__title'>{story.title}</h2>
                <p className='story__date'>Бизнесмен, {story.name}</p>
                <p className='story__view'>{formatDate(story.publicationDate)}, {newViews} прочтений</p>
              </div>
          </div>
          )}
          
          {isMobile ? (
            <div className='story__buttons-mobile'>
              <button 
                className={`story__button-mobile right ${isShort ? 'active' : ''}`} 
                onClick={() => {
                setIsShort(true);
              }}
              >
                <p className={`story__button-title-mobile ${isShort ? 'active' : ''}`} >Как открыть такой же бизнес?</p>
              </button>
              <button 
                className={`story__button-mobile left ${!isShort ? 'active' : ''}`}  
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
              <p className={`story__button-title ${isShort ? 'active' : ''}`} >Как открыть такой же бизнес?</p>
              <p className='story__button-text'>Краткая инструкция по открытию бизнеса,
                чтобы с нуля добиться того же самое
              </p>
            </button>
            <button 
              className={`story__button left ${!isShort ? 'active' : ''}`}  
              onClick={() => {
                setIsShort(false);
              }}
            >
             <p className={`story__button-title mini ${!isShort ? 'active' : ''}`} >Весь путь героя</p>
              <p className='story__button-text mini'>Полное интервью с героем,
                чтобы узнать все его секреты
              </p>
            </button>
          </div>
          )}

        {isMobile ? (
          <div className='story__switcher-mobile'>
              {isShort 
                ? 
                <p className='story__switcher-mobile-text'>Краткая инструкция по открытию бизнеса <br />
                  <span className='story__switcher-mobile-span'>
                    чтобы с нуля добиться того же самое
                    </span>
                </p> 
                : 
                <p className='story__switcher-mobile-text'>Полное интервью с героем, <br />
                  <span className='story__switcher-mobile-span'>
                   чтобы узнать все его секреты
                  </span>
                </p>
              }
          </div>
        ) : ( null )}

          <div className='story__container'>
            {isShort ? <BatashevRshort /> : <BatashevRlong />}
          </div>
          {isShort ? 
            <button 
            className='link link__story' 
              onClick={() => {
                setIsShort(false);
                window.scrollTo({ top: 0 });
              }}
            > <span>Узнать весь путь героя</span>
            </button>
          : 
            <button 
            className='link link__story' 
              onClick={() => {
              setIsShort(true);
              window.scrollTo({ top: 0 });
            }}
          >             
            <span>Коротко о главном</span>
          </button>
          }
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default BatashevR;
