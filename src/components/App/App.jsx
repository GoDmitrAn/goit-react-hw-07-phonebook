import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactTitle } from 'components/ContactTitle/ContactTitle';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Component } from 'react';
import { FormBox, SectionBox } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <SectionBox>
        <SectionTitle title="Phonebook" />
        <FormBox>
          <ContactForm />
        </FormBox>
        React homework template
        <ContactTitle title="Contacts" />
      </SectionBox>
    );
  }
}
