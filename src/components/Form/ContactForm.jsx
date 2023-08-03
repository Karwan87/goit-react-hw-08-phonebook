import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';
import { selectContacts } from '../../redux/contacts/selectors';
import { Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handlerSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const number = form.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.warn(`${name} is alredy in contacts.`);
    }

    dispatch(addContact({ name, number }));

    form.reset();
  }

  return (
    <Box className={styles.ContactBox}>
      <form className={styles.inputsForm} onSubmit={handlerSubmit}>
        <ul>
          <li>
            <p className={styles.Description}>Name</p>

            <Input
              className={styles.TypeText}
              type="text"
              name="name"
              pattern="^[A-Za-z.'\- ]+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Name"
            />
          </li>
          <li>
            <p className={styles.Description}>Contact</p>

            <Input
              className={styles.TypeText}
              type="tel"
              name="number"
              pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Phone number"
            />
          </li>
        </ul>
        <div className={styles.ButtonContainer}>
          <Button className={styles.SubmitButton} type="submit">
            Add contact
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default ContactForm;
