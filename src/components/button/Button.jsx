import { StyledButton } from './button.styles';

const Button = ({ text, action, topic }) => {
	return <StyledButton onClick={() => action(topic)}>{text}</StyledButton>;
};

export default Button;
