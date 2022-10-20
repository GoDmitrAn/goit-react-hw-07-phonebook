import { ListBox, ContactListItem, DelBtn } from './ContactList.styled';
export const ContactList = ({ contacts }) => {
  return (
    <ListBox>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            {name} : {number} <DelBtn type="button">Delete</DelBtn>
          </ContactListItem>
        );
      })}
    </ListBox>
  );
};
