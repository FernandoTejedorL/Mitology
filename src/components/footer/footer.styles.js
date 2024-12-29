import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE } from '../../styles/fonts';

const StyledFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2.125rem 2.625rem;
	background-color: ${COLORS.darken};
	gap: 0.8281rem;

	@media screen and (width>=768px) {
		flex-direction: row-reverse;
		justify-content: space-between;
	}
`;

const StyledLogosContainer = styled.div`
	display: flex;
	gap: 6.75rem;
	align-items: center;

	@media screen and (width>=768px) {
		gap: 1.5rem;
	}
`;

const StyledGoogle = styled.img`
	height: 1.875rem;
	width: 6.1875rem;
`;

const StyledApple = styled.img`
	height: 1.875rem;
	width: 5.625rem;
`;

const StyledCopy = styled.span`
	font-family: ${FONT_FAMILY.playfair};
	font-style: italic;
	font-size: ${FONT_SIZE.xs};
	color: ${COLORS.primary};
	letter-spacing: 0.125rem;

	@media screen and (width>=768px) {
		font-size: ${FONT_SIZE.s};
	}
`;

export {
	StyledFooter,
	StyledLogosContainer,
	StyledGoogle,
	StyledApple,
	StyledCopy
};
