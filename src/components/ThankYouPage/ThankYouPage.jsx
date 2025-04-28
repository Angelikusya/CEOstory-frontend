import './ThankYouPage.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'


const ThankYouPage = () => {
    const pathname = window.location.pathname; // Получаем текущий путь
  
    useEffect(() => {
        document.title = 'Оплата успешно прошла — CEOstory';
    });

    return (
      <div className='confirmation'>
        <div className='confirmation__container'>
            <div className='confirmation__image'></div>
            <div className='confirmation__block'>
                <p className='confirmation__thank'>Спасибо за покупку!</p>

                <p className='confirmation__text'>
                    Теперь ты можешь погрузиться в CEOstory на 100%.<br/>
                    Узнай что нужно сделать, чтобы&nbsp;
                <span className='confirmation__text-span'>открыть свой бизнес</span>
                </p>
                <p className='confirmation__text'>
                    Искренне твой, <br />
                <span className='confirmation__text-bold'>Айвар</span>, основатель CEOstory
                </p>
                <Link to='/business-stories' className='link link__confirmation'>
                    <span>Читать инструкции</span>
                </Link>
            </div>
        </div>
      </div>
    )
  }
  
  export default ThankYouPage;
