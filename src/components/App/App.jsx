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
import NotJoinedAllert from '../NotJoinedAllert/NotJoinedAllert';
import NotPaidAllert from '../NotPaidAllert/NotPaidAllert';
import DATACareer from '../Data/DataCareer';
import DATABusiness from '../Data/DataBusiness';

function App() {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [logedIn, setLogedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [savedStories, setSavedStories] = useState([]);
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [showPopupConfirmationEmail, setShowPopupConfirmationEmail] = useState(false); // Состояние для показа попапа
    const [isPopupErrorVisible, setIsPopupErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); 
    const [isPopupSuccessVisible, setIsPopupSuccessVisible] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [IsSaveBlocked, setIsSaveBlocked] = useState(null);
    const [hasActiveSubscription, setHasActiveSubscription] = useState(false);
    const [subscriptionEnd, setSubscriptionEnd] = useState(null);
    const token = localStorage.getItem('token');

    
    useEffect(() => {
        const handleUnhandledRejection = (event) => {
          console.error("Необработанная ошибка:", event.reason);
    
          if (event.reason.message.includes("Ошибка сервера 500")) {
            navigate("/500"); // Редирект на страницу ошибки
          }
        };
    
        window.addEventListener("unhandledrejection", handleUnhandledRejection);
    
        return () => {
          window.removeEventListener("unhandledrejection", handleUnhandledRejection);
        };
    }, [navigate]);

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
            if (err.message.includes('409')) { // Проверяем код ошибки в тексте
              errorMessage = 'Пользователь с таким e-mail уже существует';
            } else if (err.message.includes('500')) {
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
            if (err.message.includes('401') || err.message.includes('400')) {
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
    
    // установка нового пароля после его сброса
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

    // выход из аккаунта 
    const logout = () => {
        console.log('Выход из аккаунта');
        localStorage.removeItem('token');
        localStorage.removeItem('filters'); 
        localStorage.removeItem('storyFilters');
        localStorage.removeItem('savedStories');
        setLogedIn(false);
        setCurrentUser(null);
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

    // Удаление истории
    const removeStory = (story) => {
        const savedStories = JSON.parse(localStorage.getItem('savedStories')) || [];
        const foundSavedStory = savedStories.find((item) => item.storyId === story.storyId);
    
        if (!foundSavedStory) {
            console.log('История не найдена');
            return;
        }
    
        auth.deleteStory(foundSavedStory._id)
            .then(() => {
                const updatedSavedStories = savedStories.filter((item) => item.storyId !== story.storyId);
                localStorage.setItem('savedStories', JSON.stringify(updatedSavedStories));
                setSavedStories(updatedSavedStories);
            })
            .catch((err) => console.log('Ошибка при удалении истории:', err));
    };

    // Функция для проверки, сохранена ли история
    const isStorySaved = (storyId) => savedStories.some(story => story.storyId === storyId);

    const handleSaveStory = (story) => {
        // if (!logedIn) {
        //     setIsSaveBlocked(story.storyId);
    
        //     // Убираем блокировку через 5 секунд
        //     setTimeout(() => {
        //         setIsSaveBlocked(null);
        //     }, 3000);
    
        //     return;
        // }
    
        // setIsSaving(true);
    
        auth.saveStory(story)
            .then((newStory) => {
                const newSavedStories = [newStory, ...savedStories];
                setSavedStories(newSavedStories);
                localStorage.setItem('savedStories', JSON.stringify(newSavedStories));
                // console.log('Сохраненные истории:', newSavedStories);
            })
            .catch((err) => {
                console.log("Ошибка при сохранении:", err);
            })
            .finally(() => {
                setIsSaving(false);
            });
    };

    // убрала, так как постоянно идет запрос на отображаение карточек (при загрузки страницы, пересещении и тд)
    // useEffect(() => {
    //     getSavedStories();
    // }, []);
    
    // const increaseView = (storyId) => {
    //     return auth
    //         .increaseViews(storyId)
    //         .then(response => response.views)  // Возвращаем обновленное количество просмотров
    //         .catch(error => {
    //             console.error(`Ошибка при отправке данных для истории с ID ${storyId}:`, error);
    //             throw error; 
    //         });
    // };

    const increaseView = (storyId) => {
        // const sessionKey = `viewed_${storyId}`;
    
        // if (sessionStorage.getItem(sessionKey)) {
        //     console.log(`Просмотр истории ${storyId} уже зафиксирован в этой сессии.`);
        //     return Promise.resolve(null);
        // }
    
        // return getViews(storyId)
        //     .then(viewData => {
        //         console.log(`Текущие просмотры: ${viewData.views}`);
        //         return updateViews(storyId);
        //     })
        //     // .then(response => {
        //     //     sessionStorage.setItem(sessionKey, 'true');
        //     //     return response.views;
        //     // })
        //     .catch(error => {
        //         if (error.message.includes('404')) {
        //             console.warn(`Карточка для истории ${storyId} не найдена. Создаю новую...`);
        //             return createViews(storyId)
        //                 .then(() => new Promise(resolve => setTimeout(resolve, 1000))) // Ждём 1 сек перед повторным GET
        //                 .then(() => getViews(storyId))
        //                 .then(viewData => updateViews(storyId))
        //                 .then(updatedResponse => {
        //                     // sessionStorage.setItem(sessionKey, 'true');
        //                     return updatedResponse.views;
        //                 });
        //         }
    
        //         console.error(`Ошибка при увеличении просмотров для истории с ID ${storyId}:`, error);
        //         return 0;
        //     });
    };


    const getViews = (storyId, setNewViews) => {
        if (!storyId) {
            console.warn("getViews: storyId отсутствует.");
            setNewViews(0);
            return;
        }
        auth
            .getViews(storyId)
            .then((viewData) => {
                const views = viewData?.views || 0; // Если `views` нет, устанавливаем 0
                setNewViews(views);
                if (views !== null) {
                    localStorage.setItem(`storyViews_${storyId}`, JSON.stringify(views)); // Сохраняем в localStorage
                }
            })
            .catch((error) => {    
                // Если ошибка 404, устанавливаем просмотры в 0
                if (error?.response?.status === 404 || error?.message?.includes("404")) {
                    setNewViews(0);
                    localStorage.setItem(`storyViews_${storyId}`, JSON.stringify(0));
                }
            });
    };

    // оплата
    const handlePaymentSubmit = async (paymentData) => {
        setIsLoading(true); // Устанавливаем состояние загрузки
        console.log('Отправка данных на оплату:', paymentData);
    };

    const handleClosePopup = () => {
        setIsPopupErrorVisible(false);
        setIsPopupSuccessVisible(false);
    };

    useEffect(() => {
        if (!token) {
            setHasActiveSubscription(false);
            setSubscriptionEnd(null);
            setCurrentUser(null);
            return;
        }

        const fetchUserSubscription = () => {
            console.log('🔄 Запрос на проверку подписки...');
            auth.checkToken(token)
                .then((res) => {
                    if (res && res.subscriptionEnd !== undefined) {
                        const subscriptionEndDate = res.subscriptionEnd ? new Date(res.subscriptionEnd) : null;
                        const currentDate = new Date();

                        // console.log('📢 Текущая дата (UTC):', currentDate.toISOString());
                        // console.log('📢 Дата окончания подписки (UTC):', subscriptionEndDate ? subscriptionEndDate.toISOString() : 'Нет подписки');

                        const isActive = subscriptionEndDate !== null && currentDate < subscriptionEndDate;
                        // console.log('📢 Подписка:', isActive ? 'АКТИВНА' : 'ИСТЕКЛА / ОТСУТСТВУЕТ');

                        setHasActiveSubscription(isActive);
                        setSubscriptionEnd(subscriptionEndDate); // Сохраняем подписку
                        setCurrentUser(res); // Обновляем `currentUser`
                    }
                })
                .catch((error) => {
                    console.error('⚠️ Ошибка обновления подписки:', error);
                    setHasActiveSubscription(false);
                    setSubscriptionEnd(null);
                });
        };

        fetchUserSubscription();
        const intervalId = setInterval(fetchUserSubscription, 15000); // ✅ Обновляем каждые 10 сек

        return () => clearInterval(intervalId);
    }, [token]);


    const totalStories = DATACareer.length + DATABusiness.length;

    const getHistoryWord1 = (count) => {
        if (count % 10 === 1 && count % 100 !== 11) return "историю";
        if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(totalStories % 100)) return "истории";
        return "историй";
    };


    const getHistoryWord3 = (count) => {
        if (count % 10 === 1 && count % 100 !== 11) return "история";
        if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return "истории";
        return "историй";
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
                <NotPaidAllert 
                    hasActiveSubscription={hasActiveSubscription}
                />
                <NotJoinedAllert />
                <Routes>
                    <Route 
                        path="/" 
                        element={
                        <Main 
                            totalStories={totalStories}
                            getHistoryWord1={getHistoryWord1}
                            getHistoryWord3={getHistoryWord3}
                        />} 
                    />
                    <Route 
                        path="/career-stories" 
                        element={
                            <CareerStories
                                saveStory={handleSaveStory}
                                removeStory={removeStory} 
                                onIncreaseView={increaseView}
                                isStorySaved={isStorySaved}
                                isSaving={isSaving}
                                IsSaveBlocked={IsSaveBlocked}
                                getViews={getViews}
                        />} 
                    />
                    <Route 
                        path="/business-stories" 
                        element={
                            <BusinessStories
                                saveStory={handleSaveStory}
                                removeStory={removeStory} 
                                onIncreaseView={increaseView}
                                isStorySaved={isStorySaved}
                                isSaving={isSaving}
                                IsSaveBlocked={IsSaveBlocked}
                                getViews={getViews}
                        />}
                    />
                    <Route
                        path="/about"
                        element={logedIn ? <About subscriptionEnd={subscriptionEnd} hasActiveSubscription={hasActiveSubscription} /> : <Navigate to="/" replace />}
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
                                totalStories={totalStories}
                                getHistoryWord1={getHistoryWord1}
                                getHistoryWord3={getHistoryWord3}
                            />} 
                    />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/confirmation" element={<ConfirmationPayment />} />

                    <Route path="/documents/privacy-policy" element={<Policy />}/>
                    <Route path="/documents/personal-data" element={<PersonalData />}/>
                    <Route path="/documents/terms-of-use" element={<TermsOfUse />}/>
                    <Route path="/documents/personal-data-form" element={<PersonalDataForm />}/>

                    <Route path="/500" element={<ServerError/>} />
                    <Route 
                        path="/404" 
                            element={
                                <NotFound
                                    totalStories={totalStories}
                                    getHistoryWord={getHistoryWord1} 
                            />} 
                        />
                    <Route path="*" element={<Navigate to="/404" replace />} />

                    
                    {/* ИСТОРИИ КАРЬЕРЫ */}
                    <Route path="/korotkovae-story" 
                        element={<KorotkovaE
                        saveStory={handleSaveStory}
                        removeStory={removeStory} 
                        onIncreaseView={increaseView}
                        isStorySaved={isStorySaved}
                        />} 
                    />

                    {/* ИСТОРИИ БИЗНЕСА */}
                    <Route path="/batashev-story" 
                        element={<BatashevR
                        saveStory={handleSaveStory}
                        removeStory={removeStory} 
                        onIncreaseView={increaseView}
                        isStorySaved={isStorySaved}
                        isSaving={isSaving}
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