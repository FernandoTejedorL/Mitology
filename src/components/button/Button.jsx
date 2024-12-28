import { StyledButton } from './button.styles';

const Button = ({ text, action, topic, $color, $topic, $activetopic }) => {
	return (
		<StyledButton
			$color={$color}
			$activetopic={$activetopic}
			$topic={$topic}
			onClick={() => action(topic)}
		>
			{text}
		</StyledButton>
	);
};

export default Button;
