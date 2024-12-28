import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../styles/fonts';

const StyledMithology = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${COLORS.dark};
	color: ${COLORS.primary};
`;

const StyledBannerMith = styled.img`
	width: 100vw;
`;

const StyledMythBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.75rem 1.25rem;
	gap: 2rem;
`;

const StyledMythKind = styled.h2`
	font-family: ${FONT_FAMILY.cinzel};
	font-weight: ${FONT_WEIGHT.black};
	font-size: ${FONT_SIZE.xl};
	letter-spacing: 0.3125rem;
	text-align: center;
`;

const StyledTabContainer = styled.div`
	display: flex;
	gap: 1.0938rem;
`;

export {
	StyledMithology,
	StyledBannerMith,
	StyledMythBody,
	StyledMythKind,
	StyledTabContainer
};
