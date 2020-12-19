import React from 'react';
import './ArchitecturePage.css';
import Filter from "../components/Filter/Filter";



import 'bootstrap/dist/css/bootstrap.min.css';
//import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from '../21042.jpeg';
import Logo1 from '../21043.jpeg';
import Logo2 from '../21045.jpeg';
import Logo3 from '../21046.jpeg';
import Logo4 from '../40367.jpeg';
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter,
} from 'react-router-dom';

import {
	StarOutlined,
	StarFilled,
	StarTwoTone,
	HeartTwoTone,
	HeartOutlined,
} from '@ant-design/icons';

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

const Architecture = ({ ninjas, deleteNinja }) => {
	// console.log('ArchitectureAccordion', ArchitectureAccordion);

	const ArchitectureAccordion = [
		{ title: 'Product Type', filters: [{ Sets: 'Sets' }] },
		{ title: 'Age', filters: [{ Age: '12+' }] },
		{
			title: 'Price',
			filters: [
				{ Price1: '$25 - $50' },
				{ Price2: '$50 - $75' },
				{ Price3: '$75 - $100' },
				{ Price4: '$100+' },
			],
		},
		{ title: 'Theme', filters: [{ Theme: 'Architecture' }] },
		{ title: 'Interest', filters: [{ Interest: 'Buildings' }] },
		{
			title: 'Piece Count',
			filters: [
				{ PieceCount1: '250-499' },
				{ PieceCount2: '500-999' },
				{ PieceCount3: '1000+' },
			],
		},
		{ title: 'Availability', filters: [{ Availability: 'Out Of Stock' }] },
		// { title: 'Rating', filters: [{ Rating: this.fourStars() }] },
	];

	// function fourStars() {
	// 	return (
	// 		<span>
	// 			<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
	// 			<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
	// 			<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
	// 			<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
	// 			<StarTwoTone twoToneColor='orange' />
	// 		</span>
	// 	);
	// }


	const ninjasArr = [
		{
			ID: 1,
			name: 'Empire State Building',
			price: '119.99',
			imgSrc: '21046.jpeg',
			rating: 1,
		},
		{
			ID: 2,
			name: 'The White House',
			price: '110.99',
			imgSrc: '21046.jpeg',
			rating: 5,
		},
		{
			ID: 3,
			name: 'Trafalgar Square',
			price: '98.99',
			imgSrc: '21046.jpeg',
			rating: 3,
		},
		{
			ID: 4,
			name: 'Statue of Liberty',
			price: '70.50',
			imgSrc: '21046.jpeg',
			rating: 2,
		},
		{
			ID: 5,
			name: 'San Francisco',
			price: '255.99',
			imgSrc: '21046.jpeg',
			rating: 4,
		},
		{
			ID: 6,
			name: 'Las Vegas',
			price: '119.99',
			imgSrc: '21046.jpeg',
			rating: 1,
		},
		{ ID: 7, name: 'Paris', price: '110.0', imgSrc: '21046.jpeg', rating: 5 },
		{ ID: 8, name: 'London', price: '98.0', imgSrc: '21046.jpeg', rating: 3 },
	];



	const ninjaList = ninjasArr.map((ninja, i) => {
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
		};

		return true ? (
			<div class='row col-6 col-lg-4 border border-1 m-0'>
				<div class='p-3'>
					<div class=''>
						<span class='love'></span>
						<Link to={{ pathname: `/architecture/${ninja.ID}`, state: ninja }}>
							<img
								class='image-fluid w-100 pImg pImg2'
								src={imgLogos[i]}
								alt=''
							/>
						</Link>
					</div>
					<Link to={{ pathname: `/architecture/${ninja.ID}`, state: ninja }}>
						<p class='font-weight-bold text-dark'>{ninja.name}</p>
					</Link>
					<p class=''>{rate()}</p>
					<p class='font-weight-bold'>${ninja.price}</p>
					<button class='btn add col-12 p-2'>Add to Bag</button>
					<button class='btn wish col-12 text-left p-0 pt-2'>
						<i class='far fa-heart pr-2'></i>
						<span class='align-self-center'>Add to Wishlist</span>
					</button>
				</div>
			</div>
		) : null;
	});



	return (
		<div>
			<div class='row p-5 m-0'>
				<div class=' col-lg-3 d-none d-lg-block '>

					<Filter ArchitectureAccordion={ArchitectureAccordion} ></Filter>

				</div>

				<div class='row col-lg-9 col-12  m-xs-0'>
					{ninjaList}</div>
			</div>
		</div>
	);
};

export default withRouter(Architecture);
