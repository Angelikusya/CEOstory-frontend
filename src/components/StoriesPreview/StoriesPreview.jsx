import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StoriesPreview.css';
import * as auth from '../../utils/MainApi';

const StoriesPreview = ({ 
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
    onSave, 
    onRemove,
    views,
    readingTime,
    onIncreaseView,
    isSaved,
}) => {
    const [newViews, setNewViews] = useState(views);
    const [isSaving, setIsSaving] = useState(false);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
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
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [showTooltip, setShowTooltip] = useState(false);


    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    

    const handleIncreaseView = async () => {
        // Увеличиваем количество просмотров
        const updatedViews = await onIncreaseView(storyId);
        setNewViews(updatedViews);
    };

    useEffect(() => {
        // Получаем количество просмотров при монтировании компонента
        const fetchViews = async () => {
            const viewData = await 
            auth
                .getViews(storyId);
                setNewViews(viewData.views);
        };

        fetchViews();
    }, [storyId]); // Зависимость от storyId

    const handleSaveStory = async () => {
        if (onSave) {
            setIsSaving(true); // Устанавливаем состояние "сохранения"
            try {
                await onSave(storyData); // Вызываем функцию onSave
            } catch (error) {
                console.error("Ошибка при сохранении:", error);
            } finally {
                setIsSaving(false); // Сбрасываем состояние "сохранения"
            }
        }
    };


    const handleRemoveStory = () => {
        if (onRemove) {
            onRemove(storyData); // Вызываем функцию onRemove
        }
    };

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
        <div>
            <div className='preview__card'>
            {(location.pathname === '/saved' || location.pathname === '/career-stories' || location.pathname === '/business-stories') && (
                <button className='preview__click' onClick={handleIncreaseView}>
                {screenSize >767 && (
                    <div className='preview__desktop'>
                    {free && <div className='preview__free'>Бесплатно</div>}
                        <Link to={navigation} className='preview__link'>
                            {location.pathname !== '/saved' && (
                                // <img src={photo} alt={name} className='preview__photo'/>
                                <div className='preview__photo-container'>
                                {!isLoading && <div className='preview__photo-placeholder' style={{ backgroundColor: getRandomColor() }} // Случайный цвет
                                />} {/* Плейсхолдер */}
                                <img
                                    src={photo}
                                    alt={name}
                                    className='preview__photo'
                                    onLoad={() => setIsLoading(true)} // Устанавливаем состояние при загрузке
                                    onError={() => setIsLoading(false)} // Можно оставить для обработки ошибок
                                    style={{ display: isLoading ? 'block' : 'none' }} // Скрываем изображение до загрузки
                                />
                            </div>
                            )}
                            <div className='preview__container'>
                                <div className='preview__jobs'>
                                    <p className='preview__job'>{job}, {name}</p>
                                </div>
                                <h2 className='preview__title'>{title}</h2>
                                <div className='preview__statistics'>
                                    <p className='preview__statistics-text'>{formatDate(publicationDate)}</p>
                                    <p className='preview__statistics-text'>{newViews} просмотров, </p>
                                    <p className='preview__statistics-text'>читать {readingTime}</p>


                                </div>
                                <div className='preview__features'>
                                    <div className='preview__feature'>
                                        <div className='preview__arrow'></div>
                                        <p className='preview__features-text'>{textPreview1}</p>
                                    </div>
                                    <div className='preview__feature'>
                                        <div className='preview__arrow'></div>
                                        <p className='preview__features-text'>{textPreview2}</p>
                                    </div>
                                    <div className='preview__feature'>
                                        <div className='preview__arrow'></div>
                                        <p className='preview__features-text'>{textPreview3}</p>
                                    </div>
                                </div>
                                <div className='preview__filters'>
                                    <div className='preview__filter'>
                                        <p className='preview__name'>доход</p>
                                        <div className='preview__filter-wrapper'>
                                            <p className='preview__filter-title'>{income}</p>
                                        </div>
                                    </div>

                                    {type !== 'Бизнес' && (
                                        <div className='preview__filter'>
                                            <p className='preview__name'>опыт</p>
                                            <div className='preview__filter-wrapper'>
                                                <p className='preview__filter-title'>{experience}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className='preview__filter'>
                                        <p className='preview__name'>сфера</p>
                                        <div className='preview__filter-wrapper'>
                                            <p className='preview__filter-title'>{field}</p>
                                        </div>
                                    </div>

                                    {type == 'Бизнес' && (
                                        <div className='preview__filter'>
                                            <p className='preview__name'>вложения</p>
                                            <div className='preview__filter-wrapper'>
                                                <p className='preview__filter-title'>{investments}</p>
                                            </div>
                                        </div>
                                     )}

                                </div>
                            </div>
                        </Link>
                    </div>
                    )}
                    {screenSize <768 && (
                    <div className='preview__mobile'>
                        {free && <div className='preview__free'>Бесплатно</div>}
                            <Link to={navigation} className='preview__link'>
                                <div className='preview__important-wrapper'>
                                    {location.pathname !== '/saved' && (
                                        <div className='preview__photo-container'>
                                            {!isLoading && <div className='preview__photo-placeholder' style={{ backgroundColor: getRandomColor() }} // Случайный цвет
                                            />} {/* Плейсхолдер */}
                                            <img
                                                src={photo}
                                                alt={name}
                                                className='preview__photo'
                                                onLoad={() => setIsLoading(true)} // Устанавливаем состояние при загрузке
                                                onError={() => setIsLoading(false)} // Можно оставить для обработки ошибок
                                                style={{ display: isLoading ? 'block' : 'none' }} // Скрываем изображение до загрузки
                                            />
                                        </div>
                                    )}
                                    <div className='preview__important'>
                                        <div className='preview__jobs'>
                                            <p className='preview__job'>{job},</p>
                                            <p className='preview__job'>{name}</p>
                                        </div>
                                        <div className='preview__statistics'>
                                            <p className='preview__statistics-text'>{newViews} просмотров, </p>
                                            <p className='preview__statistics-text'>{formatDate(publicationDate)}</p>
                                            <p className='preview__statistics-text'>читать {readingTime}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='preview__block'>
                                    <h2 className='preview__title'>{title}</h2>
                                    <div className='preview__features'>
                                        <div className='preview__feature'>
                                            <div className='preview__arrow'></div>
                                            <p className='preview__features-text'>{textPreview1}</p>
                                        </div>
                                        <div className='preview__feature'>
                                            <div className='preview__arrow'></div>
                                            <p className='preview__features-text'>{textPreview2}</p>
                                        </div>
                                        <div className='preview__feature'>
                                            <div className='preview__arrow'></div>
                                            <p className='preview__features-text'>{textPreview3}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='review__filters-mobile'>
                                    <div className='preview__filters-line'></div>
                                    <div className='preview__filter-mobile'>
                                        <p className='preview__name-mobile'>Сфера: 
                                            <span className='preview__name-mobile-span'> {field}
                                            </span>
                                        </p>
                                    </div>
                                    <div className='preview__filter-mobile'>
                                        <p className='preview__name-mobile'>Доход в месяц: 
                                            <span className='preview__name-mobile-span'> {income}
                                            </span>
                                        </p>
                                    </div>
                                    {type !== 'Бизнес' && (
                                    <div className='preview__filter-mobile'>
                                        <p className='preview__name-mobile'>Опыт:  
                                            <span className='preview__name-mobile-span'> {experience}
                                            </span>
                                        </p>
                                    </div>
                                    )}
                                    {type == 'Бизнес' && (
                                    <div className='preview__filter-mobile'>
                                        <p className='preview__name-mobile'>Стоимость открытия бизнеса:  
                                            <span className='preview__name-mobile-span'> {investments}
                                            </span>
                                        </p>
                                    </div>
                                    )}
                                </div>
                            </Link>
                        </div>
                    )}
                </button>
            )}
                <div className='preview__buttons'>
                    {!isSaved ? (
                        <button 
                            className='preview__button-save' 
                            onClick={handleSaveStory} 
                            type='button'
                            disabled={isSaving} // Отключаем кнопку во время сохранения
                            title="Сохранить"        
                    >
                    </button>
                    

                    ) : (
                        <button 
                            className='preview__button-delete'
                            onClick={handleRemoveStory} 
                            type='button'
                        >
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
};

export default StoriesPreview;
