import { useDispatch } from 'react-redux';
import { setFilterContacts } from '../../redux/contacts/filtersSlice';
import { Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { ContactList } from '../Contact/ContactList';
import styles from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(setFilterContacts(evt.target.value));
  };

  return (
    <Box className={styles.Container}>
      <label className={styles.Label}>
        Find contact by the name
        <Input
          className={styles.inputsForm}
          type="text"
          name="filter"
          onChange={handlerFilter}
          placeholder="Search Contact"
        />
      </label>
      <ContactList />
    </Box>
  );
}
