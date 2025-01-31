import './ResetPassword.css';
import '../Register/Register.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function ResetPassword({ onNewPassword, errorMessage, isLoading }) {
    const { userId, token } = useParams(); // Получаем userId и token из параметров URL
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Сбросить пароль — CEOstory';
    }, []);

    const { 
        register, 
        formState: { errors, isValid }, 
        handleSubmit,
        watch 
    } = useForm({ mode: 'onChange' });

    // Получаем значения полей
    const password = watch('password', '');
    const confirmPassword = watch('confirmPassword', '');

    const handleSubmitNewPassword = (data) => {
        if (data.password !== data.confirmPassword) {
            return; // Блокируем отправку, если пароли не совпадают
        }
        onNewPassword(userId, token, data.password); // Передаем userId и token в onNewPassword
    };

    return (
        <section className='register'>
            <div className='reset__container'>
                <Link className='register__logo button' to='/'></Link>
                <p className='register__greeting reset__greeting'>Мы сбросили старый пароль. Придумайте новый</p>

                <form className='register__form forgotten-password__form' onSubmit={handleSubmit(handleSubmitNewPassword)} noValidate>
                    
                    {/* Пароль */}
                    <p className='register__text'>Пароль</p>
                    <div className='register__password'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className='register__input'
                            placeholder="Пароль*"
                            {...register('password', {
                                required: 'Пароль должен быть заполнен',
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
                            onClick={() => setShowPassword(!showPassword)} 
                        />
                    </div>
                    <div className={`register__form-error ${errors?.password ? 'register__form-error_active' : ''}`}>{errors?.password?.message || 'Ошибка'}</div>


                    {/* Подтверждение пароля */}
                    <p className='register__text reset__text'>Подтвердите пароль</p>
                    <div className='register__password'>
                        <input
                            type="password"
                            className='register__input'
                            placeholder="Повторите пароль*"
                            {...register('confirmPassword', {
                                required: 'Подтвердите пароль',
                                validate: value => value === password || 'Пароли не совпадают'
                            })}
                        />
                    </div>

                    <div className={`register__form-error ${errors?.confirmPassword ? 'register__form-error_active' : ''}`}>{errors?.confirmPassword?.message || 'Ошибка'}</div>

                    <div className='register__submit-error'>{errorMessage}</div> 
                    
                    {/* Кнопка отправки */}
                    <button className='reset__submit button' disabled={!isValid || isLoading || password !== confirmPassword}>
                        {isLoading ? "Сохранение нового пароля..." : "Сохранить и продолжить"}
                    </button>                
                </form>
            </div>
        </section>
    );
}

export default ResetPassword;