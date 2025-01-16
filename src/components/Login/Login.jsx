import './Login.css';
import '../Register/Register.css';
import React,  { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login({ onLogin, errorMessage, isLoading }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  
  const {
    register,
    formState: { errors, isValid },
    watch
  } = useForm({ mode: 'onChange' });


  useEffect(() => {
    const subscription = watch(({ email, password }) => {
      setEmail(email);
      setPassword(password);
      return () => {
        subscription.unsubscribe();
      };
    });
  }, [watch]);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    onLogin(email, password);
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
          <p className='register__greeting'>Войдите, чтобы продолжить</p>
          <form className='register__form' onSubmit={handleSubmitLogin} noValidate>
            <p className='register__text'>E-mail</p>
              <input
                id="email-input"
                type="email"
                className='register__input'
                placeholder="Email"
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
                    message: 'Некорректный формат Email'
                  },
                })} 
              />
              <div className={`register__form-error ${errors?.email ? 'register__form-error_active' : ''}`}>{errors?.email?.message || 'Ошибка' }</div>
              <p className='register__text'>Пароль</p>
              <div className='register__password'>
                <input
                  id="password-input"
                  type={showPassword ? 'text' : 'password'}
                  className='register__input'                        
                  placeholder="Пароль"
                  // minLength="8"
                  // maxLength="40"
                  value={password}
                  disabled={isLoading}
                  {...register('password', {
                    required: 'Введите Ваш пароль',
                    // minLength: {
                    //   value: 8,
                    //   message: 'Минимальное количество символов: 8'
                    // },
                    // maxLength: {
                    //   value: 40,
                    //   message: 'Максимальное количество символов: 40'
                    // }
                  })} 
                />
                <span 
                  className={`toggle-password ${showPassword ? 'eye-open' : 'eye-close'}`} 
                  onClick={togglePasswordVisibility} 
                />
              </div>
              <div className={`register__form-error ${errors?.password ? 'register__form-error_active' : ''}`}>{errors?.password?.message || 'Ошибка'}</div>
              <div className='register__submit-error'>{errorMessage}</div> 

              <label htmlFor="consentCheckbox" className="checkbox__label login">
                  <p className="checkbox__text login"> 
                    Согласен на обработку 
                    <Link to="/documents/terms-of-use" target='_blank' className="checkbox__policy login">персональных данных</Link> 
                    в&nbsp;соответствии с&nbsp;<Link to="/documents/privacy-policy" target='_blank' className="checkbox__policy button login">Политикой</Link>
                    </p>
                </label>
              <button className='register__submit button login' disabled={!isValid || isLoading} onClick={handleSubmitLogin}>Войти</button>
            </form>

            <Link to='/signup'className='register__button button'> Зарегистрироваться</Link>
            <Link to='/forgottenpassword'className='login__forgottenpassword button'>Забыли пароль?</Link>
            <div className='login__with'>
              <div className='login__lines'>
                <div className='login__line'></div>
                  <p className='login__line-text'>или продолжите с</p>
                <div className='login__line'></div>
              </div>
              <div className='login__flex'>
                <button className='login__icon yandex'></button>
                <button className='login__icon vk'></button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Login;
