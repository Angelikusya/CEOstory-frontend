import './PopupSuccess.css';
import React, { useEffect, useState, useRef } from 'react';

const PopupSuccess = ({ isVisible, onClose, successMessage }) => {
  const popupRef = useRef(null); // Ссылка на контейнер popup

  useEffect(() => {
    if (isVisible) {
      // Таймер автоматического закрытия
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // 4 секунды

      // Обработчик кликов вне popup
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          onClose();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      // Очистка таймера и события при размонтировании
      return () => {
        clearTimeout(timer);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isVisible, onClose]);
  return (
    <div
      className={`popup-success ${
        isVisible ? 'show' : ''
      }`}
    >
      <div className="popup-success__container" ref={popupRef}>
        <div className="popup-success__image"></div>
        <p className="popup-success__text">{successMessage}</p>
        <button
          className="popup-success__close button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default PopupSuccess;