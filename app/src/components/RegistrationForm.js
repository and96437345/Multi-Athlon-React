import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const RegistrationForm = () => {
  // Состояния для хранения введенных значений и состояния валидации
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    phone: '',
    email: '',
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
      
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
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

        {/* Номер телефона */}
        <div className='form__input-field'>
          <label>Телефон</label>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="error">{errors.email}</div>
        </div>

        {/* Номер телефона */}
        {/* <div className='form__input-field'>
          <label>Телефон</label>
          <PhoneInput
            international
            defaultcountry="RU"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="error">{errors.phone}</div>
        </div> */}

        {/* <PhoneInput
        international
  defaultCountry="RU"
  type="phone"
            name="phone"
  value={formData.phone}
      onChange={handleChange}/> */}
        

        {/* Электронный адрес */}
        <div className='form__input-field'>
          <label>Электронный адрес</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error">{errors.email}</div>
        </div>

        {/* Кнопка отправки */}
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationForm;