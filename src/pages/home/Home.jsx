import { Link } from 'react-router-dom';
import {
	StyledBanner,
	StyledButtonsGrid,
	StyledHomeMain,
	StyledLegend,
	StyledMainContainer,
	StyledMythButton,
	StyledParagraph,
	StyledTitle
} from './home.styles';

const Home = () => {
	return (
		<StyledHomeMain>
			<picture>
				<source
					media='(min-width: 1023px)'
					srcSet='/assets/images/home/banner-desktop.jpg'
				/>
				<source
					media='(min-width: 767px )'
					srcSet='/assets/images/home/banner-tablet.jpg'
				/>
				<source
					media='(min-width: 360px)'
					srcSet='/assets/images/home/banner-mobile.jpg'
				/>
				<StyledBanner
					src='/assets/images/home/banner-mobile.jpg'
					alt='banner'
				/>
			</picture>
			<StyledMainContainer>
				<StyledTitle>DISCOVER MYTHOLOGIES</StyledTitle>
				<StyledParagraph>
					Dive into the fascinating stories and timeless legends of ancient
					cultures. From the epic tales of Greek gods and Norse warriors to the
					mystical folklore of Egypt and the Rome, explore the myths that have
					inspired humanity for centuries. Uncover the meaning behind legendary
					creatures, heroic quests, and gods as we journey through the diverse
					worlds of mythology.
				</StyledParagraph>
				<img src='/assets/images/common/separator-h.png' alt='' />
				<StyledButtonsGrid>
					<Link>
						<StyledMythButton>
							<img src='/assets/images/home/roman-logo.png' alt='roman-logo' />
							<span>ROMAN</span>
						</StyledMythButton>
					</Link>
					<Link>
						<StyledMythButton>
							<img src='/assets/images/home/greek-logo.png' alt='greek-logo' />
							<span>GREEK</span>
						</StyledMythButton>
					</Link>
					<Link>
						<StyledMythButton>
							<img
								src='/assets/images/home/egyptian-logo.png'
								alt='egyptian-logo'
							/>
							<span>EGYPTIAN</span>
						</StyledMythButton>
					</Link>
					<Link>
						<StyledMythButton>
							<img
								src='/assets/images/home/nordic-logo.png'
								alt='nordic-logo'
							/>
							<span>NORDIC</span>
						</StyledMythButton>
					</Link>
				</StyledButtonsGrid>
				<StyledLegend>
					"Incluso el Olimpo tembló ante el poder del trueno de Zeus."
				</StyledLegend>
				<img src='/assets/images/common/separator-h.png' alt='' />
			</StyledMainContainer>
		</StyledHomeMain>
	);
};

export default Home;
