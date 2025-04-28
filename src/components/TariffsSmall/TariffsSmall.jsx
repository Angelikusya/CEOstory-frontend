import '../TariffsSmall/TariffsSmall.css';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-notloggedin-desk.svg';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useNavigate } from 'react-router-dom'; 
import PopupError from '../PopupError/PopupError';

const TariffsSmall = ({ 
  totalStories, 
  getHistoryWord1, 
  tariffs, 
  terminalKey, 
  getHistoryWord4,
  getHistoryWord2,
  getHistoryWord3
}) => {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isSubmitting, setIsSubmitting] = useState({});
  const [popupError, setPopupError] = useState({ visible: false, message: '' });

  const showError = (message) => {
    setPopupError({ visible: true, message });
  };
  
  const closePopupError = () => {
    setPopupError({ visible: false, message: '' });
  };

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
    if (!currentUser || !currentUser.name) {
      showError('Для оплаты необходимо авторизоваться');
      return;
    }


    const form = document.forms[`payform-tbank-${index}`];
    if (!form) return;

    if (!terminalKey) {
      alert("Ошибка: terminalKey не загружен.");
      return;
    }

    const { description, amount, email, phone, receipt } = form;

    if (!email.value && !phone.value) {
      alert("Поле E-mail или Phone не должно быть пустым");
      return;
    }

    if (receipt) {
      form.receipt.value = JSON.stringify({
        "EmailCompany": "admin@ceostory.ru",
        "Taxation": "usn_income",
        "FfdVersion": "1.2",
        "Items": [
          {
            "Name": description.value || "Оплата",
            "Price": Math.round(amount.value * 100),
            "Quantity": 1.00,
            "Amount": Math.round(amount.value * 100),
            "PaymentMethod": "full_prepayment",
            "PaymentObject": "service",
            "Tax": "none",
            "MeasurementUnit": "pc"
          }
        ]
      });
    }

    form.terminalkey.value = terminalKey;
    pay(form);
  };

  return (
    <div className='tariffs-small'>
      <PopupError
        isVisible={popupError.visible}
        errorMessage={popupError.message}
        onClose={closePopupError}
      />
        <div className='tariffs-small__container'>
        <div className='tariffs-small__left-block'>
            <p className='tariffs-small__skills'>
              Получи знания, чтобы построить бизнес
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
                <button
                    type="submit"
                    className="link link__tariffs-small"
                    disabled={isSubmitting[index]}
                  >
                    <span>                    
                      {isSubmitting[index] ? 'Подождите...' : 'Получить доступ'}
                    </span>
                  </button>
                <input type="hidden" name="receipt" value="" />
                <input type="hidden" name="DATA" value={currentUser?._id} />
                <input type="hidden" name="DATA[userID]" value={currentUser?._id} />
                </form>
            </div>
            ))}

            <div className='tariffs-small__benefits'>
            <ul className='tariffs-small__price-list'>
                <li className='tariffs-small__price-item'>
                <div className='tariffs-small__price-benefit-img'></div>
                <div className='tariffs-small__price-сontainer'>
                    <p className='tariffs-small__price-name'>
                    {totalStories} {getHistoryWord4(totalStories)} {getHistoryWord3(totalStories)} по открытию бизнеса
                    </p>
                    <p className='tariffs-small__price-text'>
                    Полный доступ ко всем инструкциям
                    </p>
                </div>
                </li>
                <li className='tariffs-small__price-item'>
                <div className='tariffs-small__price-benefit-img'></div>
                <div className='tariffs-small__price-сontainer'>
                    <p className='tariffs-small__price-name'>Материалы от предпринимателей</p>
                    <p className='tariffs-small__price-text'>
                    Полный доступ к файлам, которые помогут открыть бизнес
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
              Открой бизнес <span className='tariffs-small__right-block-span'><br/>по&nbsp;проверенным&nbsp;инструкциям</span>
            </p>
            <p className='tariffs-small__right-block-text'>
              С СEOstory ты узнаешь какой путь надо пройти, чтобы открыть свой бизнес
            </p>
            <p className='tariffs-small__right-block-more'>
            Погрузись в {totalStories} {getHistoryWord1(totalStories)} как с нуля добиться того же самого
            </p>
            <div className='tariffs-small__right-block-image'></div>
        </div>
        </div>
    </div>
  );
};

export default TariffsSmall;