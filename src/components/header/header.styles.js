import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.4375rem 1.25rem;
	font-family: ${FONT_FAMILY.cinzel};
	color: ${COLORS.primary};
	background-color: ${COLORS.dark};
	font-weight: ${FONT_WEIGHT.bold};
	font-size: ${FONT_SIZE.l};
	letter-spacing: 0.15rem;
	border-bottom: 0.125rem solid ${COLORS.primary};

	@media screen and (width>=1024px) {
		padding-inline: 4.375rem;
	}
`;
export { StyledHeader };
