import { StyledBeing, StyledCaption, StyledStory } from './story.styles';

const Story = ({ picture, being, caption }) => {
	return (
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
		</StyledStory>
	);
};

export default Story;
