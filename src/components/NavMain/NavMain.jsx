import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavMain.css';

const NavMain = ({ onCloseNavMain, logout}) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true); 
  const token = localStorage.getItem('token');

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleCloseNavMain = () => {
    onCloseNavMain();
  };

  // Эффект для отслеживания ширины экрана
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth <= 1280);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleExit = () => {
    logout();
    onCloseNavMain();
  };

  // Если компонент не видим, ничего не рендерим
  if (!isVisible) {
    return null;
  }

  return (
    <nav className='nav-main'>
      <div className='overlay'></div>
      <div className='nav-main__container'>
        <div className='nav-main__block'>
          <Link className='nav-main__logo button'></Link>
          <button className='nav-main__close' onClick={handleCloseNavMain}></button>
        </div>

        {token && (
          <ul className='nav-main__list'>
            <li className='nav-main__item'>
              <Link to="/about" className='nav-main__link button' onClick={handleCloseNavMain}>
                <div className='nav-main__image profile'></div>
                <p className='nav-main__text'>Личный кабинет</p>
              </Link>
            </li>
            <li className='nav-main__item'>
              <Link to="/saved" className='nav-main__link button' onClick={handleCloseNavMain}>
                <div className='nav-main__image saving'></div>
                <p className='nav-main__text'>Сохраненное</p>
              </Link>
            </li>
            <li className='nav-main__item'>
              <button  className='nav-main__link button' onClick={handleExit}>
                <div className='nav-main__image logout'></div>
                <p className='nav-main__text'>Выйти из профиля</p>
              </button>
            </li>
          </ul>
          )}

        {!token && (
          <div className='nav-main__notlogedin'>
            <p className='nav-main__notlogedin-login'>Войдите в аккаунт</p>
            <p className='nav-main__notlogedin-text' >Чтобы читать и сохранять понравившиеся истории</p>
            <Link to="/signin" className='nav-main__notlogedin-link button' onClick={handleCloseNavMain}>Войти
            </Link>
          </div>
        )}    
        <div className='nav-main__line'></div>

        <ul className='nav-main__list-nav'>
          <li className='nav-main__nav-item'>
            <Link to="/career-stories" className='nav-main__nav button' onClick={handleCloseNavMain}>
              <div className='nav-main__image career'></div>
              <p className={`nav-main__text ${getActiveClass("/career-stories")}`}>Истории <span className='nav-main__text span'>в карьере</span></p>
            </Link>
          </li>
          <li className='nav-main__nav-item'>
            <Link to="/business-stories" className='nav-main__nav button' onClick={handleCloseNavMain}>
              <div className='nav-main__image business'></div>
              <p className={`nav-main__text ${getActiveClass("/business-stories")}`}>Истории <span className='nav-main__text span'>в бизнесе</span></p>
            </Link>
          </li>

          <li className='nav-main__nav-item'>
            {/* <Link to="/academy" className='nav-main__nav button' onClick={handleCloseNavMain}   onClick={(e) => e.preventDefault()}>
              <div className='nav-main__image academy'></div>
              <p className={`nav-main__text ${getActiveClass("/academy")}`}>
                <span className='nav-main__text span'>Академия</span>
              </p>
            </Link> */}

            {/* <Link to="/academy" className='nav-main__nav button' onClick={(e) => e.preventDefault()}>
              <div className='nav-main__image academy'></div>
              <div className={`nav-main__text ${getActiveClass("/academy")}`}>
                <span className='nav-main__text span soon'>Академия</span>
                <p className='nav-main__text-soon'>скоро</p>
              </div>
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMain;
