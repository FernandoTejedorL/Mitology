import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledStory = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	padding-inline: 1.25rem;

	@media screen and (width>=768px) {
		display: none;
	}
`;

const StyledBeing = styled.h3`
	font-family: ${FONT_FAMILY.cinzel};
	font-weight: ${FONT_WEIGHT.bold};
	font-size: ${FONT_SIZE.l};
`;

const StyledCaption = styled.p`
	color: white;
	font-weight: ${FONT_WEIGHT.regular};
	text-align: center;
	line-height: 1.75rem;
	font-size: ${FONT_SIZE.s};

	@media screen and (width>=768px) {
		width: 316px;
		text-align: left;
	}
`;

const StyledStoryTablet = styled.div`
	display: none;

	@media screen and (width>=768px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1.5rem;
		padding-inline: 1.25rem;
	}

	@media screen and (width>=1024px) {
		display: none;
	}
`;

const StyledStoryDesktop = styled.div`
	display: none;
	@media screen and (width>=1024px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export {
	StyledStory,
	StyledBeing,
	StyledCaption,
	StyledStoryTablet,
	StyledStoryDesktop
};
