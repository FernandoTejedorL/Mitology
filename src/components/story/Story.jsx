const Story = ({ picture, being, caption }) => {
	return (
		<div>
			<h1>{being}</h1>
			<picture>
				<source media='(min-width: 1023px)' srcSet={picture.desktop} />
				<source media='(min-width: 767px)' srcSet={picture.tablet} />
				<source media='(min-width: 360px)' srcSet={picture.mobile} />
				<img src={picture.mobile} alt='being-pic' />
			</picture>
			<img src='/assets/images/common/separator-h.png' alt='' />
			<p>{caption}</p>
		</div>
	);
};

export default Story;
