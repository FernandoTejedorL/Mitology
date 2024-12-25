import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import { StyledHeader } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<Link to={'/'}>
				<h1>MYTHOS</h1>
			</Link>
			<Menu />
		</StyledHeader>
	);
};
export default Header;
