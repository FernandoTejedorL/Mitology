import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledHomeMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	color: ${COLORS.primary};
	background-color: ${COLORS.dark};
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

	@media screen and (width>=1024px) {
		padding: 2.875rem 4.375rem;
	}
`;

const StyledTitle = styled.h2`
	font-family: ${FONT_FAMILY.cinzel};
	font-weight: ${FONT_WEIGHT.black};
	font-size: ${FONT_SIZE.xl};
	letter-spacing: 0.125rem;
	text-align: center;
`;

const StyledParagraph = styled.p`
	font-family: ${FONT_FAMILY.poppins};
	font-size: ${FONT_SIZE.xs};
	font-weight: ${FONT_WEIGHT.regular};
	color: ${COLORS.tabs};
	letter-spacing: 0.0938rem;
	line-height: 1.75rem;
	text-align: center;

	@media screen and (width>=1024px) {
		display: none;
	}
`;

const StyledParagraphBigContainer = styled.div`
	display: none;
	@media screen and (width>=1024px) {
		display: flex;
		justify-content: space-between;
		gap: 7.625rem;
	}
`;

const StyledParagraphBig = styled.p`
	@media screen and (width>=1024px) {
		font-family: ${FONT_FAMILY.poppins};
		font-size: ${FONT_SIZE.s};
		font-weight: ${FONT_WEIGHT.regular};
		max-width: 587px;
		color: ${COLORS.tabs};
		letter-spacing: 0.0938rem;
		line-height: 28px;
		text-align: ${({ $textAlign }) => $textAlign};
	}
`;

const StyledButtonsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 9.625rem);
	grid-template-rows: repeat(2, 11.1875rem);
	gap: 0.985rem;

	@media screen and (width>=768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5625rem;
	}
`;

const StyledLegend = styled.p`
	font-style: italic;
	font-family: ${FONT_FAMILY.playfair};
	font-size: ${FONT_SIZE.l};
	font-weight: 300;
	text-align: center;
	letter-spacing: 0.125rem;
	color: white;
`;

const StyledToHideInBig = styled.img`
	@media screen and (width>=1024px) {
		display: none;
	}
`;

const StyledToHideInSmall = styled.img`
	display: none;
	@media screen and (width>=1024px) {
		display: block;
		width: 11.5625rem;
		height: 3.9375rem;
	}
`;

export {
	StyledHomeMain,
	StyledBanner,
	StyledMainContainer,
	StyledTitle,
	StyledParagraph,
	StyledParagraphBigContainer,
	StyledParagraphBig,
	StyledButtonsGrid,
	StyledLegend,
	StyledToHideInBig,
	StyledToHideInSmall
};
