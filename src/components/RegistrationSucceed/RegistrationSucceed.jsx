// Компонент для подтверждения регистрации
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RegistrationSucceed = ({ onEmailConfirmation }) => {
    const { userId, token } = useParams(); // Получаем параметры из URL
    const navigate = useNavigate(); // Хук для навигации

    useEffect(() => {
        const confirmEmail = async () => {
            try {
                await onEmailConfirmation(userId, token); // Вызываем функцию подтверждения
                // После успешного подтверждения перенаправляем на страницу входа
                navigate('/career-stories', { replace: true });
            } catch (err) {
                console.error(err);
                // Обработка ошибок подтверждения почты
                alert('Ошибка подтверждения электронной почты. Пожалуйста, проверьте ссылку и попробуйте снова.');
            }
        };

        confirmEmail();
    }, [userId, token, onEmailConfirmation, navigate]);

    return (
        <div>
            <h1>Подтверждение почты...</h1>
            <p>Пожалуйста, подождите, пока мы подтверждаем вашу почту.</p>
        </div>
    );
};

export default RegistrationSucceed;
