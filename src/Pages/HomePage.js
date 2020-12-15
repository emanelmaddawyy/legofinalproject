import { BrowserRouter, Route } from 'react-router-dom';
import ArchitecturePage from './ArchitecturePage';
import LegoLifePage from './LegoLifePage';
import ProductPage from "./ProductPage";
import './HomePage.css';
import Productslider from '../components/Slider/productSlider';
import Slider from '../components/Slider/Slider';
import CardContainer from '../components/CardContent/CardContainer';
import Cart from '../components/cart/cart.js';
import {
	StarFilled,
	StarTwoTone,
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

		ninjas: [
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
		],

		ArchitectureAccordion: [
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
			{ title: 'Rating', filters: [{ Rating: this.fourStars() }] },
		],
		products: []
	};

	componentDidMount() {
		this.state.products = localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):[];
		this.setState({
			products: this.state.products
		})
	  }
	isAddedBefore(products, product){
		const isFounded = products.find((p)=>{
			return p.ID === product.ID;
		})
		if(!isFounded){	
			return false;
		}else{
			isFounded.numberOfProduct +=1;
			return true;
		}
	}
	addProductToCart = (product)=>{
		const is = this.isAddedBefore(this.state.products,product);
		let newSetOfProducts;
		if(is){

			newSetOfProducts = [...this.state.products];
		} else{
			newSetOfProducts = [...this.state.products, product];
		}
		this.setState({
			products: newSetOfProducts
		})
		localStorage.setItem("products", JSON.stringify(newSetOfProducts));
	}
	deleteProductFromCart = (id)=> {
		let newSetOfProducts = [];
		let required ;
		this.state.products.forEach(product => {
		if(product.ID!==id) newSetOfProducts.push(product);
		else required = product;
		})
		localStorage.setItem("products", JSON.stringify(newSetOfProducts));
		this.setState({
			products: newSetOfProducts
		  })
	}

	fourStars() {
		return (
			<span>
				<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
				<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
				<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
				<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
				<StarTwoTone twoToneColor='orange' />
			</span>
		);
	}	

	render() {
		return (
			<>
			<Productslider addProductToCart = {this.addProductToCart}/>
				<BrowserRouter>
					<Route
						component={() => <LegoLifePage />}
						path='/legolife'
						exact></Route>

					<Route component={() => <Slider />} path='/' exact></Route>
					<Route component={() => <Slider />} path='/architecture' exact></Route>

					<Route component={() => <Slider />} path='/architecture/:id' exact></Route>

					<Route component={() => <ProductPage />} path='/architecture/:id' exact></Route>
					<Route component={() => <Cart products = {this.state.products} deleteProductFromCart={this.deleteProductFromCart}/>} path='/cart' exact></Route>

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
