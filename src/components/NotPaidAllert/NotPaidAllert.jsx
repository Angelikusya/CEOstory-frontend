import './NotPaidAllert.css';
import React, { useEffect, useState, useContext } from 'react';
import logoHeader from '../../assets/logo-header-desk.svg';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import logo from '../../assets/logo-notloggedin-desk.svg';


const NotPaidAllert = () => {
    const [isVisible, setIsVisible] = useState(false);
    const currentUser = useContext(CurrentUserContext);
    const location = useLocation(); 

    const token = localStorage.getItem('token');
    const isOnSpecialPage = location.pathname === '/korotkovae-story' || '/batashev-story' ;
    const isSubscriptionActive = currentUser.subscriptionActive;

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // условия отображения
        if (scrollY > (documentHeight - windowHeight) * 0.1 && !isSubscriptionActive && !isOnSpecialPage) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Проверяем условия для отображения компонента при монтировании
        handleScroll(); // Обновляем видимость сразу при монтировании

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        <div className={`notpaied ${isVisible ? '' : 'notpaied_disabled'}`}>
            <div className='notpaied__container'>
                <div className='notpaied__left-block'>
                    <p className='notpaied__left-block-title'>
                        Ты достиг лимита по статьям с бесплатным доступом
                    </p>
                    <p className='notpaied__left-block-text'>Не упусти свой шанс - открой доступ уже сегодня</p>
                    <Link to='/tariffs' className='main__link notpaied__botton'>Безлимитный доступ</Link>
                </div>

                <div className='notpaied__right-block'>
                    <Link to='/' className='notpaied__logo button'>
                        <img src={logo} className='notpaied__logo-img' alt='CEOstory'/>
                    </Link>
                    <p className='notpaied__right-block-header'>Раскрой секреты успеха  
                    {screenSize >767 && (
                        <span className='notpaied__right-block-span'><br/>бизнесменов и&nbsp;топ-менеджеров</span>
                    )}
                    {screenSize < 767 && (
                        <span className='notpaied__right-block-span'><br/>бизнесменов <br/>и&nbsp;топ-менеджеров</span>
                    )}                   
                    </p>
                    <p className='notpaied__right-block-text'>С СEOstory ты узнаешь какой путь надо пройти, чтобы сделать успешную карьеру или бизнес. </p>
                    <p className='notpaied__right-block-more'>Погрузись в 10 историй с советами, как с нуля добиться того же самого. </p>
                    <div className='notpaied__right-block-image'></div>
                </div>
            </div>
        </div>


    )
}
export default NotPaidAllert;
