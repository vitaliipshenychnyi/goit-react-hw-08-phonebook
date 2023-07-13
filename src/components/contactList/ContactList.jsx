import { ListOfContact, ContactItem } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { selectVisibleContact, selectLoading } from 'redux/selectors/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContact);
  const loading = useSelector(selectLoading);

  return (
    <ListOfContact>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          {!loading && (
            <div>
              <button
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </div>
          )}
        </ContactItem>
      ))}
    </ListOfContact>
  );
};
