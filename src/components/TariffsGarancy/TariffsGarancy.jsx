import './TariffsGarancy.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TariffsGarancy = () => {

  return (
    <section className='tariffs__garancy'>
      <h2 className='tariffs__subtitle'>
        Гарантируем, что ты останешься доволен или мы вернем деньги
      </h2>
      <div className='tariffs__text-container'>
        <p className='tariffs__text'>
          Мы хотим, чтобы инвестиция в “CEOstory” не представляла для тебя никакой сложности.
        </p>
        <p className='tariffs__text'>
          У нас предусмотрена 14-дневная гарантия возврата денег. Если ты пользовался платформой 
          и по какой-то причине остался недоволен, то ты можешь получить 100% возврат средств.         
        </p>
        <p className='tariffs__text'>
          Меньше 1% людей когда-либо пользовались нашей гарантией. Для сравнения &mdash; на других онлайн-курсах и площадках возврат около 5%.        
        </p>
        <p className='tariffs__text'>
          Ну и традиционный совет в мире маркетинга &mdash; если ваш процент возврата составляет менее 10%, вам следует повысить цены, так как они слишком низкие!
          <br />У нас &mdash; менее 1%. Просто намекаю 😉        
        </p>
        </div>
    </section>
  );
};

export default TariffsGarancy;
