import './NotPaidAllert.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo-notloggedin-desk.svg';
import DATABusiness from '../StoryData/DataBusiness'; 

const isOnSpecialPage = (pathname) => {
    return [
        '/', '/about', '/business-stories', '/signin',
        '/tariffs', '/signup', '/forgottenpassword', '/resetpassword',
        '/payment', '/404', '/500'
    ].includes(pathname) || pathname.startsWith('/password-reset/');
};

const NotPaidAllert = ({ hasActiveSubscription, free, getHistoryWord1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const token = localStorage.getItem('token');
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    // Если есть токен и подписка истекла — показываем попап
    const shouldShowAlert = token && !hasActiveSubscription && free === false

    // Обновление размера экрана
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Обработчик прокрутки для проверки видимости попапа
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const shouldShow = scrollY > (documentHeight - windowHeight) * 0.1 &&
                shouldShowAlert &&
                !isOnSpecialPage(location.pathname);
            // console.log('📢 Видимость попапа:', shouldShow ? 'ДА' : 'НЕТ');
            setIsVisible(shouldShow);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();  // Проверка сразу при монтировании компонента

        return () => window.removeEventListener('scroll', handleScroll);
    }, [shouldShowAlert, location.pathname]);

    // Ранний выход, если попап не должен отображаться
    if (!shouldShowAlert || !isVisible) return null;

    const totalStories = DATABusiness.length;


    return (
        <div className="notpaied">
            <div className='notpaied__container'>
                <div className='notpaied__left-block'>
                    <p className='notpaied__left-block-title'>
                        Ты достиг лимита по бесплатному доступу
                    </p>
                    <p className='notpaied__left-block-text'>Не упусти свой шанс - открой доступ уже сегодня</p>
                    <Link to='/tariffs' className='link link__notpaied'>
                        <span>Безлимитный доступ</span>
                    </Link>
                </div>
                <div className='notpaied__right-block'>
                    <Link to='/' className='notpaied__logo button'>
                        <img src={logo} className='notpaied__logo-img' alt='CEOstory'/>
                    </Link>
                    <p className='notpaied__right-block-header'>Открой бизнес
                    <span className='notpaied__right-block-span'><br/>по проверенным инструкциям</span>                  
                    </p>
                    <p className='notpaied__right-block-text'>С СEOstory ты узнаешь какой путь надо пройти, чтобы открыть свой бизнес</p>
                    <p className='notpaied__right-block-more'>
                        Погрузись в {totalStories} {getHistoryWord1(totalStories)}, как с нуля добиться того же самого
                    </p>
                    <div className='notpaied__right-block-image'></div>
                </div>
            </div>
        </div>
    );
};

export default NotPaidAllert;