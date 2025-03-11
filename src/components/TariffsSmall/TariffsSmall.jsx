import '../TariffsSmall/TariffsSmall.css';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-notloggedin-desk.svg';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const TariffsSmall = ({ totalStories, getHistoryWord1, tariffs, terminalKey }) => {
  const currentUser = useContext(CurrentUserContext);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);



  const initiatePayment = (index) => {
    const form = document.forms[`payform-tbank-${index}`];
    if (!form) return;

    if (!terminalKey) {
      alert("Ошибка: terminalKey не загружен.");
      return;
    }

    form.terminalkey.value = terminalKey;
    pay(form);
  };

  return (
    <div className='tariffs-small'>
        <div className='tariffs-small__container'>
        <div className='tariffs-small__left-block'>
            <p className='tariffs-small__skills'>
            Научись навыкам, чтобы вырасти в карьере и бизнесе
            </p>

            {tariffs.map((tariff, index) => (
            <div key={index} className='tariffs-small__tariff-block'>
                <div className='tariffs-small__tariffs'>
                <div className='tariffs-small__tariff-line'>
                    <div className='tariffs-small__line'></div>
                    <p className='tariffs-small__first'>{tariff.oldPrice} ₽</p>
                </div>
                <p className='tariffs-small__price'>{tariff.price * 100} ₽</p>
                <p className='tariffs-small__period'>/год</p>
                </div>
                <p className='tariffs-small__discount'>{tariff.discount}</p>

                <form 
                className="payform-tbank" 
                name={`payform-tbank-${index}`} 
                onSubmit={(e) => { e.preventDefault(); initiatePayment(index); }}
                >
                <input type="hidden" name="terminalkey" value={terminalKey} />
                <input type="hidden" name="frame" value="false" />
                <input type="hidden" name="language" value="ru" />
                <input type="hidden" name="amount" value={tariff.price * tariff.quantity * 100} required/>
                <input type="hidden" name="order" value={`ceostory_${new Date().getTime()}`} />
                <input type="hidden" name="description" value={tariff.description} />
                <input type="hidden" placeholder="ФИО плательщика" name="name" defaultValue={currentUser?.name || ''}  />
                <input type="hidden" placeholder="E-mail" name="email" defaultValue={currentUser?.email || ''} />
                <input type="hidden" name="phone" />
                <input type="submit" className="link link__tariffs-small" value="Получить доступ" />
                <input type="hidden" name="receipt" value="" />
                </form>
            </div>
            ))}

            <div className='tariffs-small__benefits'>
            <ul className='tariffs-small__price-list'>
                <li className='tariffs-small__price-item'>
                <div className='tariffs-small__price-benefit-img'></div>
                <div className='tariffs-small__price-сontainer'>
                    <p className='tariffs-small__price-name'>
                    {totalStories} {getHistoryWord1(totalStories)} про карьеру и бизнес
                    </p>
                    <p className='tariffs-small__price-text'>
                    Полный доступ ко всем историям успеха, чтобы ты мог их повторить
                    </p>
                </div>
                </li>
                <li className='tariffs-small__price-item'>
                <div className='tariffs-small__price-benefit-img'></div>
                <div className='tariffs-small__price-сontainer'>
                    <p className='tariffs-small__price-name'>Материалы от спикеров</p>
                    <p className='tariffs-small__price-text'>
                    Полный доступ к файлам от спикеров для развития в карьере или бизнесе
                    </p>
                </div>
                </li>
            </ul>
            </div>
        </div>

        <div className='tariffs-small__right-block'>
            <Link to='/' className='tariffs-small__logo button'>
            <img src={logo} className='tariffs-small__logo-img' alt='CEOstory' />
            </Link>
            <p className='tariffs-small__right-block-header'>
            Раскрой секреты успеха
            {screenSize > 767 ? (
                <span className='tariffs-small__right-block-span'>
                <br />бизнесменов и&nbsp;топ-менеджеров
                </span>
            ) : (
                <span className='tariffs-small__right-block-span'>
                <br />бизнесменов <br />и&nbsp;топ-менеджеров
                </span>
            )}
            </p>
            <p className='tariffs-small__right-block-text'>
            С СEOstory ты узнаешь, какой путь надо пройти, чтобы сделать успешную карьеру или бизнес.
            </p>
            <p className='tariffs-small__right-block-more'>
            Погрузись в {totalStories} {getHistoryWord1(totalStories)} с советами, как с нуля добиться того же самого.
            </p>
            <div className='tariffs-small__right-block-image'></div>
        </div>
        </div>
    </div>
    );
};

export default TariffsSmall;
