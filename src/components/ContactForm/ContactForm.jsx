import { Form, LabelName, Submit } from './ContactForm.styled';

export const ContactForm = ({
  handleSubmit,
  handleInputChange,
  nameValue,
  numberValue,
}) => {
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
          value={nameValue}
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
          value={numberValue}
          required
        />
      </label>
      <Submit type="submit">Add contact</Submit>
    </Form>
  );
};
