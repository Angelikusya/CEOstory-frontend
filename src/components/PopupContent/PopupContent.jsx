import React, { useState, useEffect } from 'react';
import './PopupContent.css';
import { Link } from 'react-router-dom';

const PopupContent = ({ sections }) => {
    const [activeId, setActiveId] = useState(sections[0]?.id || null); // Устанавливаем первый id как активный
    const [isSticky, setIsSticky] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1279);

    const handleLinkClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveId(id);
    };

    const handleMouseEnter = (id) => {
        setActiveId(id);
    };

    const handleMouseLeave = () => {
        setActiveId(null);
    };

    const handleScroll = () => {
        const offset = window.scrollY;

        // Проверяем каждый секцию на видимость
        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                const rect = element.getBoundingClientRect();
                const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

                if (isInViewport) {
                    setActiveId(section.id); // Устанавливаем активный id в зависимости от видимости
                }
            }
        });

        // Логика для sticky
        const batashovShortElement = document.querySelector('.story-content');
        if (batashovShortElement) {
            const rect = batashovShortElement.getBoundingClientRect();
            const isInViewport = rect.bottom > 500 && rect.top < window.innerHeight;

            if (offset > 300 && isInViewport) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1280);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [sections]); // Добавляем sections в зависимости, чтобы обновить слушатели при изменении


    return (
        <div className=''>
            {isMobile ? (
                <div className='content__mobile'>
                    {/* Здесь можно добавить контент для мобильной версии */}
                    <ul className='content-mobile__list-link'>
                            {sections.map(({ id, title }) => (
                                <li key={id} 
                                    className={`content-mobile__link-container button ${activeId === id ? 'active' : ''}`} 
                                    onClick={() => handleLinkClick(id)}
                                >
                                    <h3 className={`content-mobile__link ${activeId === id ? 'active' : ''}`}>
                                        {title}
                                    </h3>
                                    <div className='content-mobile__img'></div>
                                </li>
                            ))}
                        </ul>
                </div>
            ) : (
                <div className={`content__desktop ${isSticky ? 'content-sticky' : ''}`}>
                    <div className='content__container'>
                        <p className='content__header'>Содержание</p>
                        <ul className='content__list-link'>
                            {sections.map(({ id, title }) => (
                                <li key={id} 
                                    className={`content__link-container ${activeId === id ? 'active' : ''}`} 
                                    onMouseEnter={() => handleMouseEnter(id)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleLinkClick(id)}
                                >
                                    <h3 className={`content__link ${activeId === id ? 'active' : ''}`}>
                                        {title}
                                    </h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupContent;
