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

//истории
 
function App() {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [logedIn, setLogedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [errorMessageRegister, setErrorMessageRegister] = useState('');
    const [errorMessageLogin, setErrorMessageLogin] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    // const [savedStory, setSavedStory] = useState([]); // Инициализация состояния для сохраненных историй
    const [savedStories, setSavedStories] = useState([]);
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [errorMessageSendEmail, setErrorMessageSendEmail] = useState('');
    const [views, setViews] = useState(0);
    const [showPopupConfirmationEmail, setShowPopupConfirmationEmail] = useState(false); // Состояние для показа попапа

    // регистрация
    // Обработчик регистрации
    const handleRegister = (name, email, password) => {
        setIsLoading(true);
        auth
            .register(name, email, password)
            .then((data) => {
                setCurrentUser({ name, email });
                setShowPopupConfirmationEmail(true);
                // Здесь можно добавить логику для отправки уведомления о необходимости подтвердить почту
            })
            .catch((err) => {
                console.error(err);
                if (err === 'Ошибка: 409') {
                    setErrorMessageRegister('Пользователь с таким e-mail уже существует');
                } else if (err === 'Ошибка: 500') {
                    setErrorMessageRegister('На сервере произошла ошибка');
                } else {
                    setErrorMessageRegister('При регистрации пользователя произошла ошибка');
                }
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
              localStorage.setItem('token', data.accessToken);
              navigate('/career-cases', { replace: true }); // Замените на нужный роут
            }
          })
          .catch((err) => {
            console.error(err);
            setErrorMessageRegister('Не удалось подтвердить почту. Попробуйте позже.');
          })
          .finally(() => setIsLoading(false));
      };

    
    
    // авторизация
    const handleLogin = (email, password) => { 
      setIsLoading(true);
      auth
        .login(email, password)
        .then(data => {
          if (data.token) {
            localStorage.setItem('token', data.token);
            getSavedStories();
            navigate('/career-stories', {replace: true});
            return data;
          }
        })
        .catch((err) => {
          console.error(err);
          if (err === 'Ошибка: 401') {
              setErrorMessageLogin('Неправильный e-mail или пароль');
          } else if (err === 'Ошибка: 400') {
            setErrorMessageLogin('На сервере произошла ошибка, попробуйте чуть позже');
          } else {
            setErrorMessageLogin('При входе произошла ошибка');
          }
        })
        .finally(() => setIsLoading(false))
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
        setIsLoading(true); // Устанавливаем состояние загрузки

        auth
            .sendPasswordResetEmail(email)
            .then(async () => {
                setIsEmailSent(true); // Успешная отправка email
                setErrorMessageSendEmail(''); // Сбрасываем сообщение об ошибке
                console.log(`Email отправлен на: ${email}`); 
            })
            .catch(async (err) => {
                console.error(err);
                let errorMessage = 'При отправке email произошла ошибка, попробуйте позже';
                // Проверяем код ошибки Firebase
                if (err.code === 'auth/user-not-found') {
                    errorMessage = 'Пользователь с таким email не найден';
                } else if (err.code === 'auth/invalid-email') {
                    errorMessage = 'Некорректный адрес электронной почты';
                }
      
                // Обрабатываем ответ от вашего сервера
                if (err.response) {
                try {
                    const data = await err.response.json();
                    errorMessage = data.error || errorMessage; // Используем сообщение от сервера, если оно есть
                } catch (jsonError) {
                    console.error('Ошибка при парсинге JSON:', jsonError);
                }
                }
                setErrorMessageSendEmail(errorMessage);
            })
            .finally(() => setIsLoading(false)); // Сбрасываем состояние загрузки
    };

    const handleNewPassword = async (userId, token, password) => {
        try {
            const response = await auth.newPassword(userId, token, password);
    
            // Проверяем, если ответ содержит сообщение
            if (response && response.message) {
                console.log(response.message); // Выводим сообщение от сервера
            }
    
            getSavedStories();
            navigate('/signin', { replace: true });
            console.log('Пароль успешно изменен!'); // Уведомление об успешном изменении пароля
    
        } catch (error) {
            console.error('Ошибка при сбросе пароля:', error);
        }
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

      // удаление всех ошибок 
    // useEffect(() => {
    //     setErrorMessageLogin('');
    //     setErrorMessageRegister('');
    // }, []);

    // показать Preloader
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Выключаем прелоадер через 10 секунд
        }, 3000); // Задержка на 10 секунд

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
        //         setErrorMessageRegister('Оплата не удалась. Пожалуйста, попробуйте еще раз.');
        //     }
    
        // } catch (err) {
        //     console.error(err);
        //     // Обработка ошибок
        //     if (err.response) {
        //         // Если ошибка связана с ответом сервера
        //         switch (err.response.status) {
        //             case 500:
        //                 setErrorMessageRegister('На сервере произошла ошибка');
        //                 break;
        //             case 400:
        //                 setErrorMessageRegister('Некорректные данные для оплаты');
        //                 break;
        //             default:
        //                 setErrorMessageRegister('При обработке платежа произошла ошибка');
        //                 break;
        //         }
        //     } else {
        //         // Если ошибка не связана с ответом сервера
        //         setErrorMessageRegister('При обработке платежа произошла ошибка');
        //     }
        // } finally {
        //     setIsLoading(false); // Сбрасываем состояние загрузки
        // }
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
                       />
                    } 
                />
                <Route 
                    path="/business-stories" 
                    element={
                        <BusinessStories
                            saveStory={saveStory}
                            removeStory={removeStory} 
                            onIncreaseView={increaseView}
                            isStorySaved={isStorySaved}
                       />
                    } 
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
                        errorMessage={errorMessageRegister}
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