import { useState } from 'react';
import {
  Title,
  FormWrapper,
  ButtonAdd,
  TitleInput,
  InputField,
} from './RegistrationForm.styled';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log({ name, email, password });
  //   reset();
  // };

  // const reset = () => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <div>
      <Title>Registration form of User</Title>
      <FormWrapper>
        <TitleInput>
          Name
          <InputField
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </TitleInput>
        <TitleInput>
          Email
          <InputField name="email" value={email} onChange={handleChange} />
        </TitleInput>
        <TitleInput>
          Password
          <InputField
            name="password"
            value={password}
            onChange={handleChange}
          />
        </TitleInput>

        <ButtonAdd type="submit">Add User</ButtonAdd>
      </FormWrapper>
    </div>
  );
};
