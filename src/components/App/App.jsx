import './App.css';
// import '../../vendor/normalize.css';
import { useEffect, useState } from 'react';
import { CurrentUserContext}  from '../../context/CurrentUserContext';
import { Route, Routes, useLocation, useNavigate, Navigate, useParams  } from 'react-router-dom';
import * as auth from '../../utils/MainApi';
import Main from '../Main/Main'
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ForgottenPassword from '../ForgottenPassword/ForgottenPassword';
import Tariffs from '../Tariffs/Tariffs';
import Payment from '../Payment/Payment';
import ServerError from '../ServerError/ServerError';
import ResetPassword from '../ResetPassword/ResetPassword';
import About from '../About/About';
import Saved from '../Saved/Saved';
import Policy from '../Policy/Policy';
import PersonalData from '../PersonalData/PersonalData';
import TermsOfUse from '../TermsOfUse/TermsOfUse';
import PersonalDataForm from '../PersonalDataForm/PersonalDataForm';
import Cookies from '../Cookies/Cookies';
import CareerStories from '../Stories/CareerStories/CareerStories';
import BusinessStories from '../Stories/BusinessStories /BusinessStories';
import Academy from '../Academy/Academy';
import BatashevR from '../StoryData/Business/BatashevR/BatashevR';
import ConfirmationPayment from '../ConfirmationPayment/ConfirmationPayment';
import KorotkovaE from '../StoryData/Career/KorotkovaE/KorotkovaE';
import RegistrationSucceed from '../RegistrationSucceed/RegistrationSucceed';
import PopupError from '../PopupError/PopupError';
import PopupSuccess from '../PopupSuccess/PopupSuccess';

//истории
 
