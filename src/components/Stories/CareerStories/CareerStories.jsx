import React, { useState, useEffect } from 'react';
import '../Stories.css';
import StoriesPreview from '../../StoriesPreview/StoriesPreview';
import Filter from '../../Filter/Filter';
import DATACareer from '../../Data/DataCareer'; 
import { Link, useLocation } from 'react-router-dom';
import PopupSendEmail from '../../PopupSendEmail/PopupSendEmail';

const CareerStories = ({ 
    data = DATACareer, 
    onCloseFilter, 
    saveStory, 
    removeStory, 
    onIncreaseView, 
    isStorySaved 
}) => {
    const [filteredData, setFilteredData] = useState(data);
    const [filters, setFilters] = useState({
        businessType: '',
        income: '',
        field: '',
        searchTerm: ''
    });
    const [visibleCount, setVisibleCount] = useState(4); // начальное количество историй
    const [isLoading, setIsLoading] = useState(false);
    const pathname = window.location.pathname; // Получаем текущий путь
    const [showPopup, setShowPopup] = useState(false);
    const [showLoginMessage, setShowLoginMessage] = useState(false); // Стейт для показа сообщения

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            setShowLoginMessage(true);
            setTimeout(() => {
                setShowLoginMessage(false);
            }, 5000); // Показываем 5 секунд
        }
    }, [token]);

    useEffect(() => {
            setTimeout(() => {
                setShowPopup(false);
            }, 10000); // Закрыть через 10 секунд
    }, []);

    useEffect(() => {
        document.title = 'Истории про карьеру — CEOstory';
        
        const savedFilters = JSON.parse(localStorage.getItem('storyFilters'));
        if (savedFilters) {
            setFilters(savedFilters);
            handleFilterChange(savedFilters);
        } else {
            setFilteredData(data);
        }
    }, [data]);


    const handleFilterChange = (newFilters) => {
        const { businessType, income, field, searchTerm } = newFilters;
    
        const newFilteredData = data.filter((story) => {
            const matchesBusinessType = businessType ? story.type === businessType : true;
            const matchesIncome = income ? story.income === income : true;
            const matchesField = field ? story.field === field : true;
    
            const matchesSearchTerm = searchTerm ? 
                Object.values(story).some(value => 
                    value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                ) : true;
    
            return matchesBusinessType && matchesIncome && matchesField && matchesSearchTerm;
        });
    
        setFilteredData(newFilteredData);
        setFilters(newFilters);
        localStorage.setItem('storyFilters', JSON.stringify(newFilters));
    
        // Проверка наличия активных фильтров
        const hasActiveFilters = businessType || income || field || searchTerm; // Исправлено условие
    
    };
    
    //отображаение большего количества историй
    const handleShowMore = () => {
        setIsLoading(true);
        
        // Имитация загрузки данных (замените на вашу логику)
        setTimeout(() => {
            setVisibleCount(filteredData.length); // Показываем все оставшиеся элементы
            setIsLoading(false);
        }, 1000); // Задержка в 1 секунду для имитации загрузки
    };

    const getStoryLabel = (count) => {
        if (count % 10 === 1 && count % 100 !== 11) {
            return 'история';
        }
        if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
            return 'истории';
        }
        return 'историй';
    }; 

    // Определяем текст заголовка в зависимости от текущей страницы
    let headerText = 'Каталог историй про ';
    
    if (pathname.includes('career-stories')) {
      headerText += 'карьеру';
    } else if (pathname.includes('business-stories')) {
      headerText += 'бизнес';
    } else {
      headerText += 'истории'; // Значение по умолчанию, если не совпадает ни с одним из путей
    }
    
    return (
       <div className='stories'>
        <div className='stories__titles'>
        <h3 className='stories__about'>{headerText}</h3>

            <p className='stories__free'>Везде есть бесплатная часть</p>
        </div>
        <div className='stories__filter'>
            <Filter 
                onFilterChange={handleFilterChange} 
                onClose={onCloseFilter} 
                data={DATACareer}
            />
        </div>
            <div className="stories__flex">
            {filteredData.length > 0 ? (
                    filteredData.slice(0, visibleCount).map((story, index) => (
                        <StoriesPreview
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
                            onSave={saveStory} 
                            onRemove={removeStory}
                            onIncreaseView={onIncreaseView}
                            isSaved={isStorySaved(story.storyId)} 
                            showLoginMessage={showLoginMessage}
                        />
                    ))
                ) : (
                    <div className='stories__empty-container'>
                        <p className='stories__empty-text'>К сожалению у нас нет историй по такому запросу</p>
                        <p className='stories__empty-more'>Но есть более вдохновляющих 100 историй в бизнесе и карьере, которые могут Вам понравится</p>
                    </div>
                )}
            </div>
            {visibleCount < filteredData.length && (
                <button 
                    className='main__link main__link_mobile'  
                    onClick={handleShowMore}
                    disabled={isLoading} // Отключаем кнопку во время загрузки
                >
                    {isLoading 
                        ? 'Загружаю...' 
                        : `Еще ${filteredData.length - visibleCount} ${getStoryLabel(filteredData.length - visibleCount)}`}
                </button>
            )}

            {showPopup && (
            <PopupSendEmail />
            )}
        </div>
    );
};

export default CareerStories;

