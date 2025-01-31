import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Gant.css';

const Gant = () => {
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
        <div className='gant'>
            {screenSize <= 767 ? (
                <div className='gant__container-mobile'>
                    <p className='gant__name-mobile'>Бесплатно от Кати</p>
                    <p className='gant__title-mobile'>Диаграмма Ганта</p>
                    <div className='gant__photo-mobile'></div>
                    <div className='gant__blok-mobile'>
                        <p className='gant__benefits'>Подходит для тех, кто:</p>
                        <div className='gant__benefits-container'>
                            <div className='gant__benefits-block'>
                                <div className='gant__benefit-icon-1'></div>
                                <p className='gant__benefit-text'>хочет эффективно управлять проектами</p>
                            </div>
                            <div className='gant__benefits-block'>
                                <div className='gant__benefit-icon-2'></div>
                                <p className='gant__benefit-text'>не хочет тратить много времени для настройки файлов</p>
                            </div>
                            <div className='gant__benefits-block'>
                                <div className='gant__benefit-icon-3'></div>
                                <p className='gant__benefit-text'>хочет сразу начать использовать эффективные методы</p>
                            </div>
                        </div>
                    </div>
                    <Link to='https://disk.yandex.ru/d/6O3NtUhe938Kzw' target='_blank' className='main__link gant__link-mobile'>Получить</Link>
                </div>
            ) : (
                <div className='gant__container'>
                    <div className='gant__photo'></div>
                    <div className='gant__blok'>
                        <p className='gant__name'>Бесплатно от Кати</p>
                        <p className='gant__title'>Диаграмма Ганта</p>
                        <p className='gant__benefits'>Подходит для тех, кто:</p>
                        <div className='gant__benefits-container'>
                            <div className='gant__benefits-block'>
                                <div className='gant__benefit-icon-1'></div>
                                <p className='gant__benefit-text'>хочет эффективно управлять проектами</p>
                            </div>
                            <div className='gant__benefits-block'>
                                <div className='gant__benefit-icon-2'></div>
                                <p className='gant__benefit-text'>не хочет тратить много времени для настройки файлов</p>
                            </div>
                            <div className='gant__benefits-block'>
                                <div className='gant__benefit-icon-3'></div>
                                <p className='gant__benefit-text'>хочет сразу начать использовать эффективные методы</p>
                            </div>
                        </div>
                        <Link to='https://disk.yandex.ru/d/6O3NtUhe938Kzw' target='_blank' className='main__link gant__link'>Получить</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gant;
