import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { FormBox, SectionBox } from './App.styled';

export const App = () => {
  return (
    <SectionBox>
      <h1>Phonebook</h1>
      <FormBox>
        <ContactForm />
      </FormBox>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </SectionBox>
  );
};
