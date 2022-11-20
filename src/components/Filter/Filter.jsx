import { LabelName } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ filterValue, handleInputChange }) => {
  return (
    <label>
      <LabelName>Find contactsby name</LabelName>
      <input
        type="text"
        name="filter"
        onChange={handleInputChange}
        value={filterValue}
      />
    </label>
  );
};
