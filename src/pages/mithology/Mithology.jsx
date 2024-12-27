import { useState } from 'react';
import Button from '../../components/button/Button';
import Story from '../../components/story/Story';

const Mithology = ({ mithologyInfo }) => {
	const [data] = mithologyInfo;
	const [topic, setTopic] = useState(0);
	const [being, setBeing] = useState('beingOne');
	console.log(topic, being);
	const toGetData = data[topic][being];
	return (
		<>
			<picture>
				<source media='(min-width: 1023px)' srcSet={data.banner.desktop} />
				<source media='(min-width: 767px )' srcSet={data.banner.tablet} />
				<source media='(min-width: 360px)' srcSet={data.banner.mobile} />
				<img src={data.banner.mobile} alt='banner' />
			</picture>
			<h1>{data.kind}</h1>
			<div>
				<Button action={setTopic} topic={0} text='GODS' />
				<Button action={setTopic} topic={1} text='CREATURES' />
				<Button action={setTopic} topic={2} text='MYTHS' />
			</div>
			<Story
				picture={toGetData.image}
				being={toGetData.name}
				caption={toGetData.caption}
			/>
			<div>
				<Button
					action={setBeing}
					topic={'beingOne'}
					text={data[topic].beingOne.tab}
				/>
				<Button
					action={setBeing}
					topic={'beingTwo'}
					text={data[topic].beingTwo.tab}
				/>
				<Button
					action={setBeing}
					topic={'beingThree'}
					text={data[topic].beingThree.tab}
				/>
			</div>
		</>
	);
};
export default Mithology;
