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
import { Helmet } from 'react-helmet-async';

const Tariffs = ({ 
  totalStories, 
  getHistoryWord1, 
  getHistoryWord3, 
  getHistoryWord2,
  getHistoryWord4,
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
        <Helmet>
            <title>Тарифы — CEOstory</title>
            <meta 
                name="description" 
                content="Как открыть и развить прибыльный бизнес в России. CEOstory — проверенные советы от тех, кто уже добился успеха." 
            />
            <meta 
                name="keywords" 
                content="истории успеха, инструкции по открытию бизнеса, бизнес-истории, открыть бизнес, кейсы предпринимателей, запуск стартапа, как стать бизнесменом, путь предпринимателя, бизнес в России, советы по бизнесу, обучение бизнесу, развитие компании, реальные примеры бизнеса" 
            />
            <link rel="canonical" href="https://ceostory.ru/tariffs" />
        </Helmet>
          {isLoading ? (
      <Preloader />
    ) : (
      <div className='tariffs'>

      <PopupError />
      <PopupSuccess />
      <div className='tariffs__main'>
        {/* <div className='tariffs__greeting'>
          <p className='tariffs__greeting-text'>Добро пожаловать в </p>
          <div className='tariffs__logo'></div>
        </div> */}
        <h2 className='tariffs__header'>Узнай что нужно сделать, чтобы <span className='tariffs__underline'>открыть свой бизнес</span></h2>
        <p className='tariffs__more'>
          Погрузись в {totalStories} {getHistoryWord2(totalStories)} {getHistoryWord1(totalStories)}, как с нуля открыть свой бизнес
        </p>
        <a href="#" onClick={scrollToTariffsPrice} className='link link__tariffs'>
          <span>Смотреть тарифы</span>
        </a>
      </div>

      {/* <TariffsPeople /> */}
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
      <div ref={tariffsPriceRef} className='tariffs__costs-wrapper'>
        <TariffsCost />
        {/* <TariffsPrice /> */}
        <TariffsSmall 
          totalStories={totalStories}
          getHistoryWord1={getHistoryWord1}
          getHistoryWord4={getHistoryWord4}
          getHistoryWord2={getHistoryWord2}
          getHistoryWord3={getHistoryWord3}
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
          getHistoryWord4={getHistoryWord4}
          getHistoryWord2={getHistoryWord2}
          getHistoryWord3={getHistoryWord3}
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
