import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import styles from './Form.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box className={styles.BoxContainer}>
      <h1>Register</h1>
      <form className={styles.RegisterContainer} onSubmit={handleSubmit}>
        <label className={styles.Label}>
          First name <i className={styles.Description}>(5 - 12 chars)</i>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            pattern="\w{5,12}"
            outline="1px solid orange"
          />
        </label>

        <label className={styles.Label}>
          Email
          <Input
            type="email"
            name="email"
            placeholder="Email"
            outline="1px solid orange"
          />
        </label>
        <label className={styles.Label}>
          Password <i className={styles.Description}>(5 - 12 chars)</i>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            outline="1px solid orange"
          />
        </label>
        <div className={styles.ButtonContainer}>
          <button className={styles.ButtonSend} type="submit">
            <Box className={styles.ButtonDescr} as="button">
              Send
            </Box>
          </button>
        </div>
      </form>
    </Box>
  );
};
