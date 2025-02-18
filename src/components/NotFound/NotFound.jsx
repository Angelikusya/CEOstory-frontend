import './NotFound.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import mangif from '../../assets/gif-notfound.mp4';
import DATACareer from '../Data/DataCareer';
import DATABusiness from '../Data/DataBusiness';

const NotFound = ({totalStories, getHistoryWord1}) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    document.title = 'Ошибка 404';
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return (
    <section className="not-found">
      {screenSize < 1279 && (
        <Link to="/" className="not-found__logo button"></Link>
      )}
      <div className="not-found__container">
        {screenSize > 1279 && (
          <Link to="/" className="not-found__logo button"></Link>
        )}
        {screenSize < 1279 && (
          <div className="not-found__gif">
            <video
              className="giphy-embed"
              src={mangif}
              autoPlay
              loop
              muted
              playsInline
              style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
            ></video>
          </div>
        )}
        <p className="not-found__error">404. Страница <br />не найдена</p>
        <p className="not-found__text">
          Похоже, она была удалена или ее никогда не&nbsp;существовало.
        </p>
        <p className="not-found__text">
          В любом случае на твоем месте я бы погрузился в&nbsp;{totalStories} {getHistoryWord1(totalStories)} с
          &nbsp;советами, как открыть успешный бизнес или стать топ-менеджером.
        </p>
        <p className="not-found__text">
          Искренне твой, <br />
          <span className="not-found__text-span">Айвар</span>, сооснователь CEOstory
        </p>
        <Link
          to="/career-stories"
          className="link link__not-found"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <span>Читать истории</span>
        </Link> 
      </div>
      {screenSize > 1279 && (
        <div className="not-found__gif">
          <video
            className="giphy-embed"
            src={mangif}
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      )}
    </section>
  );
};

export default NotFound;