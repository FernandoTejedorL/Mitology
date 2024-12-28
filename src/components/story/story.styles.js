import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledStory = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
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
	letter-spacing: 0.125rem;
	line-height: 1.75rem;
`;
export { StyledStory, StyledBeing, StyledCaption };
