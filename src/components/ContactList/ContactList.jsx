import PropTypes from 'prop-types';

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
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDeleteUser: PropTypes.func,
};
