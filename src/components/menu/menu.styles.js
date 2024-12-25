import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_SIZE } from '../../styles/fonts';

const StyledNav = styled.nav`
	position: fixed;
	top: 103px;
	left: 0;
	background-color: ${COLORS.darken};
	width: 100vw;
	font-size: ${FONT_SIZE.m};
	translate: ${({ $showMenu }) => ($showMenu ? '0' : '+100%')};
	transition: translate 0.2s;

	@media screen and (width>=768px) {
		position: static;
		translate: 0;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		background-color: transparent;
	}
`;

const StyledUl = styled.ul`
	@media screen and (width>=768px) {
		display: flex;
		gap: 1rem;
	}
`;

const StyledHamburger = styled.img`
	display: ${({ $showMenu }) => ($showMenu ? 'none' : 'block')};

	@media screen and (width>=768px) {
		display: none;
	}
`;

const StyledClose = styled.img`
	display: ${({ $showMenu }) => ($showMenu ? 'block' : 'none')};

	@media screen and (width>=768px) {
		display: none;
	}
`;

export { StyledNav, StyledHamburger, StyledClose, StyledUl };
