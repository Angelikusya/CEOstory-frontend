import './TariffsSuccess.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const TariffsSuccess = () => {

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
      <section className='tariffs__success'>
        <h2 className='tariffs__success-header'>
          {screenSize > 767 ? (
            <>
              Что, если ты четко увидишь, 
              <br /><span className='tariffs__underline'>как добились успеха другие люди?</span>
            </>
          ) : (
            <>
              Что, если ты четко увидишь, как добились <span className='tariffs__underline'>успеха</span> другие люди?
            </>
          )}
        </h2>

        <div className='tariffs__success-container'>
          <p className='tariffs__text'>
            Представь, что ты точно знаешь, что поможет тебе в росте карьеры или 
            в открытие успешного бизнеса.
          </p>
          <p className='tariffs__text'>
            Представь, что ты не тратишь годы впустую, делая что-то неправильно. 
            Ты уверен в каждом своем шаге.
          </p>
          <p className='tariffs__text list'>
            С “СEOstory” ты получишь доступ к опыту крутейших ребят в карьере и бизнесе. Это позволит тебе:
          </p>
          <ul className='tariffs__success-list'>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Узнать какой путь надо пройти, чтобы сделать успешную карьеру или бизнес.
              </p>
            </li>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Получить советы от успешных ребят в карьере и бизнесе.
              </p>
            </li>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Подчеркнуть идеи проектов в карьере или идеи для бизнеса.
              </p>
            </li>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Узнать детали и нюансы, без которых не получится добиться успеха.
              </p>
            </li>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Узнать финансовые показатели ребят в карьере и бизнесе.
              </p>
            </li>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Получить контакты спикера для предложений о сотрудничестве и партнерстве.
              </p>
            </li>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Получить полезный материал от спикеров.              
              </p>
            </li>
            {/* <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Получить доступ к видео-урокам для развития карьеры и бизнеса от “CEOstory”.               
                </p>
            </li> */}
          </ul>
          <p className='tariffs__text'>
            Если наши спикеры смогли добиться успеха, то сможешь и ты, ведь они такие 
            же простые ребята &mdash; тебе просто нужно повторить их опыт и сэкономить себе 
            кучу нервов и времени.
          </p>
        </div>
    </section>
  );
};

export default TariffsSuccess;
