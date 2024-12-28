import { useState } from 'react';
import Button from '../../components/button/Button';
import Story from '../../components/story/Story';
import {
	StyledBannerMith,
	StyledMithology,
	StyledMythBody,
	StyledMythKind,
	StyledTabContainer
} from './mithology.styles';

const Mithology = ({ mithologyInfo }) => {
	const [data] = mithologyInfo;
	const [topic, setTopic] = useState(0);
	const [being, setBeing] = useState('beingOne');
	console.log(topic, being);
	const toGetData = data[topic][being];
	return (
		<StyledMithology>
			<picture>
				<source media='(min-width: 1023px)' srcSet={data.banner.desktop} />
				<source media='(min-width: 767px )' srcSet={data.banner.tablet} />
				<source media='(min-width: 360px)' srcSet={data.banner.mobile} />
				<StyledBannerMith src={data.banner.mobile} alt='banner' />
			</picture>
			<StyledMythBody>
				<StyledMythKind>{data.kind}</StyledMythKind>
				<StyledTabContainer>
					<Button
						action={setTopic}
						topic={0}
						text='GODS'
						$color={data.color}
						$activetopic={topic}
						$topic={0}
					/>
					<Button
						action={setTopic}
						topic={1}
						$topic={1}
						text='CREATURES'
						$color={data.color}
						$activetopic={topic}
					/>
					<Button
						action={setTopic}
						topic={2}
						$topic={2}
						text='MYTHS'
						$color={data.color}
						$activetopic={topic}
					/>
				</StyledTabContainer>
				<Story
					picture={toGetData.image}
					being={toGetData.name}
					caption={toGetData.caption}
				/>
				<StyledTabContainer>
					<Button
						action={setBeing}
						topic={'beingOne'}
						text={data[topic].beingOne.tab}
						$color={data.color}
						$activetopic={being}
						$topic={'beingOne'}
					/>
					<Button
						action={setBeing}
						topic={'beingTwo'}
						text={data[topic].beingTwo.tab}
						$color={data.color}
						$activetopic={being}
						$topic={'beingTwo'}
					/>
					<Button
						action={setBeing}
						topic={'beingThree'}
						text={data[topic].beingThree.tab}
						$color={data.color}
						$activetopic={being}
						$topic={'beingThree'}
					/>
				</StyledTabContainer>
			</StyledMythBody>
		</StyledMithology>
	);
};
export default Mithology;
