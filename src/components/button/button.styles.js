import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledButton = styled.button`
	height: 30px;
	width: 110px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ $color, $topic, $activetopic }) =>
		$topic === $activetopic ? $color : COLORS.tabs};
	border: 1px solid
		${({ $color, $topic, $activetopic }) =>
			$topic === $activetopic ? $color : COLORS.tabs};
	background-color: transparent;
	font-family: ${FONT_FAMILY.playfair};
	font-weight: ${FONT_WEIGHT.bold};
	font-size: ${FONT_SIZE.s};
	letter-spacing: 1px;

	@media screen and (width>=1024px) {
		width: ${({ $width }) => ($width ? $width : '110px')};
		height: ${({ $height }) => ($height ? $height : '30px')};
		font-size: ${FONT_SIZE.l};
	}

	@media (hover: hover) {
		&:hover {
			background-color: ${({ $hover }) => ($hover ? $hover : 'transparent')};
			color: ${COLORS.primary};
			border: 1px solid ${COLORS.primary};
		}
	}
`;

export { StyledButton };
