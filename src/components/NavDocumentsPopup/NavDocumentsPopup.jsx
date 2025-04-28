import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavDocumentsPopup.css';

const NavDocumentsPopup = ({ onCloseNavDocuments }) => {
  const location = useLocation(); // Получаем объект location
  
  // Определяем текущий путь для добавления класса active
  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleCloseNavDocuments = () => {
    onCloseNavDocuments(); // Вызываем функцию закрытия
  };

  return (
    <nav className='documents-nav'>
      <button className='documents-nav__close' onClick={handleCloseNavDocuments}></button>
      <ul className='documents-nav__list'>
        <li className='documents-nav__item'>
          <Link 
            to="/documents/privacy-policy" 
            className={`documents-nav__link ${getActiveClass("/documents/privacy-policy")}`}
            onClick={handleCloseNavDocuments} // Закрываем попап при нажатии
          >
            <p className='documents-nav__text'>Политика конфиденциальности</p>
          </Link>
        </li>
        <li className='documents-nav__item'>
          <Link 
            to="/documents/personal-data" 
            className={`documents-nav__link ${getActiveClass("/documents/personal-data")}`}
            onClick={handleCloseNavDocuments} // Закрываем попап при нажатии
          >
            <p className='documents-nav__text'>Согласие на обработку персональных данных при регистрации</p>
          </Link>
        </li>
        <li className='documents-nav__item'>
          <Link 
            to="/documents/personal-data-form" 
            className={`documents-nav__link ${getActiveClass("/documents/personal-data-form")}`}
            onClick={handleCloseNavDocuments} // Закрываем попап при нажатии
          >
            <p className='documents-nav__text'>Согласие на обработку персональных данных для получения обратной связи по заявке</p>
          </Link>
        </li>
        <li className='documents-nav__item'>
          <Link 
            to="/documents/terms-of-use" 
            className={`documents-nav__link ${getActiveClass("/documents/terms-of-use")}`}
            onClick={handleCloseNavDocuments} // Закрываем попап при нажатии
          >
            <p className='documents-nav__text'>Условия оказания информационных услуг</p>
          </Link>
        </li>
      </ul>
      <Link 
        to='/business-stories' 
        className='link link__documents-nav'
        onClick={handleCloseNavDocuments}
        >
          <span>
            Перейти обратно к историям
          </span>
      </Link>
    </nav>
  );
};

export default NavDocumentsPopup;
