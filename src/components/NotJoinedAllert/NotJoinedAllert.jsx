import React, { useEffect, useState, useContext } from 'react';
import './NotJoinedAllert.css';
import logo from '../../assets/logo-notloggedin-desk.svg';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import DATABusiness from '../StoryData/DataBusiness'; 


const NotJoinedAllert = ({ getHistoryWord1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const currentUser = useContext(CurrentUserContext);
    const location = useLocation();
    const token = localStorage.getItem('token');


    // Функция для проверки, находится ли пользователь на специальной странице
    const isOnSpecialPage = (pathname) => {
        return [
            '/', '/about', '/business-stories', '/signin',
            '/tariffs', '/signup', '/forgottenpassword', '/resetpassword',
            '/payment', '/404', '/500'
        ].includes(pathname) || pathname.startsWith('/password-reset/');
    };

    const isSubscriptionInactive = token && !currentUser?.subscriptionActive;

    // Определяем, должен ли алерт отображаться
    const shouldShowAlert = !token && !isOnSpecialPage(location.pathname) && !isSubscriptionInactive;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            setIsVisible(scrollY > (documentHeight - windowHeight) * 0.1 && shouldShowAlert);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [shouldShowAlert]);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isVisible) return null; // Если алерт не должен отображаться, сразу выходим

    const totalStories = DATABusiness.length;

    return (
        <div className={`notlogedin ${isVisible ? '' : 'notlogedin_disabled'}`}>
            <div className='notlogedin__container'>
                <div className='notlogedin__left-block'>
                    <p className='notlogedin__left-block-title'>Присоединись к CEOstory 
                    и получи доступ к инструкциям
                    </p>
                    <p className='notlogedin__left-block-text'>На данный момент ты не участник CEOstory</p>
                    <Link to='/signin' className='link link__notlogedin'>
                        <span>Присоединиться</span>
                    </Link>
                </div>

                <div className='notlogedin__right-block'>
                    <Link to='/' className='notlogedin__logo button'>
                        <img src={logo} className='notlogedin__logo-img' alt='CEOstory'/>
                    </Link>
                    <p className='notlogedin__right-block-header'>Открой бизнес 
                        <span className='notlogedin__right-block-span'><br/>по проверенным инструкциям </span>
                    </p>
                    <p className='notlogedin__right-block-text'>С СEOstory ты узнаешь какой путь надо пройти, чтобы открыть свой бизнес</p>
                    <p className='notpaied__right-block-more'>
                        Погрузись в {totalStories} {getHistoryWord1(totalStories)}, как с нуля добиться того же самого
                    </p>
                    <div className='notlogedin__right-block-image'></div>
                </div>
            </div>
        </div>
    );
};

export default NotJoinedAllert;