import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactTitle } from 'components/ContactTitle/ContactTitle';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Component } from 'react';
import { FormBox, SectionBox } from './App.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  contactsList = this.state.contacts;
  setContactList(data) {
    this.contactsList = data;
  }
  formSubmitHandler = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      return alert(`${data.name} is already in contacts`);
    } else {
      this.setState(
        prevState => ({ contacts: [...prevState.contacts, data] }),
        () => {
          this.setContactList(this.state.contacts);
        }
      );
    }
  };
  handleFilterInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ contacts: this.filterContacts(value) });
  };
  filterContacts = value => {
    return this.contactsList.filter(contact => {
      let nameLowerCase = contact.name.toLowerCase();
      return nameLowerCase.includes(value.toLowerCase());
    });
  };
  deleteUserFromList = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== userId),
    }));
  };
  render() {
    const contacts = this.state.contacts;

    return (
      <SectionBox>
        <SectionTitle title="Phonebook" />
        <FormBox>
          <ContactForm onSubmitForm={this.formSubmitHandler} />
        </FormBox>

        <ContactTitle title="Contacts" />
        <Filter
          handleInputChange={this.handleFilterInput}
          filterValue={this.state.filter}
        />
        <ContactList
          contacts={contacts}
          handleDeleteUser={this.deleteUserFromList}
        />
      </SectionBox>
    );
  }
}
