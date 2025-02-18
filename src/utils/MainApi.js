export const BASE_URL = 'http://localhost:3001';
// export const BASE_URL = 'https://api.ceostory.ru';

const checkResponse = async (res) => {
  if (res.ok) {
    return res.json();
  }

  if (res.status === 500) {
    console.error("Ошибка сервера 500: перенаправление на /500");

    return Promise.reject(new Error("Ошибка сервера 500"));
  }

  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

//регистрация
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
  })
  .then((res) => checkResponse(res));
};

// Подтверждение почты API
export const confirmEmail = (userId, token) => {
  return fetch(`${BASE_URL}/confirm/${userId}/${token}`, {
      method: 'GET',
      headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
      }
  })
  .then((res) => checkResponse(res));
};

//вход
export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then((res) => checkResponse(res))
};

//проверка токена
export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        }
})
.then((res) => checkResponse(res))
};

//получение данных пользователя
export const getUser = () => {
    return fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": 'application/json',
        "Authorization" : localStorage.getItem('token')
      },
    })
    .then((res) => checkResponse(res));
}

//сохранение карточки 
export const saveStory = (data) => {
    return fetch(`${BASE_URL}/stories`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
    })
    .then((res) => checkResponse(res));
}

//получить сохраненные каротчки
export const getSavedStory = () => {
    return fetch(`${BASE_URL}/stories`, {
        headers: {
            "Content-Type": 'application/json',
            "Authorization" : localStorage.getItem('token')
        },
    })
    .then((res) => checkResponse(res));
}
  
//удалить карточку с историей
export const deleteStory = (storyId) => {
    return fetch(`${BASE_URL}/stories/${storyId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json',
            "Authorization" : localStorage.getItem('token')
        },
    })
    .then((res) => checkResponse(res));
}

// увеличить количество просмотров
export const updateViews = (storyId) => {
  return fetch(`${BASE_URL}/views/${storyId}`, {
      method: 'PATCH',
      headers: {
          "Content-Type": 'application/json',
      },
  }).then(response => {
      if (!response.ok) {
          throw new Error(`Ошибка при обновлении просмотров: ${response.statusText}`);
      }
      return checkResponse(response);
  });
};

//создать карточку для начисления просмотров
export const createViews = (storyId) => {
  return fetch(`${BASE_URL}/views`, {
      method: 'POST',
      headers: {
          "Content-Type": 'application/json',
      },
      body: JSON.stringify({ storyId }) 
  }).then(response => {
      if (!response.ok) {
          throw new Error(`Ошибка при создании истории просмотров: ${response.statusText}`);
      }
      console.log(`Создана новая запись просмотров для истории ${storyId}`);
      return checkResponse(response);
  });
};

// получить количество просмотров
export const getViews = (storyId) => {
  return fetch(`${BASE_URL}/views/${storyId}`, {
      method: 'GET',
      headers: {
          "Content-Type": 'application/json',
      },
  }).then(checkResponse);
};




export const sendPasswordResetEmail = async (email) => {
  const response = await fetch(`${BASE_URL}/password-reset`, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  return checkResponse(response);
};

  export const newPassword = async (userId, token, password) => {
    const response = await fetch(`${BASE_URL}/password-reset/${userId}/${token}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({ password, token, userId  }),
    });

    return checkResponse(response);
  };

  export const payForTariff = (amount, currency, description) => {
    return fetch(`${BASE_URL}/payment`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount, currency, description })
    })
    .then((res) => checkResponse(res));
  };

  
  
  
  

  




