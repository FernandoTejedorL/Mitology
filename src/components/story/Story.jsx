import TabContainer from '../tabContainer/TabContainer';
import {
	StyledBeing,
	StyledBottomDesktop,
	StyledCaption,
	StyledNameAndStory,
	StyledStory,
	StyledStoryDesktop,
	StyledStoryTablet,
	StyledStoryTabletContent
} from './story.styles';

const Story = ({
	picture,
	being,
	setBeing,
	data,
	caption,
	topic,
	$color,
	$hover,
	$activetopic
}) => {
	return (
		<>
			<StyledStory>
				<StyledBeing>{being}</StyledBeing>
				<img src={picture.mobile} alt='being-pic' />
				<img src='/assets/images/common/separator-h.png' alt='' />
				<StyledCaption>{caption}</StyledCaption>
				<TabContainer
					setBeing={setBeing}
					data={data}
					topic={topic}
					being={being}
					$color={$color}
					$hover={$hover}
					$activetopic={$activetopic}
				/>
			</StyledStory>
			<StyledStoryTablet>
				<StyledStoryTabletContent>
					<StyledNameAndStory>
						<StyledBeing>{being}</StyledBeing>
						<StyledCaption>{caption}</StyledCaption>
					</StyledNameAndStory>
					<img src='/assets/images/common/separator-v.png' alt='' />
					<img src={picture.tablet} alt='being-pic' />
				</StyledStoryTabletContent>
				<TabContainer
					setBeing={setBeing}
					data={data}
					topic={topic}
					being={being}
					$color={$color}
					$hover={$hover}
					$activetopic={$activetopic}
				/>
			</StyledStoryTablet>
			<StyledStoryDesktop>
				<img src={picture.desktop} alt='being-pic' />
				<img src='/assets/images/common/separator-h.png' alt='' />
				<StyledBottomDesktop>
					<StyledNameAndStory>
						<StyledBeing>{being}</StyledBeing>
						<StyledCaption>{caption}</StyledCaption>
					</StyledNameAndStory>
					<TabContainer
						setBeing={setBeing}
						data={data}
						topic={topic}
						being={being}
						$color={$color}
						$hover={$hover}
						$activetopic={$activetopic}
					/>
				</StyledBottomDesktop>
			</StyledStoryDesktop>
		</>
	);
};

export default Story;
