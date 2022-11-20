import { customAlphabet } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactTitle } from 'components/ContactTitle/ContactTitle';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Component } from 'react';
import { FormBox, SectionBox } from './App.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
const nanoid = customAlphabet('1234567890abcdef', 10);
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  contactsList = this.state.contacts;
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    if (name === 'filter') {
      this.setState({ contacts: this.filterContacts(value) });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const array = [...this.state.contacts];
    array.push({ name: this.state.name, id: id, number: this.state.number });
    this.setState({ contacts: array });
    this.contactsList = this.state.contacts;
    this.reset();
  };
  filterContacts = value => {
    let newList = this.contactsList.filter(contact => {
      let nameLowerCase = contact.name.toLowerCase();
      return nameLowerCase.includes(value.toLowerCase());
    });
    return newList;
  };
  reset = () => {
    this.setState({ name: '', number: '', filter: '' });
  };
  render() {
    const contacts = this.state.contacts;
    return (
      <SectionBox>
        <SectionTitle title="Phonebook" />
        <FormBox>
          <ContactForm
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            nameValue={this.state.name}
            numberValue={this.state.number}
          />
        </FormBox>
        React homework template
        <ContactTitle title="Contacts" />
        <Filter
          handleInputChange={this.handleInputChange}
          filterValue={this.state.filter}
        />
        <ContactList contacts={contacts} />
      </SectionBox>
    );
  }
}
