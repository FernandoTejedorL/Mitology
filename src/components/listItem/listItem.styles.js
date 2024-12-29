import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledListItem = styled.li`
	padding: 28px 20px;
	border-bottom: 2px solid ${COLORS.primary};

	@media screen and (width>=768px) {
		padding: 0;
		border-bottom: none;
	}
`;

export { StyledListItem };
