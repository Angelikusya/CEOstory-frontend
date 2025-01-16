import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavDocuments.css';

const NavDocuments = ({ onCloseNavDocuments }) => {
  const location = useLocation(); // Получаем объект location
  const [isVisible, setIsVisible] = useState(true); // Состояние для управления видимостью

  // Определяем текущий путь для добавления класса active
  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleCloseNavDocuments = () => {
    onCloseNavDocuments(); // Вызываем функцию закрытия
  };

  // Эффект для отслеживания ширины экрана
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 1280); // Устанавливаем видимость в зависимости от ширины окна
    };

    // Устанавливаем начальное значение
    handleResize();

    // Добавляем обработчик события resize
    window.addEventListener('resize', handleResize);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Если компонент не видим, ничего не рендерим
  if (!isVisible) {
    return null;
  }

  return (
    <nav className='documents-nav'>
      <button className='documents-nav__close' onClick={handleCloseNavDocuments}></button>
      <ul className='documents-nav__list'>
        <li className='documents-nav__item'>
          <Link to="/documents/privacy-policy" className={`documents-nav__link ${getActiveClass("/documents/privacy-policy")}`}>
            <p className='documents-nav__text'>Политика конфиденциальности</p>
          </Link>
        </li>
        <li className='documents-nav__item'>
          <Link to="/documents/personal-data" className={`documents-nav__link ${getActiveClass("/documents/personal-data")}`}>
            <p className='documents-nav__text'>Согласие на обработку персональных данных при регистрации</p>
          </Link>
        </li>
        <li className='documents-nav__item'>
          <Link to="/documents/personal-data-form" className={`documents-nav__link ${getActiveClass("/documents/personal-data-form")}`}>
            <p className='documents-nav__text'>Согласие на обработку персональных данных для получения обратной связи по заявке</p>
          </Link>
        </li>
        <li className='documents-nav__item'>
          <Link to="/documents/terms-of-use" className={`documents-nav__link ${getActiveClass("/documents/terms-of-use")}`}>
            <p className='documents-nav__text'>Условия оказания информационных услуг</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavDocuments;
