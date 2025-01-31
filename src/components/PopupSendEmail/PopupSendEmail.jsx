import React from 'react';
import './PopupSendEmail.css';

const PopupSendEmail = ({ email, onClose }) => {
    const getMailUrl = (email) => {
        const domain = email.split('@')[1]; // Получаем домен из email
        switch (domain) {
            case 'gmail.com':
                return 'https://mail.google.com';
            case 'yahoo.com':
                return 'https://mail.yahoo.com';
            case 'outlook.com':
            case 'hotmail.com':
                return 'https://outlook.live.com';
            case 'yandex.ru':
                return 'https://mail.yandex.ru';
            case 'mail.ru':
                return 'https://mail.ru';
            case 'list.ru':
                return 'https://list.ru';
            case 'bk.ru':
                return 'https://bk.ru';
            case 'inbox.ru':
                return 'https://inbox.ru';
            case 'rambler.ru':
                return 'https://mail.rambler.ru';
            case 'protonmail.com':
                return 'https://protonmail.com';
            case 'zoho.com':
                return 'https://zoho.com/mail';
            case 'icloud.com':
                return 'https://www.icloud.com/mail';
            case 'tutanota.com':
                return 'https://tutanota.com';
            case 'gmx.com':
                return 'https://www.gmx.com';
            case 'mail.com':
                return 'https://www.mail.com';
            default:
        return null; // Если домен не поддерживается
        }
    };
        
    const mailUrl = getMailUrl(email); // Получаем URL для почты

    const handleCheckMail = () => {
        if (mailUrl) {
            window.open(mailUrl, '_blank'); // Открываем URL в новой вкладке
        } else {
        }
    };

    return (
        <div className="sent-email">
            <div className="sent-email__container">
                <h2 className='sent-email__notefication'>Письмо отправлено</h2>
                <p className='sent-email__text'>Мы отправили письмо для подтверждения почтового адреса </p>
                <p className='sent-email__mail'>на 
                    <span className='sent-email__mail-span'> {email}
                        </span>
                </p>
                {mailUrl && (
                    <button className='sent-email__check button' onClick={handleCheckMail}>
                        Проверить почту
                    </button>
                )}
                <button className='sent-email__close' onClick={onClose}></button>
            </div>
        </div>
    );
};

export default PopupSendEmail;
