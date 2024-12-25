import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledHomeMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	color: ${COLORS.primary};
	background-color: ${COLORS.darken};
`;

const StyledBanner = styled.img`
	width: 100vw;
`;

const StyledMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	padding-inline: 1.25rem;
`;

const StyledTitle = styled.h2`
	font-family: ${FONT_FAMILY.cinzel};
	font-weight: ${FONT_WEIGHT.black};
	font-size: ${FONT_SIZE.xl};
	letter-spacing: 2px;
	text-align: center;
`;

const StyledParagraph = styled.p`
	font-family: ${FONT_FAMILY.poppins};
	font-size: ${FONT_SIZE.xs};
	font-weight: ${FONT_WEIGHT.regular};
	letter-spacing: 1.5px;
	text-align: center;
`;

const StyledButtonsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 154px);
	grid-template-rows: repeat(2, 179px);
	gap: 0.985rem;
`;

const StyledMythButton = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	height: 11.1875rem;
	width: 9.625rem;
	border-radius: 0.5rem;
	border: 0.0625rem solid ${COLORS.primary};
	background-color: ${COLORS.dark};
	color: ${COLORS.primary};
	padding: 1rem;
`;

const StyledLegend = styled.p`
	font-style: italic;
	font-family: ${FONT_FAMILY.playfair};
	font-size: ${FONT_SIZE.l};
	font-weight: 300;
	text-align: center;
	letter-spacing: 2px;
`;

export {
	StyledHomeMain,
	StyledBanner,
	StyledMainContainer,
	StyledTitle,
	StyledParagraph,
	StyledButtonsGrid,
	StyledMythButton,
	StyledLegend
};
