import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Filter } from '../../components/Filter/Filter';
import ContactForm from 'components/Form/ContactForm';
import styles from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box className={styles.Container}>
      <ContactForm />

      <Filter />
    </Box>
  );
};

export default Contacts;
