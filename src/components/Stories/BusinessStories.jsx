import React, { useState, useEffect } from 'react';
import './Stories.css';
import Filter from '../Filter/Filter';
import DATABusiness from '../StoryData/DataBusiness';
import StoriesPreview from '../StoriesPreview/StoriesPreview';
import { Helmet } from 'react-helmet-async';

const BusinessStories = ({ 
    data = DATABusiness, 
    onCloseFilter, 
    saveStory, 
    removeStory, 
    onIncreaseView, 
    isStorySaved,
    getHistoryWord3,
    totalStories,
    getHistoryWord2,
    getHistoryWord1,
    getHistoryWord4,
}) => {

    const [filteredData, setFilteredData] = useState(data); // Показываем все истории по умолчанию

    const [filters, setFilters] = useState({
        incomeFilter: '',
        field: '',
        searchTerm: '',
        investments: '',
      });

    const [visibleCount, setVisibleCount] = useState(4); // Количество отображаемых историй
    const [isLoading, setIsLoading] = useState(false);
    const pathname = window.location.pathname;

    useEffect(() => {
        if (data && data.length > 0) {
            setFilteredData(data);
        }
    }, [data]);

    useEffect(() => {
        
        // Загружаем сохраненные фильтры
        const savedFilters = JSON.parse(localStorage.getItem('filters'));
        if (savedFilters) {
            setFilters(savedFilters);
            applyFilters(savedFilters);
        } else {
            setFilteredData(data); // Если нет фильтров, показываем все истории
        }
    }, [data]);

    // Фильтрация данных при изменении фильтра
    const applyFilters = (newFilters) => {
        const {
          incomeFilter = '',
          field = '',
          searchTerm = '',
          investments = '',
        } = newFilters;
      
        const newFilteredData = data.filter((story) => {
          const matchesIncome = incomeFilter ? story.incomeFilter === incomeFilter : true;
          const matchesField = field ? story.field === field : true;
          const matchesInvestments = investments ? story.investments === investments : true;
          const matchesSearchTerm = searchTerm
            ? ['title', 'name', 'job', 'field'].some((key) =>
                story[key]?.toLowerCase().includes(searchTerm.toLowerCase())
              )
            : true;
      
          return matchesIncome && matchesField && matchesInvestments && matchesSearchTerm;
        });
      
        setFilteredData(newFilteredData);
      };

    // // Обработчик изменения фильтров
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        localStorage.setItem('businessFilters', JSON.stringify(newFilters));
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
    
    return (
        <div className='stories'>
            <Helmet>
                <title>Инструкции по бизнесу — CEOstory</title>
                <meta 
                    name="description" 
                    content="Пошаговые инструкции и реальные истории предпринимателей: как открыть и развить прибыльный бизнес в России. CEOstory — проверенные советы от тех, кто уже добился успеха." 
                />
                <meta 
                    name="keywords" 
                    content="истории успеха, инструкции по открытию бизнеса, бизнес-истории, открыть бизнес, кейсы предпринимателей, запуск стартапа, как стать бизнесменом, путь предпринимателя, бизнес в России, советы по бизнесу, обучение бизнесу, развитие компании, реальные примеры бизнеса" 
                />
                <link rel="canonical" href="https://ceostory.ru/business-stories" />
            </Helmet>
            <div className='stories__titles'>
                <h3 className='stories__about'>Каталог историй по бизнесу</h3>
                <p className='stories__free'>Везде есть бесплатная часть</p>
            </div>
            <div className='stories__filter'>
                <Filter 
                    onClose={onCloseFilter} 
                    data={DATABusiness}
                    onFilterChange={handleFilterChange}
                    getHistoryWord1={getHistoryWord1}
                />
            </div>
            <div className="stories__flex">
                {filteredData.length > 0 ? (
                    filteredData.slice(0, visibleCount).map((story, index) => (
                        <StoriesPreview
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
                            onSave={saveStory} 
                            onRemove={removeStory}
                            onIncreaseView={onIncreaseView}
                            isSaved={isStorySaved(story.storyId)} 
                            searchTerm={filters.searchTerm}
                        />
                    ))
                ) : (
                    <div className='stories__empty-container'>
                        <p className='stories__empty-text'>К сожалению, у нас нет инструкций по такому запросу</p>
                        <p className='stories__empty-more'>Но есть {totalStories} {getHistoryWord4(totalStories)} {getHistoryWord3(totalStories)}, как открыть бизнес, которые могут тебе понравиться </p>
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
                            : `Еще ${filteredData.length - visibleCount} ${getHistoryWord3(filteredData.length - visibleCount)}`}
                    </span>
                </button>
            )}
        </div>
    );
};

export default BusinessStories;