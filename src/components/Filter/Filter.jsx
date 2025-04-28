import React, { useState, useEffect, useRef } from 'react';
import './Filter.css';
import lupe from '../../assets/lupe-filter-desk.svg';
import { useSwipeable } from 'react-swipeable';

const Filter = ({ onFilterChange, data, getHistoryWord1 }) => {

    const storageKey = 'filters';

    const [filters, setFilters] = useState(() => {
        const savedFilters = localStorage.getItem(storageKey);
        return savedFilters ? JSON.parse(savedFilters) : {
            incomeFilter: '',
            field: '',
            searchTerm: '',
            investments: '',
        };
    });

    const [showDropdown, setShowDropdown] = useState('');
    const [isActiveSearchline, setIsActiveSearchline] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const optionsRef = useRef(null);
    const prevFilters = useRef(filters);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const [hasActiveFilters, setHasActiveFilters] = useState(false);

    const highlightMatch = (text, query) => {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, index) =>
            regex.test(part) ? <mark key={index}>{part}</mark> : part
        );
    };

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(filters));
        if (JSON.stringify(prevFilters.current) !== JSON.stringify(filters)) {
            onFilterChange(filters);
            prevFilters.current = filters;
        }
    }, [filters, onFilterChange, storageKey]);

    const handleOptionClick = (key, option) => {
        setFilters((prev) => ({
            ...prev,
            [key]: prev[key] === option ? '' : option
        }));
        setTimeout(() => {
            setShowDropdown('');
        }, 0);
    };

    const resetFilters = () => {
        setFilters({ incomeFilter: '', field: '', searchTerm: '', investments: '' });
        setShowDropdown('');
        localStorage.removeItem(storageKey);
        localStorage.removeItem('businessFilters');
    };

    const parseIncomeFilter = (incomeFilter) => {
        const match = incomeFilter.match(/от (\d+)(\s*млн)?/);
        if (match) {
            const value = parseInt(match[1], 10);
            return match[2] ? value * 1000000 : value * 1000;
        }
        return 0;
    };

    const sortIncomeOptions = (options) => {
        return options.sort((a, b) => {
            const aValue = parseIncomeFilter(a);
            const bValue = parseIncomeFilter(b);
            return bValue - aValue;
        });
    };

    const options = {
        field: [...new Set(data.map(story => story.field))],
        incomeFilter: sortIncomeOptions([...new Set(data.map(story => story.incomeFilter))]),
        investments: [...new Set(data.map(story => story.investments))],
    };

    const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768);
    };

    useEffect(() => {
        const debounceResize = () => {
            clearTimeout(window.resizeTimeout);
            window.resizeTimeout = setTimeout(handleResize, 100);
        };

        window.addEventListener('resize', debounceResize);

        return () => {
            window.removeEventListener('resize', debounceResize);
            clearTimeout(window.resizeTimeout);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('filters', JSON.stringify(filters));
        if (JSON.stringify(prevFilters.current) !== JSON.stringify(filters)) {
            onFilterChange(filters);
            prevFilters.current = filters;
        }
    }, [filters, onFilterChange]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                setShowDropdown('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = (type) => {
        setShowDropdown((prev) => (prev === type ? '' : type));
    };

    const handleSearchChange = (e) => {
        setFilters((prev) => ({ ...prev, searchTerm: e.target.value }));
    };

    useEffect(() => {
        const activeFilters = Object.values(filters).some(filter => filter);
        setHasActiveFilters(activeFilters);
    }, [filters]);

    const resetFilter = (key) => {
        setFilters((prev) => ({ ...prev, [key]: '' }));
        localStorage.setItem('filters', JSON.stringify({ ...filters, [key]: '' }));
        setHasActiveFilters(false);
    };

    const getButtonText = (key) => {
        switch (key) {
            case 'incomeFilter':
                return filters.incomeFilter || 'Выручка';
            case 'field':
                return filters.field || 'Сфера';
            case 'investments':
                return filters.investments || 'Вложения';
            default:
                return '';
        }
    };

    const getFilterTitle = (key) => {
        switch (key) {
          case 'incomeFilter':
            return 'Выручка';
          case 'field':
            return 'Сфера';
          case 'investments':
            return 'Вложения';
          default:
            return '';
        }
      };

    const filterOptions = (optionsArray) => {
        const searchTermLower = filters.searchTerm.toLowerCase();
        return optionsArray.filter(option =>
            option.toLowerCase().includes(searchTermLower)
        );
    };
    
    const getFilteredStoriesCount = () => {
        return data.filter(story => {
            const matchesIncomeFilter = filters.incomeFilter ? story.incomeFilter === filters.incomeFilter : true;
            const matchesField = filters.field ? story.field === filters.field : true;
            const matchesInvestments = filters.investments ? story.investments === filters.investments : true;
            const matchesSearchTerm = filters.searchTerm
                ? ['title', 'name', 'job', 'field'].some((key) =>
                    story[key]?.toLowerCase().includes(filters.searchTerm.toLowerCase())
                  )
                : true;

            return matchesIncomeFilter && matchesField && matchesInvestments && matchesSearchTerm;
        }).length;
    };

    const filteredStoriesCount = getFilteredStoriesCount();
    const storiesLabel = getHistoryWord1(filteredStoriesCount);

    const handlers = useSwipeable({
        onSwipedDown: () => {
            setIsFilterOpen((prev) => !prev);
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const handleFilterToggle = () => {
        setIsFilterOpen((prev) => !prev);
    };

    return (
        <div className='filter'>
            {isDesktop ? ( 
                <div className=" filter__desktop">
                    <div 
                        className={`filter__searchline ${isActiveSearchline ? 'active' : ''}`} 
                        onMouseEnter={() => setIsActiveSearchline(true)} 
                        onMouseLeave={() => setIsActiveSearchline(false)}
                    >
                        <img className='filter__searchline-img' src={lupe} alt='Поиск' />
                        <input
                            type="text"
                            autoComplete="off"
                            placeholder="Что ищете?"
                            value={filters.searchTerm}
                            onChange={handleSearchChange}
                            onFocus={() => setIsActiveSearchline(true)}
                            onBlur={() => {
                                // Убираем активность, только если поле пустое и не активно
                                if (filters.searchTerm.trim() === '' && !isActiveSearchline) {
                                    setIsActiveSearchline(false);
                                }
                            }} 
                        className={`filter__searchline-input ${filters.searchTerm ? 'active' : ''}`}
                        />


                    </div>

                    {Object.keys(options).map((key) => (
                        <div className="filter__container" key={key}>
                            <button 
                                onClick={() => toggleDropdown(key)} 
                                className={`filter__button ${filters[key] ? 'active' : ''}`}
                            >
                                {getButtonText(key)}
                                <div 
                                    className={`filter__icon ${showDropdown === key ? 'rotated' : ''} ${filters[key] ? 'active' : ''}`} 
                                    onClick={() => resetFilter(key)}
                                >
                                </div>
                            </button>

                            {showDropdown === key && (
                                <div className="filter__content" ref={optionsRef}>
                                {filterOptions(options[key]).map((option) => (
                                    <div 
                                        key={option} 
                                        className="filter__option" 
                                        onClick={() => handleOptionClick(key, option)}
                                    >
                                        <span className="filter__option-text">
                                            {highlightMatch(option, filters.searchTerm)}
                                        </span>
                                    </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                <button 
                    onClick={resetFilters} 
                    className={`filter__button-reset ${hasActiveFilters ? 'active' : ''}`}
                    >Сбросить фильтры
                </button>
                </div>
            ) : (
                <div className='filter__major-mobile'>
                    <div className='filter__container-serchline'>
                    <div 
                        className='filter__searchline-mobile' 
                        onMouseEnter={() => setIsActiveSearchline(true)} 
                        onMouseLeave={() => setIsActiveSearchline(false)}
                    >
                        <img className='filter__searchline-img' src={lupe} alt='Поиск' />
                        <input
                            type="text"
                            autoComplete="off"
                            placeholder="Что ищите?"
                            value={filters.searchTerm}
                            onChange={handleSearchChange}
                            onFocus={() => setIsActiveSearchline(true)}
                            onBlur={() => {
                                // Убираем активность, только если поле пустое и не активно
                                if (filters.searchTerm.trim() === '' && !isActiveSearchline) {
                                    setIsActiveSearchline(false);
                                }
                            }} 
                        className={`filter__searchline-input ${filters.searchTerm ? 'active' : ''}`}
                        />
                    </div>
                    <button className='filter__buttton-open button' onClick={handleFilterToggle}>
                        Фильтр
                        <div className={`filter__buttton-active ${hasActiveFilters ? 'active' : ''}`} ></div>
                    </button>
                    </div>
                    {isFilterOpen && (
                    <div className={`filter__for-mobile show `} {...handlers}>
                        <div className='filter__mobile'>
                            <div className='filter__mobile-line'></div>
                                {Object.keys(options).map((key) => (
                                    <div className="filter__mobile-container" key={key}>
                                        <h3 className="filter__mobile-title">{getFilterTitle(key)}</h3>
                                        <div className="filter__mobile-content">
                                            {options[key].map((option) => (
                                                <div 
                                                    key={option} 
                                                    className={`filter__mobile-option ${filters[key] === option ? 'active' : ''}`} 
                                                    onClick={() => handleOptionClick(key, option)}
                                                    >
                                                    {option}
                                                </div>
                                            ))}
                                            
                                        </div>
                                    </div>
                                ))}
                                <div className="filter__mobile-button-container">
                                    {filteredStoriesCount > 0 && (
                                        <button className="filter__mobile-show-button button" onClick={handleFilterToggle}>
                                            Показать {filteredStoriesCount} {storiesLabel}
                                        </button>
                                    )}
                                </div>
                    </div>
                </div>
                )}
            </div>
            )}
        {isFilterOpen && <div className='filter__overlay'></div>}
        </div>
    );
};

export default Filter;
