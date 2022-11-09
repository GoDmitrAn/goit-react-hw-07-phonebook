import { ContactForm } from 'components/ContactForm/ContactForm';
import { FormBox, SectionBox } from './App.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [userFilter, setFilter] = useState('');
  const [firstMount, setFirstMount] = useState(true);
  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  useEffect(() => {
    if (firstMount) {
      return;
    }
    addToLocalStorage(contacts);
  }, [contacts, firstMount]);

  const localStorageKey = 'userContacts';
  const formSubmitHandler = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      return alert(`${data.name} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, data]);
    }
  };
  const handleFilterInput = event => {
    const { value } = event.target;
    setFilter(value);
  };
  const filterContacts = () => {
    return contacts.filter(contact => {
      let nameLowerCase = contact.name.toLowerCase();
      return nameLowerCase.includes(userFilter.toLowerCase());
    });
  };
  const deleteUserFromList = userId => {
    setContacts(contacts.filter(item => item.id !== userId));
  };
  const addToLocalStorage = data => {
    try {
      const serializedState = JSON.stringify(data);
      localStorage.setItem(localStorageKey, serializedState);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  };
  const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem(localStorageKey);

      if (serializedState !== null) {
        setContacts(JSON.parse(serializedState));
      }
      setFirstMount(false);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };

  return (
    <SectionBox>
      <h1>Phonebook</h1>

      <FormBox>
        <ContactForm onSubmitForm={formSubmitHandler} />
      </FormBox>
      <h2>Contacts</h2>

      <Filter handleInputChange={handleFilterInput} filterValue={userFilter} />
      <ContactList
        contacts={filterContacts()}
        handleDeleteUser={deleteUserFromList}
      />
    </SectionBox>
  );
};
