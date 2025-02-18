import '../TariffsSmall/TariffsSmall.css';
import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo-notloggedin-desk.svg';


const TariffsSmall = ({onPaymentSubmit, totalStories, getHistoryWord1 }) => {

    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [paymentData, setPaymentData] = useState({
        amount: 499,
        currency: 'RUB',
        description: 'Доступ к тарифу',
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSubmitPayment = (event) => {
        event.preventDefault(); // предотвращаем переход по ссылке
        // Вызываем функцию из родительского компонента
        onPaymentSubmit(paymentData);
    };

    return (
        <div className='tariffs-small'>
            <div className='tariffs-small__container'>
                <div className='tariffs-small__left-block'>
                    <p className='tariffs-small__skills'>Научись навыкам, чтобы вырасти в карьере и бизнесе</p>
                    <div className='tariffs-small__tariffs'>
                        <div className='tariffs-small__tariff-line'>
                        <div className='tariffs-small__line'></div>
                        <p className='tariffs-small__first'>1699</p>
                        </div>
                        
                        <p className='tariffs-small__price'>{paymentData.amount} ₽</p>
                        <p className='tariffs-small__period'>/год</p>
                    </div>
                    <p className='tariffs-small__discount'>скидка 58% до 31.03.2025</p>
                    <button onClick={handleSubmitPayment} className='link link__tariffs-small'>
                        <span>Получить доступ</span>
                    </button>
                    <div className='tariffs-small__benefits'>
                        <ul className='tariffs-small__price-list'>
                            <li className='tariffs-small__price-item'>
                                <div className='tariffs-small__price-benefit-img'></div>
                                    <div className='tariffs-small__price-сontainer'>
                                        <p className='tariffs-small__price-name'>{totalStories} {getHistoryWord1(totalStories)} про карьеру и бизнес</p>
                                        <p className='tariffs-small__price-text'>Полный доступ ко всем историям успеха, чтобы ты мог их повторить</p>
                                </div>
                            </li>
                            <li className='tariffs-small__price-item'>
                                <div className='tariffs-small__price-benefit-img'></div>
                                    <div className='tariffs-small__price-сontainer'>
                                        <p className='tariffs-small__price-name'>Материалы от спикеров</p>
                                        <p className='tariffs-small__price-text'>Полный доступ к файлам от спикеров для развития в карьере или бизнесе</p>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className='tariffs-small__right-block'>
                    <Link to='/' className='tariffs-small__logo button'>
                        <img src={logo} className='tariffs-small__logo-img__logo-img' alt='CEOstory'/>
                    </Link>
                    <p className='tariffs-small__right-block-header'>Раскрой секреты успеха  
                    {screenSize >767 && (
                        <span className='tariffs-small__right-block-span'><br/>бизнесменов и&nbsp;топ-менеджеров</span>
                    )}
                    {screenSize < 767 && (
                        <span className='tariffs-small__right-block-span'><br/>бизнесменов <br/>и&nbsp;топ-менеджеров</span>
                    )}
                    </p>
                    <p className='tariffs-small__right-block-text'>С СEOstory ты узнаешь какой путь надо пройти, чтобы сделать успешную карьеру или бизнес. </p>
                    <p className='tariffs-small__right-block-more'>Погрузись в {totalStories} {getHistoryWord1(totalStories)} с советами, как с нуля добиться того же самого. </p>
                    <div className='tariffs-small__right-block-image'></div>
                </div>
            </div>
      </div>
    )
  }
  
  export default TariffsSmall;