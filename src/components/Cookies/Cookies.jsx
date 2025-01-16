import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Cookies.css';

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation(); // Получаем текущий путь

    useEffect(() => {
        // Проверяем, было ли уведомление закрыто ранее и не истек ли срок действия
        const cookieConsent = localStorage.getItem('cookieConsent');
        const consentDate = localStorage.getItem('cookieConsentDate');

        if (cookieConsent && consentDate) {
            const now = new Date();
            const expirationDate = new Date(consentDate);
            // Устанавливаем срок действия на 1 день (24 часа)
            expirationDate.setDate(expirationDate.getDate() + 1);

            if (now < expirationDate) {
                setIsVisible(false);
            } else {
                // Если срок действия истек, удаляем значения из localStorage
                localStorage.removeItem('cookieConsent');
                localStorage.removeItem('cookieConsentDate');
            }
        }
    }, []);

    const handleClose = () => {
        // Скрываем уведомление и сохраняем состояние в localStorage
        setIsVisible(false);
        localStorage.setItem('cookieConsent', 'true');
        // Сохраняем текущую дату в localStorage
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
    };

    // Проверяем, находится ли пользователь на нужных страницах
    const isCookieVisible = location.pathname === '/' || location.pathname === '/career-stories' || location.pathname === '/business-stories' || location.pathname === '/academy';

    if (!isVisible || !isCookieVisible) return null; // Если уведомление не должно быть видно, ничего не рендерим

    return (
        <section className='cookie'>
            <div className="cookie__container">
                <p className="cookie__text">
                    Мы используем файлы Cookie. Оставаясь на сайте, вы соглашаетесь с их обработкой в соответствии с&nbsp;
                    <Link to='/documents/privacy-policy' target="_blank" className="cookie__link button">Политикой&nbsp;конфиденциальности</Link> 
                </p>
            </div>
            <button className='cookie__close button' onClick={handleClose}></button>
        </section>
    );
};

export default Cookies;
