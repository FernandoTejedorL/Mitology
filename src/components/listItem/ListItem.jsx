import { NavLink } from 'react-router-dom';
import { StyledListItem } from './listItem.styles';

const ListItem = ({ name, setShowMenu }) => {
	return (
		<StyledListItem>
			<NavLink
				to={`/mithology/${name.toLowerCase()}`}
				onClick={() => {
					setShowMenu(false);
				}}
			>
				{name}
			</NavLink>
		</StyledListItem>
	);
};

export default ListItem;
