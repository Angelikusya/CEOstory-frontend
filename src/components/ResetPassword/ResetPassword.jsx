import './ResetPassword.css';
import '../Register/Register.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function ResetPassword({ onNewPassword, errorMessage, isLoading }) {
    const [password, setPassword] = useState('');
    const { userId, token } = useParams(); // Получаем userId и token из параметров URL

    const { 
        register, 
        formState: { errors, isValid }, 
        watch 
    } = useForm({ mode: 'onChange' });
  
    useEffect(() => {
        const subscription = watch(({ password }) => {
            setPassword(password);
            return () => {
                subscription.unsubscribe();
            };
        });
    }, [watch]);

    const handleSubmitNewPassword = (e) => {
        e.preventDefault();
        onNewPassword(userId, token, password); // Передаем userId и token в onNewPassword
    };

    return (
        <section className='register'>
            <div className='register__container'>
                <Link className='register__logo button' to='/'></Link>
                <p className='register__greeting reset__greeting'>Мы сбросили старый пароль. Придумайте новый</p>

                <form className='register__form forgotten-password__form' onSubmit={handleSubmitNewPassword} noValidate>
                    <div className={`register__form-error ${errors?.email ? 'register__form-error_active' : ''}`}>{errors?.email?.message || 'Что-то пошло не так'}</div>
                    <p className='register__text'>Пароль</p>
                    <input
                        id="password-input"
                        type="password"
                        className='register__input'                        
                        placeholder="Введите Ваш пароль"
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
                            }
                        })} 
                    />
                    <div className={`register__form-error ${errors?.password ? 'register__form-error_active' : ''}`}>{errors?.password?.message || 'Ошибка'}</div>
                    <div className='register__submit-error'>{errorMessage}</div> 
                    <button className='register__submit' disabled={!isValid || isLoading}>Сохранить и продолжить</button>
                </form>
            </div>
        </section>
    );
}

export default ResetPassword;
