import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, LabelName, Submit } from './ContactForm.styled';
import { selectUsers } from 'redux/selectors';
import { addUser } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectUsers);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    if (
      contactsList.find(contact => contact.name === form.elements.name.value)
    ) {
      form.reset();
      return alert(`${form.elements.name.value} is already in contacts`);
    }
    const newUser = {
      name: form.elements.name.value,
      phone: form.elements.number.value,
    };
    dispatch(addUser(newUser));

    form.reset();
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
        />
      </label>
      <label>
        <LabelName> Number</LabelName>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Submit type="submit">Add contact</Submit>
    </Form>
  );
};
