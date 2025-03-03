import './Tariffs.css';
import React, { useState, useEffect, useRef } from 'react';
import TariffsPeople from '../TariffsPeople/TariffsPeople';
import TariffsAbout from '../TariffsAbout/TariffsAbout';
import TariffsCards from '../TariffsCards/TariffsCards';
import TariffsSuccess from '../TariffsSuccess/TariffsSuccess';
import TariffsCost from '../TariffsCost/TariffsCost';
import TariffsFAQ from '../TariffsFAQ/TariffsFAQ';
import TariffsGarancy from '../TariffsGarancy/TariffsGarancy';
import TariffsSmall from '../TariffsSmall/TariffsSmall';
import Preloader from '../Preloader/Preloader';
import PopupError from '../PopupError/PopupError';
import PopupSuccess from '../PopupSuccess/PopupSuccess';

const Tariffs = ({ 
  totalStories, 
  getHistoryWord1, 
  getHistoryWord3, 
  tariffs,
  terminalKey
}) => {

  const [isLoading, setIsLoading] = useState(true);

  // Создаем реф для элемента с тарифами
  const tariffsPriceRef = useRef(null);

  const scrollToTariffsPrice = (event) => {
    event.preventDefault(); // предотвращаем переход по ссылке
    if (tariffsPriceRef.current) {
      tariffsPriceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pathname = window.location.pathname; // Получаем текущий путь

  useEffect(() => {
      document.title = 'Тарифы — CEOstory';
  });

  useEffect(() => {
    // Установка таймера для прелоадера
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Задержка на 1 секунду
    return () => clearTimeout(timer); // Очистка таймера при размонтировании
  
    }, []); //

  return (
    <section className=''>
          {isLoading ? (
      <Preloader />
    ) : (
      <div className='tariffs'>

      <PopupError />
      <PopupSuccess />
      <div className='tariffs__main'>
        <div className='tariffs__greeting'>
          <p className='tariffs__greeting-text'>Добро пожаловать в </p>
          <div className='tariffs__logo'></div>
        </div>
        <h2 className='tariffs__header'>Узнай что нужно сделать, <span className='tariffs__underline'> чтобы добиться успеха</span></h2>
        <p className='tariffs__more'>
          Погрузись в {totalStories} {getHistoryWord1(totalStories)} с советами, как открыть успешный бизнес или стать топ-менеджером
        </p>
        <a href="#" onClick={scrollToTariffsPrice} className='link link__tariffs'>
          <span>Смотреть тарифы</span>
        </a>
      </div>

      <TariffsPeople />
      <div className='tariffs__line'></div>
      <TariffsAbout />
      <TariffsCards 
        getHistoryWord3={getHistoryWord3}
        totalStories={totalStories}
      />
      <a href="#" onClick={scrollToTariffsPrice} className='link link__tariffs'>
          <span>Смотреть тарифы</span>
      </a>
      
      <div className='tariffs__line'></div>
      <TariffsSuccess />

      {/* Используем ref для прокрутки к этому элементу */}
      <div ref={tariffsPriceRef}>
        <TariffsCost />
        {/* <TariffsPrice /> */}
        <TariffsSmall 
          totalStories={totalStories}
          getHistoryWord1={getHistoryWord1}
          tariffs={tariffs}
          terminalKey={terminalKey}
        />
      </div>

      <TariffsFAQ />
      <TariffsGarancy />
      <div ref={tariffsPriceRef}>
        {/* <TariffsPrice /> */}
        <TariffsSmall 
          totalStories={totalStories}
          getHistoryWord1={getHistoryWord1}
          tariffs={tariffs}
          terminalKey={terminalKey}
        />
      </div>
      </div>
      )}
    </section>
  );
};

export default Tariffs;
