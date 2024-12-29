import { StyledListItem, StyledNavLink } from './listItem.styles';

const ListItem = ({ name, setShowMenu, $color, path }) => {
	return (
		<StyledListItem>
			<StyledNavLink
				to={path}
				$color={$color}
				onClick={() => {
					setShowMenu(false);
				}}
			>
				{name}
			</StyledNavLink>
		</StyledListItem>
	);
};

export default ListItem;
