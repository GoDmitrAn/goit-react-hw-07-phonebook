import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890abcdef', 10);
export const addUser = user => {
  return {
    type: 'users/addUser',
    payload: {
      id: nanoid(),
      name: user.name,
      phoneNumber: user.number,
    },
  };
};
export const deleteUser = userId => {
  return {
    type: 'users/deleteUser',
    payload: userId,
  };
};
export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};
