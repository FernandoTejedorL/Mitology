import {
	StyledBeing,
	StyledCaption,
	StyledStory,
	StyledStoryDesktop,
	StyledStoryTablet
} from './story.styles';

const Story = ({ picture, being, caption }) => {
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
			</StyledStory>
			<StyledStoryTablet>
				<div>
					<StyledBeing>{being}</StyledBeing>
					<StyledCaption>{caption}</StyledCaption>
				</div>
				<img src='/assets/images/common/separator-v.png' alt='' />
				<picture>
					<source media='(min-width: 1023px)' srcSet={picture.desktop} />
					<source media='(min-width: 767px)' srcSet={picture.tablet} />
					<source media='(min-width: 360px)' srcSet={picture.mobile} />
					<img src={picture.mobile} alt='being-pic' />
				</picture>
			</StyledStoryTablet>
			<StyledStoryDesktop>
				<picture>
					<source media='(min-width: 1023px)' srcSet={picture.desktop} />
					<source media='(min-width: 767px)' srcSet={picture.tablet} />
					<source media='(min-width: 360px)' srcSet={picture.mobile} />
					<img src={picture.mobile} alt='being-pic' />
				</picture>
				<img src='/assets/images/common/separator-h.png' alt='' />
				<div>
					<StyledBeing>{being}</StyledBeing>
					<StyledCaption>{caption}</StyledCaption>
				</div>
			</StyledStoryDesktop>
		</>
	);
};

export default Story;
