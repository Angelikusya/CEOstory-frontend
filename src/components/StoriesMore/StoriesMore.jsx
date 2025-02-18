import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StoriesMore.css';
import * as auth from '../../utils/MainApi';

const StoriesMore = ({ 
    _id,
    storyId, 
    name, 
    title, 
    navigation, 
    job, 
    type, 
    field,
    income, 
    textPreview1,
    textPreview2,
    textPreview3,
    experience,
    investments,
    publicationDate, 
    free,
    photo,
    views,
    readingTime,
    onIncreaseView,
}) => {
    const [newViews, setNewViews] = useState(views);
    const [isLoading, setIsLoading] = useState(true);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const storyData = {
        _id,
        storyId,
        name,
        title,
        navigation,
        job,
        type,
        field,
        income,
        textPreview1,
        textPreview2,
        textPreview3,
        experience,
        investments,
        publicationDate,
        free,
        readingTime,
        views: newViews,
    };

    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);



    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', options);
    };

        // Массив с цветами
        const colors = ['#0F1E37', '#353E44', '#283C35', '#3D0150', '#F6EFE7'];
    
        // Функция для выбора случайного цвета
        let lastColor = null;
        let repeatCount = 0;
        
        // Функция для выбора случайного цвета
        const getRandomColor = () => {
            let newColor;
            
            do {
                newColor = colors[Math.floor(Math.random() * colors.length)];
                
                // Проверяем, совпадает ли новый цвет с последним
                if (newColor === lastColor) {
                    repeatCount++;
                } else {
                    repeatCount = 1; // Сбрасываем счетчик, если цвет изменился
                }
        
            } while (repeatCount > 2); // Продолжаем выбирать, пока не найдем подходящий цвет
        
            // Обновляем последний цвет
            lastColor = newColor;
        
            return newColor;
        };
        
    return (
        <div className='more__card'>
            <button className='more__click' onClick={onIncreaseView}>
                <div className='more__mobile'>
                    {free && <div className='more__free'>Бесплатно</div>}
                        <Link to={navigation} className='more__link'>
                            <div className='more__important-wrapper'>
                                    <div className='more__photo-container'>
                                        {!isLoading && <div className='more__photo-placeholder' style={{ backgroundColor: getRandomColor() }} // Случайный цвет
                                        />} {/* Плейсхолдер */}
                                        <img
                                            src={photo}
                                            alt={name}
                                            className='more__photo'
                                            onLoad={() => setIsLoading(true)} // Устанавливаем состояние при загрузке
                                            onError={() => setIsLoading(false)} // Можно оставить для обработки ошибок
                                            style={{ display: isLoading ? 'block' : 'none' }} // Скрываем изображение до загрузки
                                        />
                                    </div>
                                <div className='more__important'>
                                    <div className='more__jobs'>
                                        <p className='more__job'>{job},</p>
                                        <p className='more__job'>{name}</p>
                                    </div>
                                    <div className='more__statistics'>
                                        <p className='more__statistics-text'>{newViews} просмотров, </p>
                                        <p className='more__statistics-text'>{formatDate(publicationDate)}</p>
                                        <p className='more__statistics-text'>читать {readingTime}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='more__block'>
                                <h2 className='more__title'>{title}</h2>
                                <div className='more__features'>
                                    <div className='more__feature'>
                                        <div className='more__arrow'></div>
                                        <p className='more__features-text'>{textPreview1}</p>
                                    </div>
                                    <div className='more__feature'>
                                        <div className='more__arrow'></div>
                                        <p className='more__features-text'>{textPreview2}</p>
                                    </div>
                                    <div className='more__feature'>
                                        <div className='more__arrow'></div>
                                        <p className='more__features-text'>{textPreview3}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='more__filters-mobile'>
                                <div className='more__filters-line'></div>
                                <div className='more__filter-mobile'>
                                    <p className='more__name-mobile'>Сфера: 
                                        <span className='more__name-mobile-span'> {field}
                                        </span>
                                    </p>
                                </div>
                                <div className='more__filter-mobile'>
                                    <p className='more__name-mobile'>Доход в месяц: 
                                        <span className='more__name-mobile-span'> {income}
                                        </span>
                                    </p>
                                </div>
                                {type !== 'Бизнес' && (
                                <div className='more__filter-mobile'>
                                    <p className='more__name-mobile'>Опыт:  
                                        <span className='more__name-mobile-span'> {experience}
                                        </span>
                                    </p>
                                </div>
                                )}
                                {type == 'Бизнес' && (
                                <div className='more__filter-mobile'>
                                    <p className='more__name-mobile'>Стоимость открытия бизнеса:  
                                        <span className='more__name-mobile-span'> {investments}
                                        </span>
                                    </p>
                                </div>
                                )}
                            </div>
                        </Link>
                    </div>
            </button>
        </div>
    )
};

export default StoriesMore;
