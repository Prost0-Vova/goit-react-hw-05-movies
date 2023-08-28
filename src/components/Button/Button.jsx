import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ text }) => {
  return <Btn type="button">{text}</Btn>;
};
export default Button;

