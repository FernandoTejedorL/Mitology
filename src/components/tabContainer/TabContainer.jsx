import Button from '../button/Button';
import { StyledTabContainer } from './tabContainer.styles';

const TabContainer = ({
	setBeing,
	data,
	topic,
	$color,
	$hover,
	$activetopic
}) => {
	return (
		<StyledTabContainer>
			<Button
				action={setBeing}
				topic={'beingOne'}
				text={data[topic].beingOne.tab}
				$color={$color}
				$hover={$hover}
				$activetopic={$activetopic}
				$topic={'beingOne'}
				$height={'75px'}
				$width={'300px'}
			/>
			<Button
				action={setBeing}
				topic={'beingTwo'}
				text={data[topic].beingTwo.tab}
				$color={$color}
				$hover={$hover}
				$activetopic={$activetopic}
				$topic={'beingTwo'}
				$height={'75px'}
				$width={'300px'}
			/>
			<Button
				action={setBeing}
				topic={'beingThree'}
				text={data[topic].beingThree.tab}
				$color={$color}
				$hover={$hover}
				$activetopic={$activetopic}
				$topic={'beingThree'}
				$height={'75px'}
				$width={'300px'}
			/>
		</StyledTabContainer>
	);
};

export default TabContainer;
