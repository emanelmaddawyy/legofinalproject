import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../21042.jpeg';
import Logo1 from '../../21043.jpeg';
import Logo2 from '../../21045.jpeg';
import Logo3 from '../../21046.jpeg';
import Logo4 from '../../40367.jpeg';
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter,
} from 'react-router-dom';
// import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
	StarOutlined,
	StarFilled,
	StarTwoTone,
	HeartTwoTone,
	HeartOutlined,
} from '@ant-design/icons';
import { render } from '@testing-library/react';

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

const ProductsSlider = (props) => {

	const ninjas = [
		{
			ID: 1,
			name: 'Empire State Building',
			price: '119.99',
			rating: 1,
			imgSrc: '/21042.jpeg',
			avaliable: true,
			numberOfReviews: 10,
			countInStock: 2,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 8,
			pieces: 60,
			vipPoints: 78,
			itemNo: 40418,
			specificationsParagraph:
				'Fans of superhero battles will have endless fun role-playing this colossal clash, as 2 popular Marvel Avengers – the winged Falcon and super-soldier Black Widow – take on 2 enemy A.I.M. Agents. LEGO® Marvel Avengers Falcon & Black Widow Team Up (40418) ramps up the action even further with an extra-large, hand-operated 6-shooter, plus lots of ammunition.',
			specificationsUl: [
				'This LEGO® Marvel Avengers set includes 4 minifigures – Black Widow, Falcon and 2 A.I.M. Agents – and a large 6-shooter, plus ammunition.',
				'Falcon’s wings can be moved by hand into ‘flying’ position.',
				'The hand-controlled 6-shooter fires out large LEGO®projectiles.',
			],
			DeliveriesAndReturnsUl: [
				'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
				'Express shipping available at checkout.',
				'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
				'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
			],
			DeliveriesAndReturnsParagraph:
				'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
		},
		{
			ID: 2,
			name: 'The White House',
			price: '110.99',
			rating: 5,
			imgSrc: '/21043.jpeg',
			avaliable: false,
			numberOfReviews: 10,
			countInStock: 0,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 16,
			pieces: 1685,
			vipPoints: 780,
			itemNo: 21042,
			specificationsParagraph:
				'Fans of superhero battles will have endless fun role-playing this colossal clash, as 2 popular Marvel Avengers – the winged Falcon and super-soldier Black Widow – take on 2 enemy A.I.M. Agents. LEGO® Marvel Avengers Falcon & Black Widow Team Up (40418) ramps up the action even further with an extra-large, hand-operated 6-shooter, plus lots of ammunition.',
			specificationsUl: [
				'This LEGO® Marvel Avengers set includes 4 minifigures – Black Widow, Falcon and 2 A.I.M. Agents – and a large 6-shooter, plus ammunition.',
				'Falcon’s wings can be moved by hand into ‘flying’ position.',
				'The hand-controlled 6-shooter fires out large LEGO®projectiles.',
			],
			DeliveriesAndReturnsUl: [
				'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
				'Express shipping available at checkout.',
				'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
				'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
			],
			DeliveriesAndReturnsParagraph:
				'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
		},
		{
			ID: 3,
			name: 'Trafalgar Square',
			price: '98.99',
			rating: 3,
			imgSrc: '/21045.jpeg',
			avaliable: true,
			numberOfReviews: 20,
			countInStock: 3,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 10,
			pieces: 214,
			vipPoints: 97,
			itemNo: 40378,
			specificationsParagraph:
				'Fans of superhero battles will have endless fun role-playing this colossal clash, as 2 popular Marvel Avengers – the winged Falcon and super-soldier Black Widow – take on 2 enemy A.I.M. Agents. LEGO® Marvel Avengers Falcon & Black Widow Team Up (40418) ramps up the action even further with an extra-large, hand-operated 6-shooter, plus lots of ammunition.',
			specificationsUl: [
				'This LEGO® Marvel Avengers set includes 4 minifigures – Black Widow, Falcon and 2 A.I.M. Agents – and a large 6-shooter, plus ammunition.',
				'Falcon’s wings can be moved by hand into ‘flying’ position.',
				'The hand-controlled 6-shooter fires out large LEGO®projectiles.',
			],
			DeliveriesAndReturnsUl: [
				'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
				'Express shipping available at checkout.',
				'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
				'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
			],
			DeliveriesAndReturnsParagraph:
				'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
		},
		{
			ID: 4,
			name: 'Statue of Liberty',
			price: '70.50',
			rating: 2,
			imgSrc: '/21046.jpeg',
			avaliable: false,
			numberOfReviews: 20,
			countInStock: 0,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 8,
			pieces: 60,
			vipPoints: 78,
			itemNo: 40418,
			specificationsParagraph:
				'Fans of superhero battles will have endless fun role-playing this colossal clash, as 2 popular Marvel Avengers – the winged Falcon and super-soldier Black Widow – take on 2 enemy A.I.M. Agents. LEGO® Marvel Avengers Falcon & Black Widow Team Up (40418) ramps up the action even further with an extra-large, hand-operated 6-shooter, plus lots of ammunition.',
			specificationsUl: [
				'This LEGO® Marvel Avengers set includes 4 minifigures – Black Widow, Falcon and 2 A.I.M. Agents – and a large 6-shooter, plus ammunition.',
				'Falcon’s wings can be moved by hand into ‘flying’ position.',
				'The hand-controlled 6-shooter fires out large LEGO®projectiles.',
			],
			DeliveriesAndReturnsUl: [
				'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
				'Express shipping available at checkout.',
				'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
				'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
			],
			DeliveriesAndReturnsParagraph:
				'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
		},
		{
			ID: 5,
			name: 'San Francisco',
			price: '255.99',
			rating: 4,
			imgSrc: '/40367.jpeg',
			avaliable: true,
			numberOfReviews: 30,
			countInStock: 4,
			themeLogo: '/categoryBrickHeadz.png',
			theme: 'Brick Headz',
			interests: 'Building',
			ages: 16,
			pieces: 1685,
			vipPoints: 780,
			itemNo: 21042,
			specificationsParagraph:
				'Fans of superhero battles will have endless fun role-playing this colossal clash, as 2 popular Marvel Avengers – the winged Falcon and super-soldier Black Widow – take on 2 enemy A.I.M. Agents. LEGO® Marvel Avengers Falcon & Black Widow Team Up (40418) ramps up the action even further with an extra-large, hand-operated 6-shooter, plus lots of ammunition.',
			specificationsUl: [
				'This LEGO® Marvel Avengers set includes 4 minifigures – Black Widow, Falcon and 2 A.I.M. Agents – and a large 6-shooter, plus ammunition.',
				'Falcon’s wings can be moved by hand into ‘flying’ position.',
				'The hand-controlled 6-shooter fires out large LEGO®projectiles.',
			],
			DeliveriesAndReturnsUl: [
				'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
				'Express shipping available at checkout.',
				'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
				'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
			],
			DeliveriesAndReturnsParagraph:
				'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
		},
		{
			ID: 6,
			name: 'Las Vegas',
			price: '119.99',
			rating: 1,
			imgSrc: '/21042.jpeg',
			avaliable: false,
			numberOfReviews: 30,
			countInStock: 0,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 10,
			pieces: 214,
			vipPoints: 97,
			itemNo: 40378,
			specificationsParagraph:
				'Fans of superhero battles will have endless fun role-playing this colossal clash, as 2 popular Marvel Avengers – the winged Falcon and super-soldier Black Widow – take on 2 enemy A.I.M. Agents. LEGO® Marvel Avengers Falcon & Black Widow Team Up (40418) ramps up the action even further with an extra-large, hand-operated 6-shooter, plus lots of ammunition.',
			specificationsUl: [
				'This LEGO® Marvel Avengers set includes 4 minifigures – Black Widow, Falcon and 2 A.I.M. Agents – and a large 6-shooter, plus ammunition.',
				'Falcon’s wings can be moved by hand into ‘flying’ position.',
				'The hand-controlled 6-shooter fires out large LEGO®projectiles.',
			],
			DeliveriesAndReturnsUl: [
				'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
				'Express shipping available at checkout.',
				'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
				'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
			],
			DeliveriesAndReturnsParagraph:
				'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
		},
		{
			ID: 7,
			name: 'Paris',
			price: '110.0',
			rating: 5,
			imgSrc: '/21043.jpeg',
			avaliable: true,
			numberOfReviews: 40,
			countInStock: 5,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 8,
			pieces: 60,
			vipPoints: 78,
			itemNo: 40418,
			specificationsParagraph:
				'Fans of superhero battles will have endless fun role-playing this colossal clash, as 2 popular Marvel Avengers – the winged Falcon and super-soldier Black Widow – take on 2 enemy A.I.M. Agents. LEGO® Marvel Avengers Falcon & Black Widow Team Up (40418) ramps up the action even further with an extra-large, hand-operated 6-shooter, plus lots of ammunition.',
			specificationsUl: [
				'This LEGO® Marvel Avengers set includes 4 minifigures – Black Widow, Falcon and 2 A.I.M. Agents – and a large 6-shooter, plus ammunition.',
				'Falcon’s wings can be moved by hand into ‘flying’ position.',
				'The hand-controlled 6-shooter fires out large LEGO®projectiles.',
			],
			DeliveriesAndReturnsUl: [
				'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
				'Express shipping available at checkout.',
				'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
				'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
			],
			DeliveriesAndReturnsParagraph:
				'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
		},
		{
			ID: 8,
			name: 'London',
			price: '98.0',
			rating: 3,
			imgSrc: '/21045.jpeg',
			avaliable: true,
			numberOfReviews: 50,
			countInStock: 1,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 16,
			pieces: 1685,
			vipPoints: 780,
			itemNo: 21042,
			specificationsParagraph:
				'Fans of superhero battles will have endless fun role-playing this colossal clash, as 2 popular Marvel Avengers – the winged Falcon and super-soldier Black Widow – take on 2 enemy A.I.M. Agents. LEGO® Marvel Avengers Falcon & Black Widow Team Up (40418) ramps up the action even further with an extra-large, hand-operated 6-shooter, plus lots of ammunition.',
			specificationsUl: [
				'This LEGO® Marvel Avengers set includes 4 minifigures – Black Widow, Falcon and 2 A.I.M. Agents – and a large 6-shooter, plus ammunition.',
				'Falcon’s wings can be moved by hand into ‘flying’ position.',
				'The hand-controlled 6-shooter fires out large LEGO®projectiles.',
			],
			DeliveriesAndReturnsUl: [
				'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
				'Express shipping available at checkout.',
				'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
				'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
			],
			DeliveriesAndReturnsParagraph:
				'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
		},
	]

	const ninjaList = ninjas.map((ninja, i) => {
		const imgLogos = [
			Logo,
			Logo1,
			Logo2,
			Logo3,
			Logo4,
			Logo,
			Logo1,
			Logo2,
			Logo3,
			Logo4,
		];

		let rate = () => {
			switch (ninja.rating) {
				case 1:
					return (
						<p>
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarTwoTone twoToneColor='orange' />
							<StarTwoTone twoToneColor='orange' />
							<StarTwoTone twoToneColor='orange' />
							<StarTwoTone twoToneColor='orange' />
						</p>
					);
					break;
				case 2:
					return (
						<p>
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarTwoTone twoToneColor='orange' />
							<StarTwoTone twoToneColor='orange' />
							<StarTwoTone twoToneColor='orange' />
						</p>
					);
					break;
				case 3:
					return (
						<p>
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarTwoTone twoToneColor='orange' />
							<StarTwoTone twoToneColor='orange' />
						</p>
					);
					break;
				case 4:
					return (
						<p>
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarTwoTone twoToneColor='orange' />
						</p>
					);
					break;
				case 5:
					return (
						<p>
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
						</p>
					);
					break;
			}

			// let filled = `<StarFilled style={{ fontSize: '16px', color: "orange" }}/>`;
			// let empty = `<StarTwoTone twoToneColor="orange"/>`;
			// let res = ``;
			// for(let i = 0; i < ninja.rating; i++){
			//     res += filled
			// }
			// console.log(res);
			// render (){
			//     return(
			//         <></>
			//     )
			// }
		};

		return true ? (
			<div class='mb-5 m-0'>
				<div class='p-3'>
					<div class='border border-1'>
						<span class='love'>
							<HeartOutlined
								style={{
									fontSize: '18px',
									color: 'darkblue',
									backgroundColor: '#eee',
									margin: '2px',
									padding: '1px',
								}}
							/>
						</span>
						<Link to={{ pathname: `/architecture/${ninja.ID}`, state: ninja }}>
							<img
								class='image-fluid w-100 pImg p-3'
								src={imgLogos[i]}
								alt=''
							/>
						</Link>
					</div>
					<Link to={{ pathname: `/architecture/${ninja.ID}`, state: ninja }}>
						<p class='font-weight-bold text-dark'>{ninja.name}</p>
					</Link>
					<p class='font-weight-bold'>${ninja.price}</p>
					<p class=''>{rate()}</p>
					<button class='btn add col-12'>Add to Bag</button>
				</div>
			</div>
		) : null;
	});

	return (
		<div class='m-5 p-5'>
			<h1 className='m-2'>{props.title}</h1>
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
				{ninjaList}
			</Carousel>
		</div>
	);
};

export default withRouter(ProductsSlider);
