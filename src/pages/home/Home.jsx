import Footer from '../../components/footer/Footer';
import GoToMythButton from '../../components/goToMythButton/GoToMythButton';
import Header from '../../components/header/Header';
import { MITHOLOGIES_INFO } from '../../constants/mithologies-info';
import {
	StyledBanner,
	StyledButtonsGrid,
	StyledHomeMain,
	StyledLegend,
	StyledMainContainer,
	StyledParagraph,
	StyledParagraphBig,
	StyledParagraphBigContainer,
	StyledTitle,
	StyledToHideInBig,
	StyledToHideInSmall
} from './home.styles';

const Home = () => {
	return (
		<>
			<Header />
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
						cultures. From the epic tales of Greek gods and Norse warriors to
						the mystical folklore of Egypt and the Rome, explore the myths that
						have inspired humanity for centuries. Uncover the meaning behind
						legendary creatures, heroic quests, and gods as we journey through
						the diverse worlds of mythology.
					</StyledParagraph>
					<StyledToHideInBig
						src='/assets/images/common/separator-h.png'
						alt=''
					/>
					<StyledButtonsGrid>
						{MITHOLOGIES_INFO.map(mithology => (
							<GoToMythButton
								key={mithology.id}
								path={mithology.path}
								name={mithology.name}
								logo={mithology.logo}
							/>
						))}
					</StyledButtonsGrid>
					<StyledToHideInSmall
						src='/assets/images/common/separator-h.png'
						alt=''
					/>
					<StyledParagraphBigContainer>
						<StyledParagraphBig $textAlign={'left'}>
							Dive into the fascinating stories and timeless legends of ancient
							cultures. From the epic tales of Greek gods and Norse warriors to
							the mystical folklore of Egypt and the Rome, explore the myths
							that have inspired humanity for centuries. Uncover the meaning
							behind legendary creatures, heroic quests, and gods as we journey
							through the diverse worlds of mythology.
						</StyledParagraphBig>
						<StyledParagraphBig $textAlign={'right'}>
							Embark on a journey through the echoes of ancient wisdom, where
							every myth holds a lesson and every legend a glimpse into the
							human spirit. Discover how these stories shaped civilizations,
							influenced art, and continue to resonate in modern culture.
							Whether you’re captivated by the trickery of Loki, the might of
							Zeus, or the enigmatic gods of the Nile, these tales offer a
							window into the beliefs, fears, and hopes of our ancestors.
						</StyledParagraphBig>
					</StyledParagraphBigContainer>
					<StyledLegend>
						Even Olympus trembled ahead the power of Zeus thunder...
					</StyledLegend>
					<StyledToHideInBig
						src='/assets/images/common/separator-h.png'
						alt=''
					/>
				</StyledMainContainer>
			</StyledHomeMain>
			<Footer />
		</>
	);
};

export default Home;
