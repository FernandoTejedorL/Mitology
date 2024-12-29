import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledMythButton = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;
	height: 11.1875rem;
	width: 9.625rem;
	border-radius: 0.5rem;
	border: 0.0625rem solid ${COLORS.primary};
	background-color: #303437;
	color: ${COLORS.primary};
	padding: 1rem;

	@media screen and (width>=768px) {
		height: 10.9375rem;
		width: 10.9375rem;
	}
`;

const StyledMithButtonTxt = styled.span`
	font-family: ${FONT_FAMILY.playfair};
	font-weight: ${FONT_WEIGHT.bold};
	font-size: ${FONT_SIZE.m};
	letter-spacing: 0.125rem;
	padding: 0.2813rem 1.0625rem;
	border-radius: 0.5rem;
	border: 0.0625rem solid ${COLORS.primary};
`;

export { StyledMythButton, StyledMithButtonTxt };
