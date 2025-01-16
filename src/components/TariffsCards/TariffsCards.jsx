import './TariffsCards.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BursalidiD from '../../assets/speaker-photoes/speaker-photo-main-2.webp';
import KorotkovaE from '../../assets/speaker-photoes/korotkova-tiny.webp';
import BotashovR from '../../assets/speaker-photoes/speaker-photo-main-3.webp';
import VafeevT from '../../assets/speaker-photoes/speaker-photo-main-4.webp';


const TariffsCards = () => {
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

  return (
    <section className='tariffs__cards'>
      <div className='tariffs__cards-block'>
      {screenSize < 768 || screenSize >= 1280 ? (
        <Link to='/korotkovae-story' className='tariffs__cards-card'>
          <img className='tariffs__cards-photo cards-photo-grey' src={BursalidiD} alr='Фотография спикера'/>
          <div className='tariffs__filter-tariffs'>
            <p className='tariffs__filter-info-tariffs'>от 200 тыс.&nbsp;р.</p>
          </div>
          <div className='tariffs__card-wrapper'>          
              <h4 className='tariffs__card-title'>Как стать директором по продукту в&nbsp;<span className='main__card-title-green'>ПЭКС</span> <br/>в&nbsp;57&nbsp;лет</h4>
              <div className='tariffs__card-features'>
                <div className='tariffs__card-feature'>
                  <div className='main__card-arrow margin'></div>
                  <p className='tariffs__card-text'>Советы для роста в&nbsp;карьере</p>
                </div>
                <div className='tariffs__card-feature'>
                  <div className='main__card-arrow margin'></div>
                  <p className='tariffs__card-text'>Примеры проектов для реализации в&nbsp;работе</p>
                </div>
              </div>
          </div>
        </Link>
        ) : null}
        <Link to='/korotkovae-story' className='tariffs__cards-card'>
            <img className='tariffs__cards-photo cards-photo-white ' src={KorotkovaE} alr='Фотография спикера'/>
                <div className='tariffs__filter-tariffs'>
                  <p className='tariffs__filter-info-tariffs'>от 100 тыс.&nbsp;р.</p>
                </div>
            <div className='tariffs__card-wrapper'>
              <h4 className='tariffs__card-title'>Как стать операционным директором <br/>в&nbsp;<span className='main__card-title-darkgreen'>niks protic</span> <br/>в&nbsp;48 лет</h4>
              <div className='tariffs__card-features'>
                <div className='tariffs__card-feature'>
                  <div className='main__card-arrow margin'></div>
                  <p className='tariffs__card-text'>Советы для роста в&nbsp;карьере</p>
                </div>
                <div className='tariffs__card-feature'>
                  <div className='main__card-arrow margin'></div>
                  <p className='tariffs__card-text'>Примеры проектов для реализации в&nbsp;работе</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to='/korotkovae-story' className='tariffs__cards-card'>
            <img className='tariffs__cards-photo cards-photo-purple' src={VafeevT} alr='Фотография спикера'/>
              <div className='tariffs__filter-tariffs'>
                  <p className='tariffs__filter-info-tariffs'>от 900 млн р.</p>
              </div>
            <div className='tariffs__card-wrapper'>
              <h4 className='tariffs__card-title'>Как сделать бизнес на&nbsp;<span className='main__card-title-purple'>WB</span> с&nbsp;оборотом более 400&nbsp;млн.&nbsp;р. 
              в месяц менее чем за год</h4>
              <div className='tariffs__card-features'>
                <div className='tariffs__card-feature'>
                  <div className='main__card-arrow margin'></div>
                  <p className='tariffs__card-text'>Советы для строительства товарного бизнеса</p>
                </div>
                <div className='tariffs__card-feature'>
                  <div className='main__card-arrow margin'></div>
                  <p className='tariffs__card-text'>Описание всех процессов и&nbsp;нюансов бизнеса</p>
                </div>
              </div>
            </div>
          </Link>
      </div>
      <div className='tariffs__card-more'>
        <div className='tariffs__card-more-arrow'></div>
        <p className='tariffs__card-more-text'>
        <span className='tariffs__card-more-text span'>Более 10 историй </span>
          подобных этим
        </p>
      </div>
    </section>
  );
};

export default TariffsCards;
