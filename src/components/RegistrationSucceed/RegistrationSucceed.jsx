import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RegistrationSucceed = ({ onEmailConfirmation }) => {
  const { userId, token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        await onEmailConfirmation(userId, token); // Вызываем обработчик подтверждения
      } catch (err) {
        console.error(err);
      }
    };

    confirmEmail();
  }, [userId, token, onEmailConfirmation]);

  return (
    <div>
    </div>
  );
};

export default RegistrationSucceed;