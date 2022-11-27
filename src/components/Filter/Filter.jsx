import { LabelName } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const handleInputChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };
  return (
    <label>
      <LabelName>Find contacts by name</LabelName>
      <input
        type="text"
        name="filter"
        onChange={handleInputChange}
        value={filterValue}
      />
    </label>
  );
};
