import { ContactsList } from 'components/contactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLoading,
  selectContacts,
  selectError,
} from 'redux/selectors/selectors';
import { fetchContacts } from 'redux/contacts/contactsSlice';
import { ContactForm } from 'components/contactForm/ContactForm';
import { Filter } from 'components/filter/Filter';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts:</h2>
      <Filter />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contacts.length !== 0 && <ContactsList />}
    </div>
  );
};

export default ContactsPage;
