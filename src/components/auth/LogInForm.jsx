import {
  Title,
  FormWrapper,
  ButtonAdd,
  TitleInput,
  InputField,
} from './RegistrationForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <Title>LogIn form of User</Title>
      <FormWrapper onSubmit={handleSubmit} autoComplete="off">
        <TitleInput>
          email
          <InputField type="email" name="email" />
        </TitleInput>
        <TitleInput>
          Password
          <InputField type="password" name="password" />
        </TitleInput>

        <ButtonAdd type="submit">Log In</ButtonAdd>
      </FormWrapper>
    </div>
  );
};
