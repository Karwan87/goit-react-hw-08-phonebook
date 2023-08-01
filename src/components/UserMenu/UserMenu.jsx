import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box className={styles.Container}>
      <Text className={styles.Text}>Welcome : {user.name}</Text>

      <Button
        className={styles.LogoutButton}
        type="button"
        onClick={() => dispatch(logOut())}
        rightIcon={<ArrowForwardIcon />}
        variant="outline"
      >
        LogOut
      </Button>
    </Box>
  );
};

export default UserMenu;
