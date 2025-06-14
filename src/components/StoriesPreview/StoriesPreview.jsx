import React, { useState, useEffect, useContext } from 'react';
import './StoriesPreview.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import * as auth from '../../utils/MainApi';
import { highlightMatch } from '../../utils/highlightMatch';
import { Link, useLocation } from 'react-router-dom';

const StoriesPreview = ({ 
    _id,
    storyId, 
    name, 
    title, 
    navigation, 
    job, 
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
    incomeFilter,
    onIncreaseView,
    isSaved,
    searchTerm,
    }) => {
    const [newViews, setNewViews] = useState(views);
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showLoginMessage, setShowLoginMessage] = useState(false);

    const currentUser = useContext(CurrentUserContext);

    const location = useLocation();
    const pathname = location.pathname;

    const storyData = {
        _id,
        storyId,
        name,
        title,
        navigation,
        job,
        field,
        income,
        textPreview1,
        textPreview2,
        textPreview3,
        experience,
        investments,
        publicationDate,
        free,
        incomeFilter,
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

    // Увеличиваем количество просмотров
    const handleIncreaseView = () => {
        onIncreaseView(storyId)
            .then((updatedViews) => {
                setNewViews(updatedViews);  // Обновляем количество просмотров
            })
            .catch((error) => {
                console.error("Ошибка при увеличении просмотров:", error);
            });
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
        if (!currentUser) {
            setShowLoginMessage(true);
            setTimeout(() => setShowLoginMessage(false), 2000); // Скрыть через 2 секунды
            return;
        }
    
        if (onSave) {
            setIsSaving(true);
            try {
                await onSave(storyData);
            } catch (error) {
                console.error("Ошибка при сохранении:", error);
            } finally {
                setIsSaving(false);
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
    <div>
      <div className='preview__card'>
        {(pathname === '/saved' || pathname === '/business-stories') && (
          <button className='preview__click' onClick={handleIncreaseView}>
                {screenSize >767 && (
                    <div className='preview__desktop'>
                    {free && <div className='preview__free'>Бесплатно</div>}
                        <Link to={navigation} className='preview__link'>
                            {pathname !== '/saved' && (
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
                                    <p className='preview__job'>{job}, {highlightMatch(name, searchTerm)}</p>
                                </div>
                                <h2 className='preview__title'>{highlightMatch(title, searchTerm)}</h2>
                                <div className='preview__statistics'>
                                    <p className='preview__statistics-text'>{formatDate(publicationDate)}</p>
                                    <p className='preview__statistics-text'>{newViews} {getReadingForm(newViews)} </p>
                                    {/* <p className='preview__statistics-text'>читать {incomeFilter}</p> */}


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
                                        <p className='preview__name'>Выручка</p>
                                        <div className='preview__filter-wrapper'>
                                            <p className='preview__filter-title'>{income}</p>
                                        </div>
                                    </div>

                                    <div className='preview__filter'>
                                        <p className='preview__name'>Сфера</p>
                                        <div className='preview__filter-wrapper'>
                                            <p className='preview__filter-title'>{field}</p>
                                        </div>
                                    </div>
                                    <div className='preview__filter'>
                                        <p className='preview__name'>Вложения</p>
                                        <div className='preview__filter-wrapper'>
                                            <p className='preview__filter-title'>{investments}</p>
                                        </div>
                                    </div>
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
                                            <p className='preview__statistics-text'>{newViews} прочтений </p>
                                            <p className='preview__statistics-text'>{formatDate(publicationDate)}</p>
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
                                        <p className='preview__name-mobile'>Выручка в месяц: 
                                            <span className='preview__name-mobile-span'> {income}
                                            </span>
                                        </p>
                                    </div>
                                    <div className='preview__filter-mobile'>
                                        <p className='preview__name-mobile'>Стоимость открытия бизнеса:  
                                            <span className='preview__name-mobile-span'> {investments}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </button>
            )}

            <div className='preview__buttons'>
                {showLoginMessage && (
                    <div className="preview__button-blocked">
                        Войдите, чтобы сохранить
                    </div>
                )}
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

