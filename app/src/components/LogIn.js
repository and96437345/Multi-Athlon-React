import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const LogIn = () => {
  // Состояния для хранения введенных значений и состояния валидации
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  // Обработчик изменения значений в форме
  const handleChange = (e) => {
    const { name, value, type, files, phone } = e.target;

    // Обработка для полей типа file (фотография)
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация формы
    const newErrors = { ...errors };

    // Пример валидации: поле "ник" не должно быть пустым
    if (!formData.username.trim()) {
      newErrors.username = 'Введите имя пользователя';
    } else {
      newErrors.username = '';
    }

    // Другие проверки валидации могут быть добавлены по аналогии

    // Обновление состояния ошибок
    setErrors(newErrors);

    // Если нет ошибок, можно выполнить отправку данных на сервер или другую логику
    if (Object.values(newErrors).every((error) => !error)) {
      // Здесь может быть логика отправки данных
      console.log('Данные отправлены:', formData);
    }
  };

  return (
    <div className="registrationForm">
      
      <h2>Вход</h2>
      <form className="regForm" onSubmit={handleSubmit}>
        {/* Ник */}
        <div className='form__input-field'>
          <label>Имя пользователя</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <div className="error">{errors.username}</div>
        </div>

        {/* Пароль */}
        <div className='form__input-field'>
          <label>Пароль</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error">{errors.password}</div>
        </div>
      
        {/* Кнопка отправки */}
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LogIn;