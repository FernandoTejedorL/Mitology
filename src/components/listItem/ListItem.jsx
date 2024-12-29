import { NavLink } from 'react-router-dom';
import { StyledListItem } from './listItem.styles';

const ListItem = ({ name, setShowMenu, $color }) => {
	return (
		<StyledListItem>
			<NavLink
				to={`/mithology/${name.toLowerCase()}`}
				$color={$color}
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
