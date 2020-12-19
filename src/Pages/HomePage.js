import { BrowserRouter, Route } from 'react-router-dom';
import ArchitecturePage from './ArchitecturePage';
import LegoLifePage from './LegolifePage';
import ProductPage from "./ProductPage";
import './HomePage.css';

import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import CardContainer from '../components/CardContent/CardContainer';
import Productslider from '../components/Slider/productSlider'

import {
	StarOutlined,
	StarFilled,
	StarTwoTone,
	HeartTwoTone,
	HeartOutlined,
} from '@ant-design/icons';

const { Component } = require('react');

class HomePage extends Component {
	state = {
		TrendingNow: [
			{
				cardImg: '/trending1.jpeg',
				cardTitle: 'The exclusive new Elf Club House',
				cardBody: 'Unwrap the newest addition to the LEGO® festive collection.',
			},
			{
				cardImg: '/trending2.jpeg',
				cardTitle: 'New exclusive 123 Sesame Street',
				cardBody:
					'Revisit childhood memories with this iconic fan-inspired set.',
			},
			{
				cardImg: '/trending3.jpeg',
				cardTitle: 'Bring fun home',
				cardBody:
					'Watch toddlers build, play and learn with new LEGO® DUPLO® sets.',
			},
		],

		SpotlightOn: [
			{
				cardImg: '/spotlight1.jpeg',
				cardTitle: 'Make a splash',
				cardBody:
					'Transport kids to shore with the new LEGO® Friends Party Boat.',
			},
			{
				cardImg: '/spotlight2.jpg',
				cardTitle: 'Shine a light on creativity',
				cardBody:
					'Discover endless possibilities in play with LEGO® Classic Brick sets.',
			},
		],

		// ninjas: [
		// 	{
		// 		ID: 1,
		// 		name: 'Empire State Building',
		// 		price: '119.99',
		// 		imgSrc: '21046.jpeg',
		// 		rating: 1,
		// 	},
		// 	{
		// 		ID: 2,
		// 		name: 'The White House',
		// 		price: '110.99',
		// 		imgSrc: '21046.jpeg',
		// 		rating: 5,
		// 	},
		// 	{
		// 		ID: 3,
		// 		name: 'Trafalgar Square',
		// 		price: '98.99',
		// 		imgSrc: '21046.jpeg',
		// 		rating: 3,
		// 	},
		// 	{
		// 		ID: 4,
		// 		name: 'Statue of Liberty',
		// 		price: '70.50',
		// 		imgSrc: '21046.jpeg',
		// 		rating: 2,
		// 	},
		// 	{
		// 		ID: 5,
		// 		name: 'San Francisco',
		// 		price: '255.99',
		// 		imgSrc: '21046.jpeg',
		// 		rating: 4,
		// 	},
		// 	{
		// 		ID: 6,
		// 		name: 'Las Vegas',
		// 		price: '119.99',
		// 		imgSrc: '21046.jpeg',
		// 		rating: 1,
		// 	},
		// 	{ ID: 7, name: 'Paris', price: '110.0', imgSrc: '21046.jpeg', rating: 5 },
		// 	{ ID: 8, name: 'London', price: '98.0', imgSrc: '21046.jpeg', rating: 3 },
		// ],

		// ArchitectureAccordion: [
		// 	{ title: 'Product Type', filters: [{ Sets: 'Sets' }] },
		// 	{ title: 'Age', filters: [{ Age: '12+' }] },
		// 	{
		// 		title: 'Price',
		// 		filters: [
		// 			{ Price1: '$25 - $50' },
		// 			{ Price2: '$50 - $75' },
		// 			{ Price3: '$75 - $100' },
		// 			{ Price4: '$100+' },
		// 		],
		// 	},
		// 	{ title: 'Theme', filters: [{ Theme: 'Architecture' }] },
		// 	{ title: 'Interest', filters: [{ Interest: 'Buildings' }] },
		// 	{
		// 		title: 'Piece Count',
		// 		filters: [
		// 			{ PieceCount1: '250-499' },
		// 			{ PieceCount2: '500-999' },
		// 			{ PieceCount3: '1000+' },
		// 		],
		// 	},
		// 	{ title: 'Availability', filters: [{ Availability: 'Out Of Stock' }] },
		// 	{ title: 'Rating', filters: [{ Rating: this.fourStars() }] },
		// ],
	};

	// fourStars() {
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

	addNinja = (ninja) => {
		let newNinjas = [...this.state.ninjas, ninja];
		this.setState({
			ninjas: newNinjas,
		});
	};

	deleteNinja = (id) => {
		let ninjas = this.state.ninjas.filter((ninja) => {
			return ninja.ID !== id;
		});

		/*let deletedNinja = this.state.ninjas.find(ninja => {
          return ninja.id === id;
        })
        let newNinjas = [...this.state.ninjas];
        newNinjas.splice(deletedNinja.id-1, 1);*/

		this.setState({
			ninjas: ninjas,
		});
	};

	render() {
		return (
			<>
      <Header />
      <Slider />
      <Productslider/>

				<BrowserRouter>
					<Route
						component={() => <LegoLifePage />}
						path='/legolife'
						exact></Route>

					<Route component={() => <ProductPage />} path='/architecture/:' exact></Route>

					<Route
						component={() => (
							<ArchitecturePage
								ninjas={this.state.ninjas}
								ArchitectureAccordion={this.state.ArchitectureAccordion}
							/>
						)}
						path='/architecture'
						exact></Route>

					<Route
						component={() => (
							<CardContainer
								title='Trending now'
								data={this.state.TrendingNow}
							/>
						)}
						path='/'
						exact></Route>

					<Route
						component={() => (
							<CardContainer
								title='Spotlight on'
								data={this.state.SpotlightOn}
							/>
						)}
						path='/'
						exact></Route>
				</BrowserRouter>
			</>
		);
	}
}

export default HomePage;
