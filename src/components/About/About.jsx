import './About.css';
import React, { useContext } from 'react';
import profile from '../../assets/profile-header-desk.svg';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';



function About ({logout}) {
  const currentUser = useContext(CurrentUserContext);

  const handleExit = () => {
    logout();
  };
  
  return (
    <section className='about'>
      <div className='about__main'>
        <div className='about__info'>
          <p className='about__name'>{currentUser.name}</p>
          <p className='about__subscribtion'>
            {currentUser.subscriptionActive 
              ? `Подписка активирована до ${currentUser.subscriptionEndDate}`
              : 'Подписка не оплачена'}
          </p>
        </div>
        <div className='about__profile'>
          <div className='about__circle'>
            <img className='about__icon' src={profile} alt='профиль'></img>
          </div>
        </div>          
      </div>

      {!currentUser.subscriptionActive && (
        <Link to='/tariffs' className='about__link button'>Оплатить подписку</Link>
      )}

      <Link className='about__logout button' to='/' onClick={handleExit}>Выйти из аккаунта</Link>
    </section>
  )
}

export default About;