import { useState } from 'react';
import 'react-native-get-random-values';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';
import {
  FormWrapper,
  ButtonAdd,
  TitleInput,
  InputField,
} from './ContactForm.styled';
import { selectContacts } from 'redux/selectors/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // функція отримання даних з полів введення
  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const contacts = useSelector(selectContacts);

  // функція відправки даних до state
  const handleSubmit = event => {
    event.preventDefault();
    const doubleContact =
      contacts.findIndex(contact => contact.name === name) === -1;

    if (doubleContact) {
      dispatch(addContact({ name, number }));
    } else {
      alert(`${name} is already in contacts.`);
    }
    reset();
  };

  // функція очищення значень форми
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TitleInput>
        Name
        <InputField
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
      </TitleInput>

      <TitleInput>
        Number
        <InputField
          type="tel"
          name="number"
          value={number}
          required
          onChange={handleChange}
        />
      </TitleInput>
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </FormWrapper>
  );
};
