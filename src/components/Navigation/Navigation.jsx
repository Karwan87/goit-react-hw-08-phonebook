import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import css from '../Layout/Layout.module.css';
import UserMenu from 'components/UserMenu/UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box background="lightgrey" boxShadow="2xl" height="90px" py={4}>
        <NavLink className={css.link} to="/">
          <Button colorScheme="blue" variant="outline">
            Home
          </Button>
        </NavLink>
        {isLoggedIn ? (
          <NavLink className={css.link} to="/contacts">
            <Button colorScheme="blue" variant="outline">
              Contacts
            </Button>
          </NavLink>
        ) : (
          <>
            <NavLink className={css.link} to="/register">
              <Button colorScheme="red" variant="outline">
                Register
              </Button>
            </NavLink>
            <NavLink className={css.link} to="/login">
              <Button colorScheme="green" variant="outline">
                Log In
              </Button>
            </NavLink>
          </>
        )}
        {}
      </Box>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
