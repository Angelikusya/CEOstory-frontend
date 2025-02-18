import './Header.css';
import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoHeader from '../../assets/logo-header-desk.svg';
import logoHeaderTablet from '../../assets/logo-header-tablet.svg'
import { CurrentUserContext } from '../../context/CurrentUserContext';
import profile from '../../assets/profile-header-desk.svg';
import menu from '../../assets/menu-header-tablet.svg';
import save from '../../assets/save-header-mobile.svg';
import NavDocumentsPopup from '../NavDocumentsPopup/NavDocumentsPopup';
import NavMain from '../NavMain/NavMain';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (Math.abs(scrollY - lastScrollY) > 5) {
        setScrollDirection(direction);
      }
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return scrollDirection;
}

const Header = ({logout}) => {

  const { pathname } = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const token = localStorage.getItem('token');
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollDirection = useScrollDirection();   // крутой header
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isNavDocumentsOpen, setIsNavDocumentsOpen] = useState(false);
  const [isNavMainOpen, setIsNavMainOpen] = useState(false);


  const handleOpenNavDocuments = () => {
    setIsNavDocumentsOpen(true);
  };

  const handleCloseNavDocuments = () => {
    setIsNavDocumentsOpen(false);
  };

  const handleOpenNavMain = () => {
    setIsNavMainOpen(true);
  };

  const handleCloseNavMain = () => {
    setIsNavMainOpen(false);
  };

  //отображаем header для документов
  const activeDocumentHeader = () => 
    pathname === '/documents/privacy-policy'||
    pathname === '/documents/personal-data'||
    pathname === '/documents/terms-of-use'||
    pathname === '/documents/personal-data-form';


  //где header не отображается
  const hideHeader = () => 
    ['/signup', '/signin', '/forgottenpassword', '/resetpassword', '/payment', '/404', '/500']
      .some(route => pathname.startsWith(route)) || pathname.startsWith('/password-reset/');
        // Обработчик скролла
  useEffect(() => {
    const handleScroll = () => {
      if (scrollDirection === "down") {
        setIsMenuVisible(false);
      } else if (scrollDirection === "up") {
        setIsMenuVisible(true);
      }
    };

    handleScroll(); // Вызываем обработчик при монтировании

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [scrollDirection]);

  // Изменение размера окна
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
      
  if (hideHeader()) {
    return null;
  }

  return (
    <header className={`sticky sticky__new ${scrollDirection === "down" ? "sticky__new--down" : "sticky__new--up"}`}>
      <div className='header__margin'> 

      {/* для десктопной версии */}
      {screenSize > 1279 && (
        <div className='header__desktop'>
          <div className='header__desktop-container'>
            <Link to='/' className='header__desktop-logo button'>
              <img src={logoHeader} className='header__desktop-logo-img' alt='CEOstory'/>
            </Link>
            <nav className='header__desktop-navs'>
              <Link to='/career-stories' className={`header__desktop-nav ${location.pathname === '/career-stories' ? 'active' : ''}`}> Истории в карьере</Link>
              <Link to='/business-stories' className={`header__desktop-nav ${location.pathname === '/business-stories' ? 'active' : ''}`}> Истории в бизнесе</Link>
              {/* <Link 
                to='/academy' 
                className={`header__desktop-nav ${location.pathname === '/academy' ? 'active' : ''}`} 
                onClick={(e) => e.preventDefault()} // предотвращаем переход
                >
                Академия
                <div className='header__desktop-nav-soon'>скоро</div>
              </Link> */}
            </nav>
          </div>

        {/* если пользователь не залогинен */}
          {!token && (
            <div className='header__desktop-registers'>
              <Link to='/signin' className='header__desktop-login button'>Вход</Link>
            </div>
          )}

        {/* если пользователь залогинен */}
          {token && (
            <div className='header__desktop-logedin'>
              <Link to='/saved' className={`header__desktop-saved button ${location.pathname === '/saved' ? 'active' : ''}`}></Link>
              <Link to='/about' className='header__desktop-name-wrapper button'>
                <img src={profile} alt='Профиль'></img>
              </Link>
            </div>
            )}
          </div>
        )}

        {/* для мобильной версии */}
        {screenSize <= 1279 && (
          <div className='header__mobile'>
            <Link to='/' className='header__desktop-logo button'>
              <img src={logoHeaderTablet} className='header__desktop-logo-img' alt='CEOstory'/>
            </Link>

            <div className='header__mobile-container'>
              {/* если пользователь не залогинен */}
              {!token && (
                <div className='header__desktop-registers'>
                  <Link to='/signin' className='header__desktop-login button'>Вход</Link>
                </div>
              )}

              {/* если пользователь залогинен */}
              {!activeDocumentHeader()  && (
                <button className='header__tablet-menu' onClick={handleOpenNavMain}></button>
              )}
              {activeDocumentHeader()  && (
              <div className='header__desktop-menu-document'>
                <button className='header__desktop-menu button' onClick={handleOpenNavDocuments}>
                  <img src={menu} alt="Menu" className='header__desktop-menu-icon' />
                </button>
              </div>
              )}
            </div>
          </div>
          )}

        {/* для документов */}
        {isNavDocumentsOpen && (
          <NavDocumentsPopup onCloseNavDocuments={handleCloseNavDocuments} />
        )}
        {isNavMainOpen && (
          <NavMain onCloseNavMain={handleCloseNavMain} logout={logout}/>
        )}
      </div>
    </header>
  )
}

export default Header;
