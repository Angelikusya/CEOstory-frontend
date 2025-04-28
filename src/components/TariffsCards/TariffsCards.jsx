import './TariffsCards.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BatashovR from '../../assets/speaker-photoes/batashov-tiny.webp';


const TariffsCards = ({totalStories, getHistoryWord3}) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const isDisabled = true;

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
        <Link to='/batashovr-story' className='tariffs__cards-card'>
          <img className='tariffs__cards-photo cards-photo-grey' src={BatashovR} alr='Роман Баташов'/>
          <div className='tariffs__filter-tariffs'>
            <p className='tariffs__filter-info-tariffs'>от 30 млн&nbsp;руб.</p>
          </div>
          <div className='tariffs__card-wrapper'>          
              <h4 className='tariffs__card-title'>Как построить бизнес с выручкой 30 млн руб.в&nbsp; год на <span className='main__card-title-red'>"Умных домах"</span></h4>
              <div className='tariffs__card-features'>
                <div className='tariffs__card-feature'>
                  <div className='main__card-arrow margin'></div>
                  <p className='tariffs__card-text'>Описание основных бизнес-процессов и нюансов</p>
                </div>
                <div className='tariffs__card-feature'>
                  <div className='main__card-arrow margin'></div>
                  <p className='tariffs__card-text'>Советы по поиску клиентов</p>
                </div>
              </div>
          </div>
        </Link>
        ) : null}
        
        <Link
          to={isDisabled ? '#' : '/'}
          className={`tariffs__cards-card ${isDisabled ? 'disabled' : ''}`}
          onClick={(e) => {
            if (isDisabled) {
              e.preventDefault(); // блокируем переход
            } else {
              window.scrollTo({ top: 0 });
            }
          }}
          >
            {/* <img className='tariffs__cards-photo cards-photo-white ' src={BatashovR} alr='Фотография спикера'/> */}
            <div className='tariffs__cards-photo'>
              <p className='tariffs__cards-photo-text'>Скоро</p>
            </div>
                {/* <div className='tariffs__filter-tariffs'>
                  <p className='tariffs__filter-info-tariffs'>от 100 тыс.&nbsp;руб.</p>
                </div> */}
            <div className='tariffs__card-wrapper'>
              <h4 className='tariffs__card-title'>Как открыть магазин орехов <br/>с&nbsp;выручкой более 7 млн в год</h4>
              <div className='tariffs__card-features'>
                <div className='tariffs__card-feature'>
                  <div className='main__card-arrow margin'></div>
                  <p className='tariffs__card-text'>Как найти место для магазина</p>
                </div>
                <div className='tariffs__card-feature'>
                  <div className='main__card-arrow margin'></div>
                  <p className='tariffs__card-text'>Где закупать товар и как организовать процесс</p>
                </div>
              </div>
            </div>
          </Link>
          <Link
          to={isDisabled ? '#' : '/'}
          className={`tariffs__cards-card ${isDisabled ? 'disabled' : ''}`}
          onClick={(e) => {
            if (isDisabled) {
              e.preventDefault(); // блокируем переход
            } else {
              window.scrollTo({ top: 0 });
            }
          }}
          >
            {/* <img className='tariffs__cards-photo cards-photo-white ' src={BatashovR} alr='Фотография спикера'/> */}
            <div className='tariffs__cards-photo'>
              <p className='tariffs__cards-photo-text'>Скоро</p>
            </div>
                {/* <div className='tariffs__filter-tariffs'>
                  <p className='tariffs__filter-info-tariffs'>от 100 тыс.&nbsp;руб.</p>
                </div> */}
            <div className='tariffs__card-wrapper'>
              <h4 className='tariffs__card-title'>Как сделать бизнес на&nbsp;<span className='main__card-title-purple'>WB</span> с&nbsp;выручкой более 900&nbsp;млн&nbsp;руб. 
              в год</h4>
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
        <span className='tariffs__card-more-text span'>{totalStories} {getHistoryWord3(totalStories)}</span> подобных этим
        </p>
      </div>
    </section>
  );
};

export default TariffsCards;
