import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

import { ListBox, ContactListItem, DelBtn, Span } from './ContactList.styled';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectFilteredContacts);

  return (
    <ListBox>
      {contactsList.map(({ id, name, phone }) => {
        return (
          <ContactListItem key={id}>
            <Span>
              {name} : {phone}
            </Span>
            <DelBtn type="button" onClick={() => dispatch(deleteUser(id))}>
              Delete
            </DelBtn>
          </ContactListItem>
        );
      })}
    </ListBox>
  );
};
