import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { logIn } from 'redux/auth/operations';
import { Input } from '@chakra-ui/react';
import styles from './Form.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);

  const handleLogin = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Box className={styles.BoxContainer}>
      {errorLogin && <div>Error login</div>}
      <h1>Login</h1>
      <form className={styles.RegisterContainer} onSubmit={handleLogin}>
        <label className={styles.Label}>
          Email
          <Input
            type="text"
            name="email"
            placeholder="Email"
            outline="1px solid green"
          />
        </label>
        <label className={styles.Label}>
          Password
          <Input
            type="password"
            name="password"
            placeholder="Password"
            outline="1px solid green"
          />
        </label>

        <div className={styles.ButtonLoginContainer}>
          <button className={styles.ButtonLoginSend} type="submit">
            <Box className={styles.ButtonDescr}>Send</Box>
          </button>
        </div>
      </form>
    </Box>
  );
};
