import PropTypes from 'prop-types';
import { ContainerButton } from './style';

export default function Button({ children }) {
	return <ContainerButton>{children}</ContainerButton>;
}

Button.propTypes = {
	children: PropTypes.string,
};
