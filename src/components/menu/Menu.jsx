import { useState } from 'react';
import { MITHOLOGIES_INFO } from '../../constants/mithologies-info';
import ListItem from '../listItem/ListItem';
import {
	StyledClose,
	StyledHamburger,
	StyledNav,
	StyledUl
} from './menu.styles';

const Menu = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<>
			<StyledNav $showMenu={showMenu}>
				<StyledUl>
					{MITHOLOGIES_INFO.map(mithology => (
						<ListItem
							key={mithology.id}
							{...mithology}
							name={mithology.name}
							path={mithology.path}
							$color={mithology.color}
							setShowMenu={setShowMenu}
						/>
					))}
				</StyledUl>
			</StyledNav>
			<StyledHamburger
				onClick={() => setShowMenu(true)}
				$showMenu={showMenu}
				src='/assets/images/common/hamburger.png'
				alt='hamburger'
			/>

			<StyledClose
				onClick={() => setShowMenu(false)}
				$showMenu={showMenu}
				src='/assets/images/common/close.png'
				alt='close'
			/>
		</>
	);
};
export default Menu;
