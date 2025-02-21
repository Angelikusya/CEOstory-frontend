import './Main.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RunningLine from '../RunningLine/RunningLine';
import BursalidiD from '../../assets/speaker-photoes/speaker-photo-main-2.webp';
import KorotkovaE from '../../assets/speaker-photoes/korotkova-tiny.webp';
import BatashovR from '../../assets/speaker-photoes/batashov-tiny.webp';
import VafeevT from '../../assets/speaker-photoes/speaker-photo-main-4.webp';

const Main = ({totalStories, getHistoryWord1, getHistoryWord3 }) => {

const [screenSize, setScreenSize] = useState(window.innerWidth);
const pathname = window.location.pathname; // Получаем текущий путь

useEffect(() => {
    document.title = 'CEOstory —  секреты успеха топ-менеджеров и бизнесменов';
});

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
    {screenSize >767 && (
      <RunningLine/>
    )}
      <div className='main__wrapper'>
        <div alt='CEOstory' className='main__logo'/>
         {/* для десктопной версии */}
        {/* {screenSize > 1279 && (
          <h1 className='main__title'><span className='main__title-span'>раскрой секреты успеха<br/></span>бизнесменов и топ-менеджеров
          </h1>
        )} */}
        {screenSize > 767 &&(
          <h1 className='main__title'><span className='main__title-span'>Раскрой секреты успеха<br/></span>бизнесменов и топ-менеджеров
          </h1>
        )}
        {screenSize <= 767 && (
          <h1 className='main__title'><span className='main__title-span'>Раскрой <br/>секреты успеха</span> бизнесменов и 
            <br/>топ-менеджеров
          </h1>
        )}
        <p className='main__subtitle'>Погрузись в&nbsp;{totalStories} {getHistoryWord1(totalStories)} с советами, <span className='main__subtitle-span'>как с&nbsp;нуля добиться того же самого.</span>
        </p>
        <div className='main__line'></div>
        <Link to='/career-stories' className='link link__main'  onClick={() => { window.scrollTo({ top: 0 }) }}>          
          <span>Читать истории</span></Link>
      </div>
      <div className='main__stories'>
        <h3 className='main__about'>Узнай, что нужно сделать <span className='main__about-span'>чтобы добиться успеха</span></h3>

        <div className='main__cards'>

          <Link to='/korotkovae-story' className='main__card' onClick={() => { window.scrollTo({ top: 0 }) }}>
            <img className='main__card-photo grey' src={BursalidiD} alt='Фотография спикера'/>
            {/* {screenSize <1279 && (
                <div className='main__filter'>
                  <p className='main__filter-info'>NDA</p>
                </div>
              )} */}
            <div className='main__card-wrapper'>
            {screenSize >1279 && (
              <h4 className='main__card-title'>Как стать директором по продукту в&nbsp;<span className='main__card-title-green'>СПЭЛ</span> в&nbsp;27&nbsp;лет</h4>
            )}           
            {screenSize < 1279 && (
                <h4 className='main__card-title'>Как стать директором по продукту в&nbsp;<span className='main__card-title-green'>СПЭЛ</span> <br/>в&nbsp;27&nbsp;лет</h4>
            )}
              <div className='main__card-features'>
                <div className='main__card-feature'>
                  <div className='main__card-arrow'></div>
                  <p className='main__card-text'>Советы для роста в&nbsp;карьере</p>
                </div>
                <div className='main__card-feature'>
                  <div className='main__card-arrow'></div>
                  <p className='main__card-text'>Примеры проектов для реализации в&nbsp;работе</p>
                </div>
              </div>
              {screenSize >1279 && (
              <div className='main__filters'>
                {/* <div className='main__filter'>
                  <p className='main__filter-title'>доход</p>
                  <p className='main__filter-info'>NDA</p>
                </div> */}
                <div className='main__filter'>
                  <p className='main__filter-title'>Опыт</p>
                  <p className='main__filter-info'>9 лет</p>
                </div>
                <div className='main__filter'>
                  <p className='main__filter-title'>Сфера</p>
                  <p className='main__filter-info'>IT</p>
                </div>
              </div>
              )}
            </div>
          </Link>
          <Link to='/korotkovae-story' className='main__card' onClick={() => { window.scrollTo({ top: 0 }) }}>
            <img className='main__card-photo purple' src={VafeevT} alt='Фотография спикера'/>
            {/* {screenSize <1279 && (
                <div className='main__filter'>
                  <p className='main__filter-info'>от 100 млн руб.</p>
                </div>
            )} */}
            <div className='main__card-wrapper'>
              <h4 className='main__card-title'>Как сделать бизнес на&nbsp;<span className='main__card-title-purple'>WB</span> с&nbsp;оборотом более 200&nbsp;млн&nbsp;руб. 
              в месяц менее чем за год</h4>
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
                  <p className='main__filter-title'>Доход</p>
                  <p className='main__filter-info'>от 1 млн&nbsp;руб.</p>
                </div>
                <div className='main__filter'>
                  <p className='main__filter-title'>Сфера</p>
                  <p className='main__filter-info'>Маркетплейсы</p>
                </div>
                <div className='main__filter'>
                  <p className='main__filter-title'>Вложения</p>
                  <p className='main__filter-info'>1 млн&nbsp;руб.</p>
                </div>
              </div>
              )}
            </div>
          </Link>
          <Link to='/korotkovae-story' className='main__card' onClick={() => { window.scrollTo({ top: 0 }) }}>
            <img className='main__card-photo pink' src={KorotkovaE} alt='Фотография спикера'/>
            {/* {screenSize <1279 && (
                <div className='main__filter'>
                  <p className='main__filter-info'>Очень много</p>
                </div>
              )} */}
            <div className='main__card-wrapper'>
            {screenSize >767 && (
              <h4 className='main__card-title'>Как стать операционным директором в&nbsp;28 лет</h4>
            )}
            {screenSize <768 && (
              <h4 className='main__card-title'>Как стать операционным директором в&nbsp;28 лет</h4>
            )}
              <div className='main__card-features'>
                <div className='main__card-feature'>
                  <div className='main__card-arrow'></div>
                  <p className='main__card-text'>Советы для роста в&nbsp;карьере</p>
                </div>
                <div className='main__card-feature'>
                  <div className='main__card-arrow'></div>
                  <p className='main__card-text'>Примеры проектов для реализации в&nbsp;работе</p>
                </div>
              </div>
              {screenSize >1279 && (
              <div className='main__filters'>
                {/* <div className='main__filter'>
                  <p className='main__filter-title'>доход</p>
                  <p className='main__filter-info'>Очень много</p>
                </div> */}
                <div className='main__filter'>
                  <p className='main__filter-title'>Опыт</p>
                  <p className='main__filter-info'>9 лет</p>
                </div>
                <div className='main__filter'>
                  <p className='main__filter-title'>Сфера</p>
                  <p className='main__filter-info'>Логистика</p>
                </div>
              </div>
              )}
            </div>
          </Link>
        {screenSize >750 && (
          <Link to='/batashovr-story' className='main__card' onClick={() => { window.scrollTo({ top: 0 }) }}>
            <img className='main__card-photo green' src={BatashovR} alt='Фотография спикера'/>
            {/* {screenSize <1279 && (
                <div className='main__filter'>
                  <p className='main__filter-info'>от 3 млн&nbsp;руб.</p>
                </div>
              )} */}
            <div className='main__card-wrapper'>
              <h4 className='main__card-title'>Как построить бизнес с&nbsp;оборотом более 90&nbsp;млн&nbsp;руб.
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
                  <p className='main__filter-title'>Доход</p>
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
        )}
        </div>
        <div className='main__numbers'>
              <div className='main__numbers-arrow'></div>
              <p className='main__numbers-text'><span className='main__numbers-text-span'>{totalStories} {getHistoryWord3(totalStories)}</span> подобных этим</p>
          </div>
        <Link to='/career-stories' className='link link__main-bottom' onClick={() => { window.scrollTo({ top: 0 }) }}> 
          <span>Читать истории</span>
        </Link>
        
      
      </div>

    </section>
  )
}

export default Main;