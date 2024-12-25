import { Link } from 'react-router-dom';
import {
	StyledApple,
	StyledCopy,
	StyledFooter,
	StyledGoogle,
	StyledLogosContainer
} from './footer.styles';

const Footer = () => {
	return (
		<StyledFooter>
			<StyledLogosContainer>
				<Link>
					<StyledGoogle
						src='/assets/images/common/play-store.png'
						alt='google-play'
					/>
				</Link>
				<Link>
					<StyledApple
						src='/assets/images/common/app-store.png'
						alt='app-store'
					/>
				</Link>
			</StyledLogosContainer>
			<StyledCopy>© 2024 Mythos. All rights reserved.</StyledCopy>
		</StyledFooter>
	);
};

export default Footer;
