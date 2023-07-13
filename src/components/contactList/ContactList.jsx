import { useState, useEffect } from 'react';
import { ListOfContact, ContactItem } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { selectVisibleContact, selectLoading } from 'redux/selectors/selectors';
import { UpdateForm } from 'components/updateForm/UpdateForm';
import { fetchContacts } from 'redux/contacts/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState(null);

  const contacts = useSelector(selectVisibleContact);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
    // console.log(data);
  }, [data, dispatch]);

  return (
    <ListOfContact>
      {data && <UpdateForm dataUser={data} setData={setData} />}
      {!data &&
        contacts.map(contact => (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.number}
            {!loading && (
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setData({
                      id: contact.id,
                      name: contact.name,
                      number: contact.number,
                    })
                  }
                >
                  Update
                </button>
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
