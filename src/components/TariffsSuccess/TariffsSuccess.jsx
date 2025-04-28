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
        <h2 className='tariffs__subtitle'>
          {screenSize > 767 ? (
            <>
              Что, если ты четко увидишь, 
              <br /><span className='tariffs__underline'>как открыли бизнес другие люди?</span>
            </>
          ) : (
            <>
              Что, если ты четко увидишь, как добились <span className='tariffs__underline'>успеха</span> другие люди?
            </>
          )}
        </h2>

        <div className='tariffs__text-container'>
          <p className='tariffs__text'>
            Представь, что ты точно знаешь, что поможет тебе в открытии своего бизнеса.
          </p>
          <p className='tariffs__text'>
            Представь, что ты не тратишь годы впустую, делая что-то неправильно. Ты уверен в каждом своем шаге.
          </p>
          <ul className='tariffs__success-list'>
            <p className='tariffs__text'>
              С “СEOstory” ты получишь доступ к опыту крутейших ребят в бизнесе. Это позволит тебе:
            </p>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Узнать какой путь надо пройти, чтобы сделать успешную карьеру или бизнес.
              </p>
            </li>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Найти идеи для бизнеса.
              </p>
            </li>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Узнать что нужно для открытия своего бизнеса.
              </p>
            </li>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Понять, где искать клиентов.
              </p>
            </li>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Выяснить, что такое юнит-экономика и зачем она нужна.
              </p>
            </li>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
                Узнать где и сколько можно заработать.
              </p>
            </li>
            <li className='tariffs__success-flex'>
              <div className='tariffs__success-arrow'></div>
              <p className='tariffs__text li'>
              Получить полезные материалы от предпринимателей.              
              </p>
            </li>
          </ul>
          <p className='tariffs__text'>
            Если наши предприниматели смогли добиться успеха, то сможешь и ты, ведь они такие же простые 
            ребята &mdash; тебе просто нужно повторить их опыт и сэкономить себе кучу нервов и времени.
          </p>
        </div>
    </section>
  );
};

export default TariffsSuccess;
