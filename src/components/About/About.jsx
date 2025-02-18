import './About.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile-header-desk.svg';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const About = ({ subscriptionEnd, hasActiveSubscription, logout }) => {

  const currentUser = useContext(CurrentUserContext);
    // Проверяем, истекла ли подписка
    const currentDate = new Date();
    const isSubscriptionExpired = subscriptionEnd ? currentDate > subscriptionEnd : true;

    // Форматирование даты (DD.MM.YYYY)
    const formatDate = (date) => {
        return date ? date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }) : 'Нет подписки';
    };

    return (
        <section className='about'>
            <div className='about__main'>
                <div className='about__info'>
                    <p className='about__name'>{currentUser.name}</p>
                    <p className='about__subscribtion'>
                        {hasActiveSubscription
                            ? `Подписка до ${formatDate(subscriptionEnd)}`
                            : 'Подписка не оплачена'}
                    </p>
                </div>
                <div className='about__profile'>
                    <div className='about__circle'>
                        <img className='about__icon' src={profile} alt='профиль' />
                    </div>
                </div>
            </div>

            {(!hasActiveSubscription || isSubscriptionExpired) && (
                <Link to='/tariffs' className='about__link button'>Оплатить подписку</Link>
            )}

            <Link className='about__logout button' to='/' onClick={logout}>
                Выйти из аккаунта
            </Link>
        </section>
    );
};

export default About;