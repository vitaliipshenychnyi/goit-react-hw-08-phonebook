import {
  Title,
  FormWrapper,
  ButtonAdd,
  TitleInput,
  InputField,
} from './RegistrationForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <Title>Registration form of User</Title>
      <FormWrapper onSubmit={handleSubmit} autoComplete="off">
        <TitleInput>
          Name
          <InputField type="text" name="name" />
        </TitleInput>
        <TitleInput>
          Email
          <InputField type="email" name="email" />
        </TitleInput>
        <TitleInput>
          Password
          <InputField type="password" name="password" />
        </TitleInput>

        <ButtonAdd type="submit">Register</ButtonAdd>
      </FormWrapper>
    </div>
  );
};
