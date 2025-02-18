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
    isStorySaved,
    isSaving,
    IsSaveBlocked,
    getViews,
}) => {
    const [filteredData, setFilteredData] = useState(data); // Показываем все истории по умолчанию
    const [filters, setFilters] = useState(() => {
        const savedFilters = JSON.parse(localStorage.getItem('careerFilters'));
        return savedFilters || { field: '', searchTerm: '' }; // По умолчанию без фильтров
    });

    const [visibleCount, setVisibleCount] = useState(4); // Количество отображаемых историй
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const pathname = window.location.pathname;

    useEffect(() => {
        document.title = 'Истории про карьеру — CEOstory';
        
        // Загружаем сохраненные фильтры
        const savedFilters = JSON.parse(localStorage.getItem('careerFilters'));
        if (savedFilters) {
            setFilters(savedFilters);
            applyFilters(savedFilters);
        } else {
            setFilteredData(data); // Если нет фильтров, показываем все истории
        }
    }, [data]);

    useEffect(() => {
        setTimeout(() => {
            setShowPopup(false);
        }, 10000);
    }, []);

    // Фильтрация данных при изменении фильтра
    const applyFilters = (newFilters) => {
        const { field, searchTerm } = newFilters;

        const newFilteredData = data.filter((story) => {
            const matchesField = field ? story.field === field : true;
            const matchesSearchTerm = searchTerm ? story.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
            return matchesField && matchesSearchTerm;
        });

        setFilteredData(newFilteredData);
    };

    // Обработчик изменения фильтров
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        localStorage.setItem('careerFilters', JSON.stringify(newFilters));
        applyFilters(newFilters);
    };

    // Показать больше историй
    const handleShowMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount(filteredData.length);
            setIsLoading(false);
        }, 1000);
    };

    const getStoryLabel = (count) => {
        if (count === 1) return 'история';
        if (count >= 2 && count <= 4) return 'истории';
        return 'историй';
    };

    let headerText = 'Каталог историй про ';
    headerText += pathname.includes('career-stories') ? 'карьеру' : 'бизнес';

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
                            key={story.id || story._id || index }     
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
                            isSaving={isSaving}
                            IsSaveBlocked={IsSaveBlocked}
                            getViews={getViews}
                        />
                    ))
                ) : (
                    <div className='stories__empty-container'>
                        <p className='stories__empty-text'>К сожалению у нас нет историй по такому запросу</p>
                        <p className='stories__empty-more'>Но есть более вдохновляющих 100 историй в бизнесе и карьере, которые могут вам понравиться</p>
                    </div>
                )}
            </div>
            {visibleCount < filteredData.length && (
                <button 
                    className='link link__stories'  
                    onClick={handleShowMore}
                    disabled={isLoading}
                >
                    <span>
                        {isLoading 
                            ? 'Загружаю...' 
                            : `Еще ${filteredData.length - visibleCount} ${getStoryLabel(filteredData.length - visibleCount)}`}
                    </span>
                </button>
            )}
            {showPopup && <PopupSendEmail />}
        </div>
    );
};

export default CareerStories;