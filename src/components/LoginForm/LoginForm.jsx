import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'api';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields.');
      return;
    }

    setError(null);

    const userData = {
      email: email.trim(),
      password: password.trim(),
    };

    try {
      await dispatch(loginUser(userData));
      navigate('/contacts');
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <form className={styles.InputsForm} onSubmit={handleSubmit}>
      {error && <p className={styles.ErrorMessage}>{error}</p>}
      <input
        className={styles.TypeText}
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className={styles.TypeText}
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className={styles.ButtonContainer}>
        <button className={styles.SubmitButton} type="submit">
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
