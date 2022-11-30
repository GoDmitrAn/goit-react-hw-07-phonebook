export const selectUsers = state => state.users.items;
export const selectFilter = state => state.filter.value;
export const selectError = state => state.users.error;
export const selectIsLoading = state => state.users.isLoading;
export const selectFilteredContacts = state => {
  const contactsList = selectUsers(state);
  const filterValue = selectFilter(state);
  return contactsList.filter(contact => {
    let nameLowerCase = contact.name.toLowerCase();
    return nameLowerCase.includes(filterValue.toLowerCase());
  });
};
