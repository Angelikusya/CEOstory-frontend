export const BASE_URL = 'http://localhost:3001';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
};
  
//регистрация
export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    })
    .then((res) => checkResponse(res))
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

export const increaseViews = async (storyId) => {
    const response = await fetch(`${BASE_URL}/views/${storyId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json',
      },
    });
  
    // Если история не найдена, создаем новую
    if (response.status === 404) {
      const createResponse = await fetch(`${BASE_URL}/views`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({ storyId }) // Создаем новую историю с 0 просмотрами
      });
  
      return checkResponse(createResponse);
    }
  
    return checkResponse(response);
  };

  export const getViews = async (storyId) => {
    const response = await fetch(`${BASE_URL}/views/${storyId}`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
      },
    });
  
    return checkResponse(response);
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

  
  
  
  

  




