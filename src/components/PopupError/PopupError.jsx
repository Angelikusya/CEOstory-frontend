import './PopupError.css';
import React, { useEffect, useRef } from 'react';

const PopupError = ({ isVisible, onClose, errorMessage }) => {
  const popupRef = useRef(null); // Ссылка на контейнер popup

  useEffect(() => {
    if (isVisible) {
      // Таймер автоматического закрытия
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // 5 секунд

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
      className={`popup-error ${
        isVisible ? 'show' : ''
      }`}
    >
      <div className="popup-error__container" ref={popupRef}>
        <div className="popup-error__image"></div>
        <p className="popup-error__text">{errorMessage}</p>
        <button
          className="popup-error__close button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default PopupError;