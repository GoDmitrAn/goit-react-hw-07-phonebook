const usersInitialState = [
  { id: 0, name: 'Teili', phoneNumber: '+3556845561' },
  { id: 1, name: 'Gofor', phoneNumber: '+1225545662' },
];
export const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case 'users/addUser':
      break;
    case 'users/deleteUser':
      break;
    default:
      return state;
  }
};
const filterInitialState = {
  filter: '',
};
export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      break;

    default:
      return state;
  }
};
