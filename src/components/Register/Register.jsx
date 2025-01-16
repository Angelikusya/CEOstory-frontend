import './Register.css';
import React,  { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Register({ onRegister, errorMessage, isLoading}) {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const { 
    register, 
    formState: { errors, isValid }, 
    watch 
  } = useForm({ mode: 'onChange' });
  

  useEffect(() => {
    const subscription = watch(({name, email, password}) => {
      setName(name);
      setEmail(email);
      setPassword(password);
      return () => {
        subscription.unsubscribe();
      }
    })
  }, [watch]);

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    onRegister(name, email, password);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };

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
      <section className='register'>
        <div className='register__container'>
          {screenSize < 1280 ? (
            <Link className='register__logo button' to='/'></Link>
          ) : null}
          {screenSize > 855 ? (
            <div className='rigister__image'></div>
          ) : null}
            <div className='register__block'>
            {screenSize >= 1280 ? (
              <Link className='register__logo button' to='/'></Link>
            ) : null}
          <p className='register__greeting'>Создайте аккаунт</p>
          <form className='register__form' onSubmit={handleSubmitRegister} noValidate>
            <p className='register__text'>Имя</p>
            <input
              id="name-input"
              type="text"
              value={name}
              className='register__input'
              placeholder="Ваше имя*"
              disabled={isLoading}
              {...register('name', {
                required: 'Имя пользователя должно быть заполнено',
                minLength: {
                  value: 2,
                  message: 'Минимальное количество символов: 2'
                },
                maxLength: {
                  value: 40,
                  message: 'Максимальное количество символов: 40'
                }
              })}  
            />
            <div className={`register__form-error ${errors?.name ? 'register__form-error_active' : ''}`}>{errors?.name?.message || 'Ошибка'}</div>
            <p className='register__text'>E-mail</p>
            <input
              id="email-input"
              type="email"
              className='register__input'
              placeholder="Почта*"
              minLength="2"
              maxLength="60"
              value={email}
              disabled={isLoading}
              {...register('email', {
                required: 'Введите Ваш Email ',
                minLength: {
                  value: 5,
                  message: 'Минимальное количество символов: 5'
                },
                maxLength: {
                  value: 40,
                  message: 'Максимальное количество символов: 40'
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,}$/,
                  message: 'Введите корректный e-mail'
                },            
              })} 
            />
            <div className={`register__form-error ${errors?.email ? 'register__form-error_active' : ''}`}>{errors?.email?.message || 'Что-то пошло не так' }</div>
            <p className='register__text'>Пароль</p>
            <div className='register__password'>
              <input
                id="password-input"
                type={showPassword ? 'text' : 'password'}
                className='register__input'
                placeholder="Пароль*"
                minLength="6"
                maxLength="40"
                value={password}
                disabled={isLoading}
                {...register('password', {
                  required: 'Пароль должен быть обязательно заполнен',
                  minLength: {
                    value: 8,
                    message: 'Минимальное количество символов: 8'
                  },
                  maxLength: {
                    value: 40,
                    message: 'Максимальное количество символов: 40'
                  },
                  validate: {
                    hasUpperCase: value => /[A-Z]/.test(value) || 'Пароль должен содержать хотя бы одну заглавную букву',
                    hasLowerCase: value => /[a-z]/.test(value) || 'Пароль должен содержать хотя бы одну строчную букву',
                    hasNumber: value => /\d/.test(value) || 'Пароль должен содержать хотя бы одну цифру',
                    hasSpecialChar: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Пароль должен содержать хотя бы один специальный символ'
                  }
                })}
              />
              <span 
                className={`toggle-password ${showPassword ? 'eye-open' : 'eye-close'}`} 
                onClick={togglePasswordVisibility} 
              />

            </div>

            <div className={`register__form-error ${errors?.password ? 'register__form-error_active' : ''}`}>{errors?.password?.message || 'Ошибка'}</div>

              <div className='register__checkbox'>
                <input
                      className="register-checkbox"
                      type="checkbox"
                      id="consentCheckbox"
                      onChange={handleCheckboxChange}
                      onClick={handleCheckboxChange}
                      checked={isCheckboxChecked}
                />
                <label htmlFor="consentCheckbox" className="checkbox__label">
                  <p className="checkbox__text"> Согласен на обработку <Link to="/documents/terms-of-use" target='_blank' className="checkbox__policy">персональных данных</Link> в&nbsp;соответствии с&nbsp;<Link to="/documents/privacy-policy" target='_blank' className="checkbox__policy button">Политикой конфиденциальности</Link></p>
                </label>
                </div>
                {/* <div className={`register__form-error ${!isCheckboxChecked ? 'register__form-error_active' : ''}`}>{'Вы должны дать согласие на обработку данных' || 'Ошибка'}</div> */}
                <div className='register__submit-error'>{errorMessage}</div> 
                <button className='register__submit button' disabled={!isValid || isLoading || !isCheckboxChecked}>Зарегистрироваться</button>
              </form>
              <Link to='/signin'className='register__button button'> Войти</Link>

          </div>
        </div>
      </section>
  )
}

export default Register;
