import { Link } from 'react-router-dom';
import { StyledMithButtonTxt, StyledMythButton } from './gotomythbutton.styles';

const GoToMythButton = ({ path, logo, name }) => {
	return (
		<Link to={path}>
			<StyledMythButton>
				<img src={logo} alt='roman-logo' />
				<StyledMithButtonTxt>{name}</StyledMithButtonTxt>
			</StyledMythButton>
		</Link>
	);
};

export default GoToMythButton;
