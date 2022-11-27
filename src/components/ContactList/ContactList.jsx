import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getUsers } from 'redux/selectors';
import { deleteUser } from 'redux/usersSlice';
import { ListBox, ContactListItem, DelBtn, Span } from './ContactList.styled';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getUsers);
  const filterValue = useSelector(getFilter);
  const filterContacts = () => {
    return contactsList.filter(contact => {
      let nameLowerCase = contact.name.toLowerCase();
      return nameLowerCase.includes(filterValue.toLowerCase());
    });
  };

  return (
    <ListBox>
      {filterContacts().map(({ id, name, phoneNumber }) => {
        return (
          <ContactListItem key={id}>
            <Span>
              {name} : {phoneNumber}
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
