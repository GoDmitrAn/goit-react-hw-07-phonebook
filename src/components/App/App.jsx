import { customAlphabet } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactTitle } from 'components/ContactTitle/ContactTitle';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Component } from 'react';
import { FormBox, SectionBox } from './App.styled';
import { ContactList } from 'components/ContactList/ContactList';
const nanoid = customAlphabet('1234567890abcdef', 10);
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const array = [...this.state.contacts];
    array.push({ name: this.state.name, id: id, number: this.state.number });
    this.setState({ contacts: array });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
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
        <ContactList contacts={contacts} />
      </SectionBox>
    );
  }
}
