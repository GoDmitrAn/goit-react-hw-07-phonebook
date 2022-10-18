import PropTypes from 'prop-types';
import { SectTitle } from './SectionTitle.styled';

export const SectionTitle = ({ title }) => {
  return <SectTitle>{title}</SectTitle>;
};
SectionTitle.propTypes = {
  title: PropTypes.string,
};
