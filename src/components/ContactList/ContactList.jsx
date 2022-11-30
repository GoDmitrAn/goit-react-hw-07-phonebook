import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

import {
  ListBox,
  ContactListItem,
  DelBtn,
  Span,
  Phone,
} from './ContactList.styled';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectFilteredContacts);

  return (
    <ListBox>
      {contactsList.map(({ id, name, phone }) => {
        return (
          <ContactListItem key={id}>
            <Span>
              {name} : <Phone> {phone}</Phone>
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
