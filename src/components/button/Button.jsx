import { StyledButton } from './button.styles';

const Button = ({
	text,
	action,
	setBeing,
	topic,
	$color,
	$hover,
	$topic,
	$activetopic,
	$height,
	$width
}) => {
	console.log($color, $topic, $activetopic);
	return (
		<StyledButton
			$height={$height}
			$width={$width}
			$color={$color}
			$hover={$hover}
			$activetopic={$activetopic}
			$topic={$topic}
			onClick={() => {
				action(topic), setBeing('beingOne');
			}}
		>
			{text}
		</StyledButton>
	);
};

export default Button;
