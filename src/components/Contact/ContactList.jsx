import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectContacts,
  selectContactsFilter,
} from '../../redux/contacts/selectors';
import { Box } from '@chakra-ui/react';
import { Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdSettingsCell } from 'react-icons/md';
import styles from './ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectContactsFilter).toLowerCase();

  const dispatch = useDispatch();

  const handleDelete = contact => {
    dispatch(deleteContact(contact.id));
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <Box className={styles.Container}>
      <List className={styles.List}>
        {visibilityContacts.map(contact => (
          <ListItem className={styles.ListItem} key={contact.id}>
            <ListIcon className={styles.ListIcon} as={MdSettingsCell} />
            {contact.name}: <span>{contact.number}</span>
            <Button
              className={styles.DeleteButton}
              onClick={() => handleDelete(contact)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
