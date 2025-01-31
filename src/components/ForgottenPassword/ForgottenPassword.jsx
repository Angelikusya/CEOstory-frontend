import './ForgottenPassword.css';
import '../Register/Register.css';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function ForgottenPassword({ onSendEmail, errorMessage, isLoading, isEmailSent }) {
  const [email, setEmail] = useState('');
  const [timer, setTimer] = useState(0); // Таймер в секундах
  const [showTimer, setShowTimer] = useState(false); // Состояние для отображения таймера

  useEffect(() => {
    document.title = 'Забыли пароль? — CEOstory';
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval); // Очистка таймера при размонтировании
    } else if (timer === 0 && showTimer) {
      setShowTimer(false); // Скрываем таймер после завершения
    }
  }, [timer, showTimer]);

  const {
    register,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    const subscription = watch(({ email }) => {
      setEmail(email);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  const handleSubmitSendEmail = (e) => {
    e.preventDefault();
    onSendEmail(email);

    if (isValid) {
      setShowTimer(true); // Показываем таймер
      setTimer(60); // Устанавливаем таймер на 1 минуту
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; // Формат "минуты:секунды"
  };

  return (
    <section className="register">
      <div className="forgotten-password__container">
        <Link className="register__logo button" to="/" />
        <p className="register__greeting forgotten-password__greeting">
          Введите почту, которая была привязана к аккаунту. Мы отправим ссылку для восстановления пароля.
        </p>

        <form
          className="register__form forgotten-password__form"
          onSubmit={handleSubmitSendEmail}
          noValidate
        >
          <p className="register__text">E-mail</p>
          <input
            id="email-input"
            type="email"
            className="register__input"
            placeholder="Введите Email"
            minLength="2"
            maxLength="60"
            value={email}
            disabled={isLoading}
            {...register('email', {
              required: 'Введите Ваш Email',
              minLength: {
                value: 5,
                message: 'Минимальное количество символов: 5',
              },
              maxLength: {
                value: 40,
                message: 'Максимальное количество символов: 40',
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
                message: 'Некорректный формат Email',
              },
            })}
          />
          <div
            className={`register__form-error ${
              errors?.email ? 'register__form-error_active' : ''
            }`}
          >
            {errors?.email?.message || 'Ошибка'}
          </div>
          <div className="register__submit-error">{errorMessage}</div>

          {showTimer && isEmailSent ? (
          <div className="forgotten-password__submit">
            Повторите попытку через {formatTime(timer)} мин.
          </div>
        ) : (
          <button
            className="register__submit forgotten-password__submit button"
            disabled={!isValid || isLoading}
            type="submit"
          >
            {isLoading ? 'Пожалуйста, подождите...' : 'Восстановить пароль'}
          </button>
        )}
        </form>
      </div>
    </section>
  );
}

export default ForgottenPassword;