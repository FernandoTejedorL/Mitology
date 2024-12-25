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
		padding: 46px 70px;
	}
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
	color: ${COLORS.tabs};
	letter-spacing: 1.5px;
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
		gap: 122px;
	}
`;

const StyledParagraphBig = styled.p`
	@media screen and (width>=1024px) {
		font-family: ${FONT_FAMILY.poppins};
		font-size: ${FONT_SIZE.s};
		font-weight: ${FONT_WEIGHT.regular};
		max-width: 587px;
		color: ${COLORS.tabs};
		letter-spacing: 1.5px;
		line-height: 1.75rem;
		text-align: ${({ $textAlign }) => $textAlign};
	}
`;

const StyledButtonsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 154px);
	grid-template-rows: repeat(2, 179px);
	gap: 0.985rem;

	@media screen and (width>=768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 9px;
	}
`;

const StyledLegend = styled.p`
	font-style: italic;
	font-family: ${FONT_FAMILY.playfair};
	font-size: ${FONT_SIZE.l};
	font-weight: 300;
	text-align: center;
	letter-spacing: 2px;
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
		width: 185px;
		height: 63px;
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
