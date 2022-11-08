import PropTypes from 'prop-types';
import { customAlphabet } from 'nanoid';

// import { Component } from 'react';
import { Form, LabelName, Submit } from './ContactForm.styled';
import { useState } from 'react';
const nanoid = customAlphabet('1234567890abcdef', 10);

export const ContactForm = ({ onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // state = { name: '', number: '' };
  const handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    onSubmitForm({ id, name, number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
    // this.setState({ name: '', number: '' });
  };
  const handleInputChange = event => {
    const { name, value } = event.target;
    // this.setState({ [name]: value });
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <LabelName> Name</LabelName>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          value={name}
        />
      </label>
      <label>
        <LabelName> Number</LabelName>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleInputChange}
          value={number}
          required
        />
      </label>
      <Submit type="submit">Add contact</Submit>
    </Form>
  );
};
ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
