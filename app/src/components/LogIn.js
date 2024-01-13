import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'


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
    <div className="container">
      <div className="registrationForm">
      
      <h2>Вход</h2>
      <form className="regForm" onSubmit={handleSubmit}>
        {/* Ник */}
        <a href='/' className="regForm-exit">
          <svg id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/></svg>
        </a>
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
        <button type="submit">
          <Link to="/profile" className='resultsPage-link'>Войти</Link>
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default LogIn;