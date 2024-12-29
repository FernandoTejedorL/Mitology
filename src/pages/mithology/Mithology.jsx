import { useState } from 'react';
import Button from '../../components/button/Button';
import Story from '../../components/story/Story';
import {
	StyledBannerMith,
	StyledMithology,
	StyledMythBody,
	StyledMythKind,
	StyledButtonsContainer
} from './mithology.styles';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
const Mithology = ({ mithologyInfo }) => {
	const [data] = mithologyInfo;
	const [topic, setTopic] = useState(0);
	const [being, setBeing] = useState('beingOne');
	const toGetData = data[topic][being];
	return (
		<>
			<Header />
			<StyledMithology>
				<picture>
					<source media='(min-width: 1023px)' srcSet={data.banner.desktop} />
					<source media='(min-width: 767px )' srcSet={data.banner.tablet} />
					<source media='(min-width: 360px)' srcSet={data.banner.mobile} />
					<StyledBannerMith src={data.banner.mobile} alt='banner' />
				</picture>
				<StyledMythBody>
					<StyledMythKind>{data.kind}</StyledMythKind>
					<StyledButtonsContainer>
						<Button
							action={setTopic}
							setBeing={setBeing}
							topic={0}
							text='GODS'
							$color={data.color}
							$hover={data.hover}
							$activetopic={topic}
							$topic={0}
							$height={'49px'}
							$width={'175px'}
						/>
						<Button
							action={setTopic}
							setBeing={setBeing}
							topic={1}
							$topic={1}
							text='CREATURES'
							$color={data.color}
							$hover={data.hover}
							$activetopic={topic}
							$height={'49px'}
							$width={'175px'}
						/>
						<Button
							action={setTopic}
							setBeing={setBeing}
							topic={2}
							$topic={2}
							text='MYTHS'
							$color={data.color}
							$hover={data.hover}
							$activetopic={topic}
							$height={'49px'}
							$width={'175px'}
						/>
					</StyledButtonsContainer>
					<Story
						picture={toGetData.image}
						being={toGetData.name}
						caption={toGetData.caption}
						setBeing={setBeing}
						data={data}
						topic={topic}
						beingToSet={being}
						$color={data.color}
						$hover={data.hover}
						$activetopic={being}
					/>
				</StyledMythBody>
			</StyledMithology>
			<Footer />
		</>
	);
};
export default Mithology;
