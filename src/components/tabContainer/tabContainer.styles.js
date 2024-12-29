import styled from 'styled-components';

const StyledTabContainer = styled.div`
	display: flex;
	gap: 1.0938rem;

	@media screen and (width>=1024px) {
		flex-direction: column;
	}
`;

export { StyledTabContainer };
