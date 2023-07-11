// import { ContactForm } from './contactForm/ContactForm';
// import { ContactsList } from './contactList/ContactList';
// import { Container } from './App.styled';
// import { Filter } from './filter/Filter';
// import {
//   selectContacts,
//   selectLoading,
//   selectError,
// } from 'redux/selectors/selectors';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contactsSlice';
// import { RegistrationForm } from './auth/RegistrationForm';
// import { LogInForm } from './auth/LogInForm';
import { lazy, useEffect } from 'react';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from './hooks/useAurh';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );

  // **********************************************

  // const dispatch = useDispatch();

  // отримання переліку контактів із state для умови відображення компонента ContactList
  // const contacts = useSelector(selectContacts);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // return (
  //   <Container>
  //     <RegistrationForm />
  //     <LogInForm />
  //     <h1>Phonebook</h1>
  //     <ContactForm />

  //     <h2>Contacts:</h2>
  //     <Filter />
  //     {loading && <p>Loading...</p>}
  //     {error && <p>{error}</p>}
  //     {contacts.length !== 0 && <ContactsList />}
  //   </Container>
  // );
};
