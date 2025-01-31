import './Footer.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import message from '../../assets/message-footer-desk.svg';
import logoFooter from '../../assets/logo-footer-desk.svg';
import YouTube from '../../assets/youtube-footer.svg';
import LinkedIn from '../../assets/likedin-footer-desk.svg';
import Telegram from '../../assets/telegram-footer.svg';

function Footer() {
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

  const { pathname } = useLocation();

  const showFooterTotalBlack = () => {
    const isConfirmPage = pathname.startsWith('/confirm');
    const isPasswordResetPage = pathname.startsWith('/password-reset');
    return (
      isConfirmPage ||
      isPasswordResetPage ||
      pathname === '/about' // Добавьте остальные нужные маршруты
    );
  };

    
  const hideFooter = () => 
    ['/signup', '/signin', '/forgottenpassword', '/resetpassword', '/payment', '/404', '/505']
      .some(route => pathname.startsWith(route)) || pathname.startsWith('/password-reset/');
        // Обработчик скролла
  
  // скрыт на указанных страницах
  if (hideFooter()) {
    return null;
  }
  
  return (
    <footer className='footer'>
    <div className={showFooterTotalBlack() ? 'footer__black' : 'footer__radius'}>
      {screenSize >1279 && (
        <div className='footer__container-desk'>
          <div className='footer__links'>
            <Link className='footer__form button' to='https://forms.yandex.ru/u/667c23cad0468813cafe1832/' target='_blank' >
              <img src={message} alt='связаться' className='footer__form-icon'></img>
              <p className='footer__form-text'>Хочу оставить интервью</p>
            </Link>
            <div className='footer__contacts'>
              <p className='footer__contacts-text'>Контакты для связи: 
                <a href="mailto:support@ceostory.ru" className='footer__contacts-support button'> support@ceostory.ru</a>
              </p>
              <p className='footer__contacts-text'>Отвечаем по будням с 10:00 до 19:00</p>
            </div>
            <div className='footer__documents'>
              <Link to='/documents/privacy-policy' target='_blank' className='footer__documents-link button'>Политика конфиденциальности</Link>
              <Link to='/documents/terms-of-use' target='_blank' className='footer__documents-link button'>Условия оказания информационных услуг</Link>
            </div>
            <div className='footer__about'>
              <p className='footer__about-text'>ип шайхуллин айвар илгамович</p>
              <p className='footer__about-text'>ИНН 860232368228 </p>
              <p className='footer__about-text'>ОГРНИП 323861700043636</p>
            </div>
          </div>
          <div className='footer__copyrigts'>
            <img  className='footer__copyrigts-logo' src={logoFooter} alt='CEOstory'/>
            <p className='footer__copyrigts-text'>&copy; Все права защищены</p>
          </div>
          <div className='footer__social-media'>
          <Link target='_blank' className='footer__social-media-link button'>
            <img src={YouTube} className='footer__social-media-icon' alt='YouTube'/>
          </Link>
          <Link target='_blank' to='https://t.me/ceostory_ru' className='footer__social-media-link button'>
            <img src={Telegram} className='footer__social-media-icon' alt='Telegram'/>
          </Link>
          <Link target='_blank' className='footer__social-media-link button'>
            <img src={LinkedIn} className='footer__social-media-icon' alt='LinkedIn'/>
          </Link>
          </div>
        </div>
      )}

      {screenSize < 1279 &&  screenSize > 767 && (
        <div className='footer__container-tablet'>
          <div className='footer__wrapper'>
          <div className='footer__links-tablet'>
            <Link className='footer__form button' to='https://forms.yandex.ru/u/667c23cad0468813cafe1832/' target='_blank' >
              <img src={message} alt='связаться' className='footer__form-icon'></img>
              <p className='footer__form-text'>Хочу оставить интервью</p>
            </Link>
            <div className='footer__contacts'>
              <p className='footer__contacts-text'>Контакты для связи: 
                <a href="mailto:support@ceostory.ru" className='footer__contacts-support button'> support@ceostory.ru</a>
              </p>
              <p className='footer__contacts-text'>Отвечаем по будням с 10:00 до 19:00</p>
            </div>
            <div className='footer__documents'>
              <Link to='/documents/privacy-policy' target='_blank' className='footer__documents-link button'>Политика конфиденциальности</Link>
              <Link to='/documents/terms-of-use' target='_blank' className='footer__documents-link button'>Условия оказания информационных услуг</Link>
            </div>
            <div className='footer__about'>
              <p className='footer__about-text'>ип шайхуллин айвар илгамович</p>
              <p className='footer__about-text'>ИНН 860232368228 </p>
              <p className='footer__about-text'>ОГРНИП 323861700043636</p>
            </div>
          </div>
          <div className='footer__copyrigts'>
            <img  className='footer__copyrigts-logo' src={logoFooter} alt='CEOstory'/>
          <div className='footer__social-media'>
          <Link target='_blank' className='footer__social-media-link button'>
            <img src={YouTube} className='footer__social-media-icon' alt='YouTube'/>
          </Link>
          <Link target='_blank' to='https://t.me/ceostory_ru' className='footer__social-media-link button'>
            <img src={Telegram} className='footer__social-media-icon' alt='Telegram'/>
          </Link>
          <Link target='_blank' className='footer__social-media-link button'>
            <img src={LinkedIn} className='footer__social-media-icon' alt='LinkedIn'/>
          </Link>
          </div>
        </div>
        </div>
        <p className='footer__copyrigts-text'>&copy; Все права защищены</p>
        </div>
      )}
      {screenSize <767 && (
        <div className='footer__container-modile'>
          <div className='footer__wrapper'>
          <div className='footer__links-tablet'>
            <Link className='footer__form button' to='https://forms.yandex.ru/u/667c23cad0468813cafe1832/' target='_blank' >
              <img src={message} alt='связаться' className='footer__form-icon'></img>
              <p className='footer__form-text'>Хочу оставить интервью</p>
            </Link>
            <div className='footer__contacts'>
              <p className='footer__contacts-text'>Контакты для связи: 
                <a href="mailto:support@ceostory.ru" className='footer__contacts-support button'> support@ceostory.ru</a>
              </p>
              <p className='footer__contacts-text'>Отвечаем по будням с 10:00 до 19:00</p>
            </div>
            <div className='footer__documents'>
              <Link to='/documents/privacy-policy' target='_blank' className='footer__documents-link button'>Политика конфиденциальности</Link>
              <Link to='/documents/terms-of-use' target='_blank' className='footer__documents-link button'>Условия оказания информационных услуг</Link>
            </div>
            <div className='footer__about'>
              <p className='footer__about-text'>ип шайхуллин айвар илгамович</p>
              <p className='footer__about-text'>ИНН 860232368228 </p>
              <p className='footer__about-text'>ОГРНИП 323861700043636</p>
            </div>
          </div>
          <div className='footer__copyrigts'>
          <div className='footer__social-media'>
          <Link target='_blank' className='footer__social-media-link button'>
            <img src={YouTube} className='footer__social-media-icon' alt='YouTube'/>
          </Link>
          <Link target='_blank' to='https://t.me/ceostory_ru' className='footer__social-media-link button'>
            <img src={Telegram} className='footer__social-media-icon' alt='Telegram'/>
          </Link>
          <Link target='_blank' className='footer__social-media-link button'>
            <img src={LinkedIn} className='footer__social-media-icon' alt='LinkedIn'/>
          </Link>
          </div>
        </div>
        <img  className='footer__copyrigts-logo' src={logoFooter} alt='CEOstory'/>

        </div>
        <p className='footer__copyrigts-text'>&copy; Все права защищены</p>
        </div>
      )}

      </div>
    </footer>
  )
}
    
export default Footer;