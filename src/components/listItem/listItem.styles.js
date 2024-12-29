import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { NavLink } from 'react-router-dom';

const StyledListItem = styled.li`
	padding: 1.75rem 1.25rem;
	border-bottom: 0.125rem solid ${COLORS.primary};

	@media screen and (width>=768px) {
		padding: 0;
		border-bottom: none;
	}
`;

const StyledNavLink = styled(NavLink)`
	color: ${COLORS.primary};
	&.active {
		color: ${({ $color }) => ($color ? $color : COLORS.primary)};
	}
`;

export { StyledListItem, StyledNavLink };
