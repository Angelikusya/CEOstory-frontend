import './ServerError.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import catgif from '../../assets/gif-cat.mp4';

const ServerError = () => {
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

  const pathname = window.location.pathname; // Получаем текущий путь

  useEffect(() => {
      document.title = 'Ошибка 500';
  });

  return (
    <section className="not-found">
    {screenSize < 1279 && (
      <Link to='/' className='not-found__logo button'></Link>
    )}
    <div className='not-found__container'>
    {screenSize > 1279 && (
      <Link to='/' className='not-found__logo button'></Link>
    )}
    {screenSize < 1279 && (
      <div className='server-error__gif'>
        <video 
          className="giphy-iframe" 
          src={catgif} 
          autoPlay 
          loop 
          muted
          playsInline
          style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
        >
        </video>
      </div>
    )}
      <p className="not-found__error">500. Сервер  
      <br />не отвечает</p>
      <p className='not-found__text'>Похоже у нас возникли временные трудности с&nbsp;сервером, но мы уже активно пытаемся это исправить.</p>
      <p className='not-found__text'>Попробуй зайти на CEOstory чуть позже.</p>

      <p className='not-found__text'>
        Если сервер упал во время оплаты &mdash; свяжись с нами по почте: 
        <a href="mailto:support@ceostory.ru" className='not-found__text-support button'> support@ceostory.ru</a>
      </p>
      <p className='not-found__text'> Мы решим твой вопрос в рабочее время.
      </p>
      <p className='not-found__text'>Искренне твой, 
        <br/>
        <span className='not-found__text-span'>Айвар</span>, сооснователь CEOstory
      </p>
      <Link to='/' className='link link__not-found' onClick={() => { window.scrollTo({ top: 0 }) }}>
        <span>Читать истории</span>
      </Link>
    </div>
    {screenSize > 1279 && (
      <div className='server-error__gif'>
        <video 
          className="giphy-iframe" 
          src={catgif} 
          autoPlay 
          loop 
          muted
          playsInline
        >
        </video>
      </div>
    )}    
    </section>
    )
  }
  
  export default ServerError;