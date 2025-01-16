import React, { useState } from 'react';
import './TariffsCard.css';

const TariffCard = ({ tariff, onSubmit }) => {

  // Функция для форматирования цены за месяц
  const formatPricePerMonth = (price, duration) => {
    return (price / duration).toFixed(0); // Форматируем без знаков после запятой
  };

  return (
    <div className={`tariffs__price-card ${tariff.popular ? 'popular' : ''}`}>
      {tariff.popular && <div className='tariffs__price-popular'>Популярно</div>}
      <div className='tariffs__price-duration'>
        <p className='tariffs__price-number'>{tariff.duration}</p>
      </div>
      <div className='tariffs__price-month'>
        {tariff.duration === 1 ? 'месяц' : 
        tariff.duration >= 2 && tariff.duration <= 4 ? 'месяца' : 
        'месяцев'}
      </div>

      <div className='tariffs__price-motivation'>
        {tariff.popular ? 'Научись навыкам, чтобы вырасти в карьере и бизнесе' : 'Получи вдохновение и найди свою идею на миллион'}
      </div>
      <div className='tariffs__price-block'>
        <p className='tariffs__price-cost'>{formatPricePerMonth(tariff.price, tariff.duration)} ₽</p>

        <p className='tariffs__price-cost-month'>/месяц</p>
      </div>
      <p className='tariffs__price-cost-duration'>Оплата за {tariff.duration} {tariff.duration === 1 ? 'месяц' : 'месяцев'}</p>
      <button className={`tariffs__price-button ${tariff.popular ? 'popular' : ''}`} type='button' onClick={onSubmit}>Получить доступ</button>
      
      {tariff.benefits && (
        <ul className='tariffs__price-list'>
          {tariff.benefits.map((benefit, index) => (
            <li key={index} className='tariffs__price-item'>
              <div className='tariffs__price-сontainer'>
                <div className='tariffs__price-benefit-img'></div>
                <p className='tariffs__price-name'>{benefit.name}</p>
              </div>
              <p className='tariffs__price-text'>{benefit.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default TariffCard;
