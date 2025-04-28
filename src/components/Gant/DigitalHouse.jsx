import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Benefits.css';
import documentation from '../../assets/speaker-photoes/BatashovR/documents.png';

const DigitalHouse = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const handleResize = () => {
        setScreenSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='benefits'>
            {screenSize <= 767 ? (
                <div className='benefits__container-mobile'>
                    <p className='benefits__name-mobile'>Бесплатно от Романа</p>
                    <p className='benefits__title-mobile'>Примеры рабочей документации</p>
                    <img src={documentation} className='benefits__photo benefits__photo-mobile' alt="Материалы"/>
                    <div className='benefits__blok-mobile'>
                        <p className='benefits__benefits'>Подходит для тех, кто:</p>
                        <div className='benefits__benefits-container'>
                            <div className='benefits__benefits-block'>
                                <div className='benefits__benefit-icon'></div>
                                <p className='benefits__benefit-text'>Хочет узнать список оборудования под проект с поставщиками и стоимостью</p>
                            </div>
                            <div className='benefits__benefits-block'>
                                <div className='benefits__benefit-icon'></div>
                                <p className='benefits__benefit-text'>Хочет понять, как выглядит коммерческое предложение под проектирование</p>
                            </div>
                            <div className='benefits__benefits-block'>
                                <div className='benefits__benefit-icon'></div>
                                <p className='benefits__benefit-text'>Хочет увидеть опросный лист для клиентов со списком возможных услу</p>
                            </div>
                        </div>
                    </div>
                    <div className='link__benefits-mobile'>
                        <Link to='https://disk.yandex.ru/d/mLnK9rZAe8GFBg' target='_blank' className='link'>
                            <span>Получить</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className='benefits__container'>
                    <img src={documentation} className='benefits__photo' alt="Материалы"/>
                    <div className='benefits__blok'>
                        <p className='benefits__name'>Бесплатно от Романа</p>
                        <p className='benefits__title'>Примеры рабочей документации</p>
                        <p className='benefits__benefits'>Подходит для тех, кто:</p>
                        <div className='benefits__benefits-container'>
                            <div className='benefits__benefits-block'>
                                <div className='benefits__benefit-icon'></div>
                                <p className='benefits__benefit-text'>Хочет узнать список оборудования под проект с поставщиками и стоимостью</p>
                            </div>
                            <div className='benefits__benefits-block'>
                                <div className='benefits__benefit-icon'></div>
                                <p className='benefits__benefit-text'>Хочет понять, как выглядит коммерческое предложение под проектирование</p>
                            </div>
                            <div className='benefits__benefits-block'>
                                <div className='benefits__benefit-icon'></div>
                                <p className='benefits__benefit-text'>Хочет увидеть опросный лист для клиентов со списком возможных услуг</p>
                            </div>
                        </div>
                        <Link to='https://disk.yandex.ru/d/mLnK9rZAe8GFBg' target='_blank' className='link link__benefits'>
                            <span>Получить</span>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DigitalHouse;
