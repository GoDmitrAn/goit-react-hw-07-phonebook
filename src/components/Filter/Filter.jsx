import PropTypes from 'prop-types';
import { LabelName } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ filterValue, handleInputChange }) => {
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
Filter.propTypes = {
  filterValue: PropTypes.string,
  handleInputChange: PropTypes.func,
};
