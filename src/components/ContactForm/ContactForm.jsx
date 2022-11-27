import React from 'react';
import { customAlphabet } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addUser } from 'redux/usersSlice';
import { Form, LabelName, Submit } from './ContactForm.styled';
import { getUsers } from 'redux/selectors';

const nanoid = customAlphabet('1234567890abcdef', 10);

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getUsers);

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
      id: nanoid(),
      name: form.elements.name.value,
      phoneNumber: form.elements.number.value,
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
