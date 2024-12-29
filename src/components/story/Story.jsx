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
				<picture>
					<source media='(min-width: 1023px)' srcSet={picture.desktop} />
					<source media='(min-width: 767px)' srcSet={picture.tablet} />
					<source media='(min-width: 360px)' srcSet={picture.mobile} />
					<img src={picture.mobile} alt='being-pic' />
				</picture>
				<img src='/assets/images/common/separator-h.png' alt='' />
				<StyledCaption>{caption}</StyledCaption>
				<TabContainer
					setBeing={setBeing}
					data={data}
					topic={topic}
					being={being}
					$color={$color}
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
					<picture>
						<source media='(min-width: 1023px)' srcSet={picture.desktop} />
						<source media='(min-width: 767px)' srcSet={picture.tablet} />
						<source media='(min-width: 360px)' srcSet={picture.mobile} />
						<img src={picture.mobile} alt='being-pic' />
					</picture>
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
				<picture>
					<source media='(min-width: 1023px)' srcSet={picture.desktop} />
					<source media='(min-width: 767px)' srcSet={picture.tablet} />
					<source media='(min-width: 360px)' srcSet={picture.mobile} />
					<img src={picture.mobile} alt='being-pic' />
				</picture>
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
						$activetopic={$activetopic}
					/>
				</StyledBottomDesktop>
			</StyledStoryDesktop>
		</>
	);
};

export default Story;
