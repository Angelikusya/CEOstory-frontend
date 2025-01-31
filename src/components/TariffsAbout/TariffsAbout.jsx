import './TariffsAbout.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const TariffsAbout = () => {
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
      <section className='tariffs__about'>
        {screenSize >= 768 ? (
          <h2 className='tariffs__advice'>
            Пара советов <span className='tariffs__underline'>изменят твою жизнь,</span> они изменили мою
          </h2>
        ) : (
          <h2 className='tariffs__advice'>
            Пара советов <span className='tariffs__underline'>изменят</span> твою <span className='tariffs__underline'>жизнь,</span> они изменили мою
          </h2>
        )}
        <div className='tariffs__text-container'>
          <p className='tariffs__text'>Если мы еще не знакомы &mdash; привет, меня зовут Айвар 👋 </p>
          <p className='tariffs__text'>
            В 2024 году мы с моей прекрасной женой Анжеликой основали  платформу “СEOstory”, 
            на которой публикуем истории и советы крутейших ребят в карьере и бизнесе. 
          </p>
          <div className='tariffs__photo-us'></div>
          <p className='tariffs__text'>
            Ты спросишь зачем нам это? Тут все просто &mdash; мы хотим помочь вырасти в карьере 
            или бизнесе как можно большему количеству людей.
          </p>
          <p className='tariffs__text span'>
            Дело в том, что я и сам столкнулся с проблемой, когда не получалось ни вырасти в зарплате, 
            ни запустить успешный бизнес. 
          </p>
          <p className='tariffs__text'>
            Я получал чуть больше ста тысяч рублей, когда мои друзья уже получали  от 300 тысяч в свои 25 лет. 
            В это же время у моего брата выстрелил бизнес на WB, и он стал делать по-настоящему хорошие деньги. 
            Выручка была больше 40 миллионов в месяц (сейчас, кстати, больше 100, а он всего на год старше меня!).
          </p>
          <p className='tariffs__text quotation'>
            Я каждый день задавал себе вопрос: “
            <span className='tariffs__text span'> как мне достичь такого же успеха?</span>
            ” Каждый день просыпался и засыпал с этим вопросом.          
          </p>
          <p className='tariffs__text'>
            И в конце концов я понял, что я хожу кругами и спрашивать надо не только у себя, но и у тех, кому 
            я завидовал и кем восхищался. 
            Собственно так я и поступил.          
          </p>
          <p className='tariffs__text quotation'>
            Для понимания &mdash; я из Сургута, переехал учиться в Москву в 17 лет, в Москве у меня не было ни родственников, ни связей. 
            Прожил в общаге 5 лет и все это время невероятно мечтал добиться хорошей жизни.
          </p>
          <p className='tariffs__text'>
            И это дало мега результат &mdash; в 2024 году я занял должность руководителя направления развития операций 
            в “Магните” и теперь руковожу 10+ людьми и зарабатываю около <span className='tariffs__text span'>400 тысяч рублей в месяц.</span>          
          </p>
          <p className='tariffs__text'>
            И именно для таких ребят, для ребят которые 
            <span className='tariffs__text span'>стремятся к высотам</span>,
             мы и создали эту платформу.          
          </p>
          <p className='tariffs__text'>
            Платформу, которая объединяет в себе советы и инструменты для развития карьеры и бизнеса.          
          </p>
          <div className='tariffs__text-flex'>
            <p className='tariffs__text quotation'>
              Платформу
            </p>
            <div className='tariffs__logo'></div>
          </div>
        </div>
    </section>
  );
};

export default TariffsAbout;
