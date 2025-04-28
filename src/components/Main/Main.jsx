import './Main.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RunningLine from '../RunningLine/RunningLine';
import BatashovR from '../../assets/speaker-photoes/batashov-tiny.webp';
import { Helmet } from 'react-helmet-async';

const Main = ({totalStories, getHistoryWord1, getHistoryWord3 }) => {

const [screenSize, setScreenSize] = useState(window.innerWidth);
const pathname = window.location.pathname; // Получаем текущий путь
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
    <section className='main'>

      <Helmet>
        <title>CEOstory — проверенные инструкции для открытия бизнеса</title>
        <meta 
            name="description" 
            content="CEOstory предлагает проверенные инструкции для открытия бизнеса" 
        />
        <meta 
            name="keywords" 
            content="какой бизнес открыть, как открыть свой бизнес, бизнес как открыть, открытие бизнеса, как открыть бизнес с нуля, инструкции для предпринимателей, 
      истории успеха, CEO, стартап, бизнесмены России, запуск стартапа, обучение бизнесу, советы предпринимателям, 
      идеи для бизнеса, наставничество, менторство, бизнес-путь, идеи для старта, какой открыть бизнес, бизнес идеи 2025, бизнес-идеи 2025" 
        />
        <link rel="canonical" href="https://ceostory.ru/" />
      </Helmet>

    {screenSize >767 && (
      <RunningLine/>
    )}
      <div className='main__wrapper'>
        <div alt='CEOstory' className='main__logo'/>
         {/* для десктопной версии */}
        <h1 className='main__title'><span className='main__title-span'>Открой бизнес<br/></span>по&nbsp;проверенным инструкциям
        </h1>

        {screenSize > 767 &&(
        <p className='main__subtitle'>Прочитай&nbsp;{totalStories} {getHistoryWord1(totalStories)}, <span className='main__subtitle-span'>как с&nbsp;нуля  открыть бизнес</span>
        </p>
        )}
        {screenSize <= 767 && (
        <p className='main__subtitle'>Прочитай&nbsp;{totalStories} {getHistoryWord1(totalStories)}, <span className='main__subtitle-span'><br/>как с&nbsp;нуля  открыть бизнес</span>
        </p>
        )}
        <div className='main__line'></div>
        <Link to='/business-stories' className='link link__main'  onClick={() => { window.scrollTo({ top: 0 }) }}>          
          <span>Читать инструкции</span></Link>
      </div>
      <div className='main__stories'>
        <h3 className='main__about'>Изучи проверенные инструкции по открытию <span className='main__about-span'>бизнеса</span></h3>

        <div className='main__cards'>

        <Link to='/stories/batashov' className='main__card' onClick={() => { window.scrollTo({ top: 0 }) }}>
            <img className='main__card-photo green' src={BatashovR} alt='Роман Баташов'/>
            {screenSize <1279 && (
                <div className='main__filter'>
                  <p className='main__filter-info'>от 3 млн&nbsp;руб.</p>
                </div>
              )}
            <div className='main__card-wrapper'>
              <h4 className='main__card-title'>Как построить бизнес с&nbsp;оборотом более 30&nbsp;млн&nbsp;руб.
              в год на <span className='main__card-title-red'>”умных домах”</span></h4>
              <div className='main__card-features'>
                <div className='main__card-feature'>
                  <div className='main__card-arrow'></div>
                  <p className='main__card-text'>Описание основных бизнес-процессов и&nbsp;нюансов</p>
                </div>
                <div className='main__card-feature'>
                  <div className='main__card-arrow'></div>
                  <p className='main__card-text'>Советы по поиску клиентов</p>
                </div>
              </div>
              {screenSize >1279 && (
              <div className='main__filters'>
                <div className='main__filter'>
                  <p className='main__filter-title'>Выручка</p>
                  <p className='main__filter-info'>от 3&nbsp;млн&nbsp;руб.</p>
                </div>
                <div className='main__filter'>
                  <p className='main__filter-title'>Сфера</p>
                  <p className='main__filter-info'>Строительство</p>
                </div>
                <div className='main__filter'>
                  <p className='main__filter-title'>Вложения</p>
                  <p className='main__filter-info'>0 руб.</p>
                </div>
              </div>
              )}
            </div>
          </Link>

          {/* <Link to='/' className='main__card' onClick={() => { window.scrollTo({ top: 0 }) }}> */}
          <Link
            to={isDisabled ? '#' : '/'}
            className={`main__card ${isDisabled ? 'disabled' : ''}`}
            onClick={(e) => {
              if (isDisabled) {
                e.preventDefault(); // блокируем переход
              } else {
                window.scrollTo({ top: 0 });
              }
            }}
          >
            {/* <img className='main__card-photo purple' src={VafeevT} alt='Фотография спикера'/> */}
            <div className='main__card-photo grey'>
              <div className='main__card-photo-soon'>Скоро</div>
            </div>
            {/* {screenSize <1279 && (
                <div className='main__filter'>
                  <p className='main__filter-info'>от 100 млн руб.</p>
                </div>
            )} */}
            <div className='main__card-wrapper'>
              <h4 className='main__card-title'>сделать бизнес на&nbsp;<span className='main__card-title-purple'>
                WB</span> с&nbsp;выручкой более 900&nbsp;млн&nbsp;руб. в год
              </h4>
              <div className='main__card-features'>
                <div className='main__card-feature'>
                  <div className='main__card-arrow'></div>
                  <p className='main__card-text'>Советы для строительства товарного бизнеса</p>
                </div>
                <div className='main__card-feature'>
                  <div className='main__card-arrow'></div>
                  <p className='main__card-text'>Описание всех процессов и&nbsp;нюансов бизнеса</p>
                </div>
              </div>
              {screenSize >1279 && (
              <div className='main__filters'>
                <div className='main__filter'>
                  <p className='main__filter-title'>Выручка в год</p>
                  <p className='main__filter-info'>от 900 млн&nbsp;руб.</p>
                </div>
                <div className='main__filter'>
                  <p className='main__filter-title'>Сфера</p>
                  <p className='main__filter-info'>Маркетплейсы</p>
                </div>
                <div className='main__filter'>
                  <p className='main__filter-title'>Вложения</p>
                  <p className='main__filter-info'>2 млн&nbsp;руб.</p>
                </div>
              </div>
              )}
            </div>
          </Link>

          {/* <Link to='/' className='main__card' onClick={() => { window.scrollTo({ top: 0 }) }}> */}

          <Link
            to={isDisabled ? '#' : '/'}
            className={`main__card ${isDisabled ? 'disabled' : ''}`}
            onClick={(e) => {
              if (isDisabled) {
                e.preventDefault(); // блокируем переход
              } else {
                window.scrollTo({ top: 0 });
              }
            }}
          >
            {/* <img className='main__card-photo purple' src={VafeevT} alt='Фотография спикера'/> */}
            <div className='main__card-photo grey'>
              <div className='main__card-photo-soon'>Скоро</div>
            </div>
            {/* {screenSize <1279 && (
                <div className='main__filter'>
                  <p className='main__filter-info'>от 100 млн руб.</p>
                </div>
            )} */}
            <div className='main__card-wrapper'>
              <h4 className='main__card-title'>Как открыть &nbsp;<span className='main__card-title-brown'>
              магазин орехов</span> с&nbsp;выручкой более 7&nbsp;млн в&nbsp;год
              </h4>
              <div className='main__card-features'>
                <div className='main__card-feature'>
                  <div className='main__card-arrow'></div>
                  <p className='main__card-text'>Как найти место для магазина</p>
                </div>
                <div className='main__card-feature'>
                  <div className='main__card-arrow'></div>
                  <p className='main__card-text'>Где закупать товар и как организовать процессы</p>
                </div>
              </div>
              {screenSize >1279 && (
              <div className='main__filters'>
                <div className='main__filter'>
                  <p className='main__filter-title'>Выручка в год</p>
                  <p className='main__filter-info'>от 5 млн&nbsp;руб.</p>
                </div>
                <div className='main__filter'>
                  <p className='main__filter-title'>Сфера</p>
                  <p className='main__filter-info'>Ритейл</p>
                </div>
                <div className='main__filter'>
                  <p className='main__filter-title'>Вложения</p>
                  <p className='main__filter-info'>100 тыс.&nbsp;руб.</p>
                </div>
              </div>
              )}
            </div>
          </Link>

        {screenSize >750 && (
          // <Link to='/' className='main__card' onClick={() => { window.scrollTo({ top: 0 }) }}>

          <Link
          to={isDisabled ? '#' : '/'}
          className={`main__card ${isDisabled ? 'disabled' : ''}`}
          onClick={(e) => {
            if (isDisabled) {
              e.preventDefault(); // блокируем переход
            } else {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          {/* <img className='main__card-photo purple' src={VafeevT} alt='Фотография спикера'/> */}
          <div className='main__card-photo grey'>
            <div className='main__card-photo-soon'>Скоро</div>
          </div>
          {/* {screenSize <1279 && (
              <div className='main__filter'>
                <p className='main__filter-info'>от 100 млн руб.</p>
              </div>
          )} */}
          <div className='main__card-wrapper'>
            <h4 className='main__card-title'>
              Как открыть <span className='main__card-title-sand'>юридическую компанию </span>с&nbsp;выручкой более 3&nbsp;млн&nbsp;руб.
            </h4>
            <div className='main__card-features'>
              <div className='main__card-feature'>
                <div className='main__card-arrow'></div>
                <p className='main__card-text'>Какие услуги продавать</p>
              </div>
              <div className='main__card-feature'>
                <div className='main__card-arrow'></div>
                <p className='main__card-text'>Описание всех процессов и&nbsp;нюансов бизнеса</p>
              </div>
            </div>
            {screenSize >1279 && (
            <div className='main__filters'>
              <div className='main__filter'>
                <p className='main__filter-title'>Выручка в год</p>
                <p className='main__filter-info'>от 3 млн&nbsp;руб.</p>
              </div>
              <div className='main__filter'>
                <p className='main__filter-title'>Сфера</p>
                <p className='main__filter-info'>Услуги</p>
              </div>
              <div className='main__filter'>
                <p className='main__filter-title'>Вложения</p>
                <p className='main__filter-info'>0&nbsp;руб.</p>
              </div>
            </div>
            )}
          </div>
        </Link>
        )}
        </div>
        <div className='main__numbers'>
              <div className='main__numbers-arrow'></div>
              <p className='main__numbers-text'><span className='main__numbers-text-span'>{totalStories} {getHistoryWord3(totalStories)}</span> подобных этим</p>
          </div>
        <Link to='/business-stories' className='link link__main-bottom' onClick={() => { window.scrollTo({ top: 0 }) }}> 
          <span>Читать инструкции</span>
        </Link>
        
      
      </div>

    </section>
  )
}

export default Main;