import { ListBox, ContactListItem, DelBtn, Span } from './ContactList.styled';
export const ContactList = ({ contacts, handleDeleteUser }) => {
  return (
    <ListBox>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            <Span>
              {name} : {number}
            </Span>
            <DelBtn type="button" onClick={() => handleDeleteUser(id)}>
              Delete
            </DelBtn>
          </ContactListItem>
        );
      })}
    </ListBox>
  );
};