function App() {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [logedIn, setLogedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // const [savedStory, setSavedStory] = useState([]); // Инициализация состояния для сохраненных историй
    const [savedStories, setSavedStories] = useState([]);
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [showPopupConfirmationEmail, setShowPopupConfirmationEmail] = useState(false); // Состояние для показа попапа
    const [isPopupErrorVisible, setIsPopupErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); 
    const [isPopupSuccessVisible, setIsPopupSuccessVisible] = useState(false);

    // регистрация
    // Обработчик регистрации
    const handleRegister = (name, email, password) => {
        setIsLoading(true);
        auth
          .register(name, email, password)
          .then((data) => {
            setCurrentUser({ name, email });
            setShowPopupConfirmationEmail(true); // Показываем popup успешной регистрации
          })
          .catch((err) => {
            console.error(err);
            let errorMessage = 'При регистрации пользователя произошла ошибка, попробуйте позднее';
            if (err === 'Ошибка: 409') {
              errorMessage = 'Пользователь с таким e-mail уже существует';
            } else if (err === 'Ошибка: 500') {
              errorMessage = 'На сервере произошла ошибка, попробуйте позднее';
            }
            setErrorMessage(errorMessage);
            setIsPopupErrorVisible(true); // Показываем PopupError
          })
          .finally(() => setIsLoading(false));
      };

    // Подтверждение почты
    const handleConfirmEmail = (userId, token) => {
        setIsLoading(true);
        auth
          .confirmEmail(userId, token)
          .then((data) => {
            if (data.accessToken) {
              localStorage.setItem('token', data.accessToken); // Сохраняем токен в localStorage
              setSuccessMessage("Вы успешно зарегистрировались!"); // Устанавливаем сообщение
              setIsPopupSuccessVisible(true); // Показываем popup
              navigate('/career-stories', { replace: true }); // Перенаправляем пользователя
            } else {
              setErrorMessage('Не удалось получить токен доступа. Попробуйте снова позже.');
              setIsPopupErrorVisible(true); // Открываем PopupError
            }
          })
          .catch((err) => {
              console.error('Ошибка подтверждения почты:', err);
              let error = 'Произошла ошибка при подтверждении почты.';
              if (err.response && err.response.status === 401) {
                error = 'Некорректная ссылка для подтверждения почты.';
              } else if (err.response && err.response.status === 500) {
                error = 'На сервере произошла ошибка. Попробуйте позже.';
              }
        
              setErrorMessage(error); // Устанавливаем сообщение об ошибке
              setIsPopupErrorVisible(true); // Показываем PopupError
          })
          .finally(() => setIsLoading(false));
      };

    // авторизация
    const handleLogin = (email, password) => {
        setIsLoading(true);
        auth
          .login(email, password)
          .then((data) => {
            if (data.token) {
              localStorage.setItem('token', data.token); // Сохраняем токен
              getSavedStories();
              navigate('/career-stories', { replace: true }); // Перенаправляем пользователя
            }
          })
          .catch((err) => {
            console.error(err);
            let error = 'При входе произошла ошибка.';
            if (err === 'Ошибка: 401') {
              error = 'Неправильный e-mail или пароль.';
            } else if (err === 'Ошибка: 400') {
              error = 'Неправильный e-mail или пароль.';
            }
            setErrorMessage(error);
            setIsPopupErrorVisible(true);
          })
          .finally(() => setIsLoading(false));
      };

    // получить данные о пользователе
    const getUser = () => {
        auth
        .getUser()
        .then((dataUser) => {
            setCurrentUser(dataUser);
        })
        .catch((err) => console.log(err));
    };

    // отправка email в случае если забыл пароль
    const handleSendEmail = (email) => {
        setIsLoading(true);
        auth
          .sendPasswordResetEmail(email)
          .then(() => {
            setIsEmailSent(true); // Успешная отправка email
            setSuccessMessage('Ссылка на восстановление пароля направлена на указанную почту.'); // Устанавливаем сообщение
            setIsPopupSuccessVisible(true); // Показываем PopupSuccess
        })
        .catch((err) => {
            console.error(err);
            let errorMessage = 'Пользователь с таким email не найден.';
            if (err.response && err.response.status === 404) {
              errorMessage = 'Пользователь с таким email не найден.';
            }
            setErrorMessage(errorMessage); // Устанавливаем сообщение об ошибке
            setIsPopupErrorVisible(true); // Показываем PopupError
        })
        .finally(() => setIsLoading(false));
    };
      
    const handleNewPassword = (userId, token, password) => {
        setIsLoading(true);
        auth
            .newPassword(userId, token, password)
            .then((response) => {
                if (response.accessToken) {
                    localStorage.setItem('token', response.accessToken); // Сохраняем токен
                    navigate('/career-stories', { replace: true }); // Перенаправляем пользователя
                } else {
                    throw new Error('Ошибка: токен доступа не был получен.');
                }
            })
            .catch((err) => {
                console.error(err);
                let error = 'Просроченная или некорректная ссылка. Попробуйте еще раз.';
                if (err.response) {
                    if (err.response.status === 400) {
                        error = 'Некорректные данные для сброса пароля.';
                    } else if (err.response.status === 401) {
                        error = 'Просроченная или некорректная ссылка. Попробуйте еще раз.';
                    } else if (err.response.status === 500) {
                        error = 'На сервере произошла ошибка. Попробуйте позже.';
                    }
                }
                setErrorMessage(error);
                setIsPopupErrorVisible(true);
            })
            .finally(() => setIsLoading(false));
    };
    
    
    // проверка токена
    const tokenFromLocalStorage = localStorage.getItem('token');

    useEffect(() => {
        if (tokenFromLocalStorage) {
        auth
            .checkToken(tokenFromLocalStorage)
            .then((res) => {
            setLogedIn(true);
            setCurrentUser(res);
            getUser();
            })
            .catch((err) => console.log(err))
        };
    }, [tokenFromLocalStorage]);

    // выход из аккаунта 
    const logout = () => {
        localStorage.removeItem('token');
        setLogedIn(false);
        localStorage.removeItem('filters'); 
        localStorage.removeItem('storyFilters');
        localStorage.removeItem('savedStories');
    };

    // показать Preloader
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Выключаем прелоадер через 10 секунд
        }, 3000); // Задержка на 3 секунды

        return () => {
            clearTimeout(timer); // Очистка таймера при размонтировании
        };
    }, []);

    // Получение сохраненных историй
    const getSavedStories = () => {
        auth
            .getSavedStory()
            .then((data) => {
                setSavedStories(data);
                localStorage.setItem('savedStories', JSON.stringify(data));
            })
            .catch((err) => console.log(err));
    };

    // Функция для сохранения истории
    const saveStory = (story) => {
        auth.saveStory(story)
            .then((newStory) => {
                const newSavedStories = [newStory, ...savedStories];
                setSavedStories(newSavedStories);
                localStorage.setItem('savedStories', JSON.stringify(newSavedStories));
                console.log('Сохраненные истории:', newSavedStories);
            })
            .catch((err) => console.log(err));
    };

    // Удаление истории
    const removeStory = async (story) => {
        const savedStories = JSON.parse(localStorage.getItem('savedStories'));
        const foundSavedStory = savedStories.find((item) => item.storyId === story.storyId);

        if (foundSavedStory) {
            try {
                await auth.deleteStory(foundSavedStory._id);
                const updatedSavedStories = savedStories.filter((item) => item.storyId !== story.storyId);
                localStorage.setItem('savedStories', JSON.stringify(updatedSavedStories));
                setSavedStories(updatedSavedStories);
                console.log('История удалена');
            } catch (err) {
                console.log('Ошибка при удалении истории:', err);
            }
        } else {
            console.log('История не найдена');
        }
    };

    // Функция для проверки, сохранена ли история
    const isStorySaved = (storyId) => savedStories.some(story => story.storyId === storyId);

    useEffect(() => {
        getSavedStories();
    }, []);
    
    const increaseView = async (storyId) => {
        try {
            const response = await auth.increaseViews(storyId); // Вызов функции для отправки данных на сервер
    
            return response.views;  // Возвращаем обновленное количество просмотров
        } catch (error) {
            console.error(`Ошибка при отправке данных для истории с ID ${storyId}:, error`);
            throw error; 
        }
    };

    // оплата
    const handlePaymentSubmit = async (paymentData) => {
        setIsLoading(true); // Устанавливаем состояние загрузки
        console.log('Отправка данных на оплату:', paymentData);
    
        // try {
        //     // Предполагаем, что paymentData содержит необходимые поля для оплаты
        //     const paymentResult = await 
        //     auth
        //         .payForTariff(paymentData.amount, paymentData.currency, paymentData.description);
            
        //     console.log('Результат оплаты:', paymentResult);
            
        //     // Логика для обработки успешной оплаты
        //     if (paymentResult.success) { // Предполагаем, что API возвращает объект с полем success
        //         // Перенаправление пользователя или уведомление о успехе
        //         navigate('/career-stories', { replace: true });
        //         getSavedStories(); // Получаем сохраненные истории
        //         setCurrentUser({ name: paymentData.name, email: paymentData.email }); // Обновляем текущего пользователя, если необходимо
        //     } else {
        //         // Обработка ситуации, когда оплата не удалась
        //     }
    
        // } catch (err) {
        //     console.error(err);
        //     // Обработка ошибок
        //     if (err.response) {
        //         // Если ошибка связана с ответом сервера
        //         switch (err.response.status) {
        //             case 500:
        //                 break;
        //             case 400:
        //                 break;
        //             default:
        //                 break;
        //         }
        //     } else {
        //         // Если ошибка не связана с ответом сервера
        //     }
        // } finally {
        //     setIsLoading(false); // Сбрасываем состояние загрузки
        // }
    };

    const handleClosePopup = () => {
        setIsPopupErrorVisible(false);
        setIsPopupSuccessVisible(false);
    };

    //где header полностью черный
    const isSpecialPage = () => 
        pathname === '/career-stories' || 
        pathname === '/business-stories' ||
        pathname === '/saved' || 
        pathname === '/documents/privacy-policy'||
        pathname === '/documents/personal-data'||
        pathname === '/documents/terms-of-use'||
        pathname === '/documents/personal-data-form'||
        pathname === '/tariffs' ||
        pathname === '/academy' ||
        pathname === '/confirmation' ||
        pathname === '/korotkovae-story' ||
        pathname === '/batashev-story';
        
    return (
        <div className={`app ${isSpecialPage() ? 'special-page' : ''}`}>
            <CurrentUserContext.Provider value={currentUser}>   
                <Header 
                    logout={logout}
                />
                <PopupError
                    isVisible={isPopupErrorVisible}
                    onClose={handleClosePopup}
                    errorMessage={errorMessage}
                />
                <PopupSuccess
                    isVisible={isPopupSuccessVisible}
                    onClose={handleClosePopup}
                    successMessage={successMessage}
                />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route 
                        path="/career-stories" 
                        element={
                            <CareerStories
                                saveStory={saveStory}
                                removeStory={removeStory} 
                                onIncreaseView={increaseView}
                                isStorySaved={isStorySaved}
                        />} 
                    />
                    <Route 
                        path="/business-stories" 
                        element={
                            <BusinessStories
                                saveStory={saveStory}
                                removeStory={removeStory} 
                                onIncreaseView={increaseView}
                                isStorySaved={isStorySaved}
                        />}
                    />
                    <Route 
                        path="/about" element={
                        <About 
                            logout={logout}
                    />}
                    />
                    <Route
                        path="/saved"
                        element={
                            <Saved 
                                stories={savedStories} 
                                removeStory={removeStory}
                                onIncreaseView={increaseView}
                                isStorySaved={isStorySaved} 
                        />} 
                    />
                    <Route 
                        path="/signup" element={
                        <Register 
                            onRegister={handleRegister} 
                            isLoading={isLoading}
                            showPopupConfirmationEmail={showPopupConfirmationEmail} // Передаем состояние
                            setShowPopupConfirmationEmail={setShowPopupConfirmationEmail} // Передаем функцию обновления состояния
                        />} 
                    />

                    <Route 
                        path="/confirm/:userId/:token" 
                        element={
                            <RegistrationSucceed 
                                onEmailConfirmation={handleConfirmEmail} 
                            />} 
                    />

                    <Route 
                        path="/signin" element={
                        <Login 
                            onLogin={handleLogin}
                        />} 
                    />
                    <Route 
                        path="/forgottenpassword" element={
                            <ForgottenPassword 
                                onSendEmail={handleSendEmail}
                                isLoading={isLoading}
                                isEmailSent={isEmailSent}
                        />} 
                    />
                    <Route path="/password-reset/:userId/:token" element={
                        <ResetPassword 
                            onNewPassword={handleNewPassword}
                        />}
                    />

                    <Route path="/academy" element={<Academy />} />
                    <Route 
                        path="/tariffs" element={
                            <Tariffs 
                                onPaymentSubmit={handlePaymentSubmit} 
                            />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/confirmation" element={<ConfirmationPayment />} />

                    <Route path="/documents/privacy-policy" element={<Policy />}/>
                    <Route path="/documents/personal-data" element={<PersonalData />}/>
                    <Route path="/documents/terms-of-use" element={<TermsOfUse />}/>
                    <Route path="/documents/personal-data-form" element={<PersonalDataForm />}/>

                    <Route path="/500" element={<ServerError/>} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />

                    
                    {/* ИСТОРИИ КАРЬЕРЫ */}
                    <Route path="/korotkovae-story" 
                        element={<KorotkovaE
                        saveStory={saveStory}
                        removeStory={removeStory} 
                        onIncreaseView={increaseView}
                        isStorySaved={isStorySaved}
                        />} 
                    />

                    {/* ИСТОРИИ БИЗНЕСА */}
                    <Route path="/batashev-story" 
                        element={<BatashevR
                        saveStory={saveStory}
                        removeStory={removeStory} 
                        onIncreaseView={increaseView}
                        isStorySaved={isStorySaved}
                        />} 
                    />

                </Routes>
                <Cookies />
                <Footer />
            </CurrentUserContext.Provider>
        </div>
    );
}



export default App;