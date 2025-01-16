import React, { useState, useEffect, useRef } from 'react';
import './Filter.css';
import lupe from '../../assets/lupe-filter-desk.svg';
// import data from '../Data/DataCareer';
import { useSwipeable } from 'react-swipeable'; // Импортируем библиотеку


const Filter = ({ onFilterChange, data }) => {
    const [filters, setFilters] = useState(() => {
        // Загружаем фильтры из localStorage или устанавливаем начальные значения
        const savedFilters = localStorage.getItem('filters');
        return savedFilters ? JSON.parse(savedFilters) : {
            income: '',
            field: '',
            searchTerm: ''
        };
    });
    const [showDropdown, setShowDropdown] = useState('');
    const [isActiveSearchline, setIsActiveSearchline] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const optionsRef = useRef(null);
    const prevFilters = useRef(filters);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const [hasActiveFilters, setHasActiveFilters] = useState(false);

    // Функция для преобразования строки в числовое значение
    const parseIncome = (income) => {
        const match = income.match(/от (\d+)(\s*млн)?/);
        if (match) {
            const value = parseInt(match[1], 10);
            return match[2] ? value * 1000000 : value * 1000; // Если "млн", умножаем на 1 млн, если "тыс", то на 1 тыс.
        }
        return 0; // Если не удалось распарсить, возвращаем 0
    };

    // Функция для сортировки
    const sortIncomeOptions = (options) => {
        return options.sort((a, b) => {
            const aValue = parseIncome(a);
            const bValue = parseIncome(b);
            return aValue - bValue; // Сравниваем числовые значения
        });
    };

    // Данные для фильтра исходя из данных в data
    const options = {
        income: sortIncomeOptions([...new Set(data.map(story => story.income))]),
        field: [...new Set(data.map(story => story.field))]
    };
    
    // Отображение фильтра в зависимости от ширины экрана
    const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768);
    };
    
    // Добавление debounce для обработки изменения размера окна
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
    
    // Сохранение фильтров в localStorage при изменении
    useEffect(() => {
        localStorage.setItem('filters', JSON.stringify(filters));
        if (JSON.stringify(prevFilters.current) !== JSON.stringify(filters)) {
            onFilterChange(filters);
            prevFilters.current = filters;
            
        }
    }, [filters, onFilterChange]);

    // Закрытие фильтра если клик вне фильтра
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

    // расскрываем меню
    const toggleDropdown = (type) => {
        setShowDropdown((prev) => (prev === type ? '' : type));
    };

    // Выбор фильтра
    const handleOptionClick = (key, option) => {
        setFilters((prev) => {
            const newFilters = { ...prev, [key]: filters[key] === option ? undefined : option };
            localStorage.setItem('filters', JSON.stringify(newFilters));
    
            return newFilters;
        });
        setTimeout(() => {
            setShowDropdown('');
        }, 0);
    };

    // Поиск по searchline
    const handleSearchChange = (e) => {
        setFilters((prev) => ({ ...prev, searchTerm: e.target.value }));
    };

    //сброс всех фильтров
    const resetFilters = () => {
        setFilters({
            income: '',
            field: '',
            searchTerm: ''
        });
        setShowDropdown('');
        localStorage.removeItem('filters'); // Удаляем сохраненные фильтры из localStorage
    };


    useEffect(() => {
        const activeFilters = Object.values(filters).some(filter => filter);
        setHasActiveFilters(activeFilters);
    }, [filters]); // Зависимость от filters


    // сброс конкретного фильтра
    const resetFilter = (key) => {
        setFilters((prev) => ({ ...prev, [key]: '' }));
        localStorage.setItem('filters', JSON.stringify({ ...filters, [key]: '' }));
        setHasActiveFilters(false)
    };

    // отображение названия фильтра
    const getButtonText = (key) => {
        switch (key) {
            case 'income':
                return filters.income || 'Доход';
            case 'field':
                return filters.field || 'Сфера';
            default:
                return '';
        }
    };

    // Функция для фильтрации опций по поисковому запросу
    const filterOptions = (optionsArray) => {
        const searchTermLower = filters.searchTerm.toLowerCase();
        return optionsArray.filter(option =>
            option.toLowerCase().includes(searchTermLower)
        );
    };

    // устанавливаю падеж
    const getStoriesLabel = (count) => {
        if (count === 1) {
            return "историю";
        } else if (count >= 2 && count <= 4) {
            return "истории";
        } else {
            return "историй";
        }
    };
    
    // отображение информации на странице в соответствии с фильтрами
    const getFilteredStoriesCount = () => {
        return data.filter(story => {
            const matchesIncome = filters.income ? story.income === filters.income : true;
            const matchesField = filters.field ? story.field === filters.field : true;
            const matchesSearchTerm = filters.searchTerm ? story.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) : true;

            return matchesIncome && matchesField && matchesSearchTerm;
        }).length;
    };

    // отображение информации на странице в соответствии с фильтрами
    const filteredStoriesCount = getFilteredStoriesCount();
    // устанавливаю падеж 
    const storiesLabel = getStoriesLabel(filteredStoriesCount);

    // Обработчик смахивания
    const handlers = useSwipeable({
        onSwipedDown: () => {
            // setIsFilterOpen(false);
            setIsFilterOpen((prev) => !prev); // Переключаем состояние фильтра
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    // Функция для закрытия фильтра
    const handleFilterToggle = () => {
        console.log(isFilterOpen)
        setIsFilterOpen((prev) => !prev); // Переключаем состояние фильтра

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
                                            {option}
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

                    {/* <button onClick={resetFilters} className='filter__button button filter__button-reset'>Сбросить фильтры</button> */}
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
                                        <h3 className="filter__mobile-title">
                                            { key === 'income' ? 'Доход' : 'Сфера'} 
                                        </h3>

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

                        {/* <button onClick={resetFilters} className="filter__button button filter__button-reset">Сбросить фильтры</button> */}
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
