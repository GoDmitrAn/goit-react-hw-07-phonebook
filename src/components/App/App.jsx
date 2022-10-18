import { customAlphabet } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactTitle } from 'components/ContactTitle/ContactTitle';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Component } from 'react';
import { FormBox, SectionBox } from './App.styled';
const nanoid = customAlphabet('1234567890abcdef', 10);
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleInputChange = event => {
    this.setState({ name: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const array = [...this.state.contacts];
    array.push({ name: this.state.name, id: id });
    this.setState({ contacts: array });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '' });
  };
  render() {
    return (
      <SectionBox>
        <SectionTitle title="Phonebook" />
        <FormBox>
          <ContactForm
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            nameValue={this.state.name}
          />
        </FormBox>
        React homework template
        <ContactTitle title="Contacts" />
      </SectionBox>
    );
  }
}
