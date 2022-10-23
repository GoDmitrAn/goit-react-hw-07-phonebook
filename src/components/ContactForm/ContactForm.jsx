import PropTypes from 'prop-types';
import { customAlphabet } from 'nanoid';

import { Component } from 'react';
import { Form, LabelName, Submit } from './ContactForm.styled';
const nanoid = customAlphabet('1234567890abcdef', 10);

export class ContactForm extends Component {
  state = { name: '', number: '' };
  handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    this.props.onSubmitForm({ id, ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          <LabelName> Name</LabelName>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </label>
        <label>
          <LabelName> Number</LabelName>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleInputChange}
            value={this.state.number}
            required
          />
        </label>
        <Submit type="submit">Add contact</Submit>
      </Form>
    );
  }
}
ContactForm.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  id: PropTypes.string,
};
