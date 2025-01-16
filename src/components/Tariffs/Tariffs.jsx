import './Tariffs.css';
import { useRef } from 'react';
import TariffsPeople from '../TariffsPeople/TariffsPeople';
import TariffsAbout from '../TariffsAbout/TariffsAbout';
import TariffsCards from '../TariffsCards/TariffsCards';
import TariffsSuccess from '../TariffsSuccess/TariffsSuccess';
import TariffsCost from '../TariffsCost/TariffsCost';
import TariffsPrice from '../TariffsPrice/TariffsPrice';
import TariffsFAQ from '../TariffsFAQ/TariffsFAQ';
import TariffsGarancy from '../TariffsGarancy/TariffsGarancy';
import TariffsSmall from '../TariffsSmall/TariffsSmall';

const Tariffs = ({ onPaymentSubmit }) => {
  // Создаем реф для элемента с тарифами
  const tariffsPriceRef = useRef(null);

  const scrollToTariffsPrice = (event) => {
    event.preventDefault(); // предотвращаем переход по ссылке
    if (tariffsPriceRef.current) {
      tariffsPriceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='tariffs'>
      <div className='tariffs__main'>
        <div className='tariffs__greeting'>
          <p className='tariffs__greeting-text'>Добро пожаловать в </p>
          <div className='tariffs__logo'></div>
        </div>
        <h2 className='tariffs__header'>Узнай что нужно сделать, <span className='tariffs__underline'> чтобы добиться успеха</span></h2>
        <p className='tariffs__more'>
          Погрузись в 10 историй с советами, как открыть успешный бизнес или стать топ-менеджером
        </p>
        <a href="#" onClick={scrollToTariffsPrice} className='main__link tariffs__link'>Смотреть тарифы</a>
      </div>

      <TariffsPeople />
      <div className='tariffs__line'></div>
      <TariffsAbout />
      <TariffsCards />
      <a href="#" onClick={scrollToTariffsPrice} className='main__link tariffs__link'>Смотреть тарифы</a>
      
      <div className='tariffs__line'></div>
      <TariffsSuccess />

      {/* Используем ref для прокрутки к этому элементу */}
      <div ref={tariffsPriceRef}>
        <TariffsCost />
        {/* <TariffsPrice /> */}
        <TariffsSmall onPaymentSubmit={onPaymentSubmit} />
      </div>

      <TariffsFAQ />
      <TariffsGarancy />
      <div ref={tariffsPriceRef}>
        {/* <TariffsPrice /> */}
        <TariffsSmall onPaymentSubmit={onPaymentSubmit} />
      </div>
    </section>
  );
};

export default Tariffs;
