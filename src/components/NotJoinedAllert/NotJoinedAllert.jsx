import React, { useEffect, useState, useContext } from 'react';
import './NotJoinedAllert.css';
import logo from '../../assets/logo-notloggedin-desk.svg';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const NotJoinedAllert = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const currentUser = useContext(CurrentUserContext);
    const location = useLocation(); 

    const token = localStorage.getItem('token');
    const isOnSpecialPage = token && location.pathname === '/shaikhullina-story';
    const isSubscriptionInactive = token && !currentUser.subscriptionActive;

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // условия отображения
        if (scrollY > (documentHeight - windowHeight) * 0.1 && !token && (!isOnSpecialPage || !isSubscriptionInactive)) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleResize = () => {
        setScreenSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleScroll(); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [token, currentUser, location]); 
    

    return (
        <div className={`notlogedin ${isVisible ? '' : 'notlogedin_disabled'}`}>
            <div className='notlogedin__container'>
                <div className='notlogedin__left-block'>
                    <p className='notlogedin__left-block-title'>Присоединись к CEOstory 
                    и получи доступ к статьям
                    </p>
                    <p className='notlogedin__left-block-text'>На данный момент ты не участник CEOstory</p>
                    <Link to='/signin' className='main__link notlogedin__botton '>Присоединиться</Link>
                </div>

                <div className='notlogedin__right-block'>
                    <Link to='/' className='notlogedin__logo button'>
                        <img src={logo} className='notlogedin__logo-img' alt='CEOstory'/>
                    </Link>
                    <p className='notlogedin__right-block-header'>Раскрой секреты успеха  
                    {screenSize >767 && (
                        <span className='notlogedin__right-block-span'><br/>бизнесменов и&nbsp;топ-менеджеров</span>
                    )}
                    {screenSize < 767 && (
                        <span className='notlogedin__right-block-span'><br/>бизнесменов <br/>и&nbsp;топ-менеджеров</span>
                    )}
                    </p>
                    <p className='notlogedin__right-block-text'>С СEOstory ты узнаешь какой путь надо пройти, чтобы сделать успешную карьеру или бизнес. </p>
                    <p className='notlogedin__right-block-more'>Погрузись в 10 историй с советами, как с нуля добиться того же самого. </p>
                    <div className='notlogedin__right-block-image'></div>
                </div>
            </div>
        </div>
    );
}

export default NotJoinedAllert;
