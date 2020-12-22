import React from 'react';
import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import './LegoMagazineCarousel.css';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 1200 },
		items: 4,
	},
	desktop: {
		breakpoint: { max: 1200, min: 800 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 800, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
const LegoMagazineCarousel = () => {
	const comics = [
		{
			imgSrc: '/activities_llmagazine.jfif',
			name: 'Super-fun LEGO activities',
		},
		{ imgSrc: '/comic_llmagazine.jfif', name: 'LEGO character comics' },
		{ imgSrc: '/poster_llmagazine.jfif', name: 'Amazing LEGO posters' },
		{ imgSrc: '/cool-creations_llmagazine.jfif', name: 'Kids’ cool creations' },
		{
			imgSrc: '/buildinginstructions_llmagazine.jfif',
			name: 'Building Instructions',
		},
		{ imgSrc: '/sets_llmagazine.jfif', name: 'LEGO sets' },
	];
	// comic_llmagazine
	const comicList = comics.map((comic, i) => {
		return true ? (
			<div class='mb-5 m-0'>
				<div class='p-1'>
					{/* <div class='border border-1'> */}
					<div>
						<img class='image-fluid w-100 pImg' src={comic.imgSrc} alt='' />
					</div>
					<div class='text-center'>
						<p>{comic.name}</p>
					</div>
				</div>
			</div>
		) : null;
	});

	return (
		<div>
			<Carousel
				responsive={responsive}
				swipeable={true}
				draggable={true}
				showDots={true}
				ssr={false} // means to render carousel on server-side.
				infinite={false}
				//autoPlaySpeed={1000}
				keyBoardControl={true}
				//customTransition="all 1"
				//transitionDuration={500}
				//containerClass="carousel-container"
				//removeArrowOnDeviceType={["tablet", "mobile"]}
				//dotListClass="custom-dot-list-style"
				//itemClass="carousel-item-padding-40-px"
				slidesToSlide='2'>
				{comicList}
			</Carousel>
		</div>
	);
};

export default LegoMagazineCarousel;
