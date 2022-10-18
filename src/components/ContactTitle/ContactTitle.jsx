import PropTypes from 'prop-types';
import { ContTitle } from './ContactTitle.styled';

export const ContactTitle = ({ title }) => {
  return <ContTitle>{title}</ContTitle>;
};
ContactTitle.propTypes = {
  title: PropTypes.string,
};
