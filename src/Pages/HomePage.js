import { BrowserRouter, Route } from 'react-router-dom';
import ArchitecturePage from './ArchitecturePage';
import LegoLifePage from './LegoLifePage';
import ProductPage from "./ProductPage";
import './HomePage.css';
import ProductSlider from '../components/Slider/ProductSlider';
import Slider from '../components/Slider/Slider';
import CardContainer from '../components/CardContent/CardContainer';
import Cart from '../components/Cart/Cart.js';
import WishList from '../components/WishList/WishList.js';
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
		products: [],
		wishlist: []
	};

	componentDidMount() {
		this.state.products = localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):[];
		this.state.wishlist = localStorage.getItem('wishlist')?JSON.parse(localStorage.getItem('wishlist')):[];
		this.setState({
			wishlist: this.state.wishlist,
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
	isAddedBeforeToTheWishlist(wishlist,product){
		const isFounded = wishlist.find((p)=>{
			return p.ID === product.ID;
		})
		if(!isFounded){	
			product.isInWishlist = true;
			return false;
		}else{
			return true;
		}
	}
	addProductToWishlist = (product, e)=>{
		const is = this.isAddedBeforeToTheWishlist(this.state.wishlist, product);
		let newSetOfProducts;
		if(is){
			newSetOfProducts = [...this.state.wishlist];
		} else if(!is){
			newSetOfProducts = [...this.state.wishlist, product];
		}
		this.deleteProductFromCart(product.ID);
		this.setState({
			wishlist: newSetOfProducts
		})
		e.target.innerHTML = '<path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>';
		e.target.style = "cursor: auto";
		localStorage.setItem("wishlist", JSON.stringify(newSetOfProducts));
	}
	deleteProductFromWishlist = (id)=> {
		let newSetOfProducts = [];
		let required ;
		this.state.wishlist.forEach(product => {
		if(product.ID!==id) newSetOfProducts.push(product);
		else required = product;
		})
		localStorage.setItem("wishlist", JSON.stringify(newSetOfProducts));
		this.setState({
			wishlist: newSetOfProducts
		  })
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
			<ProductSlider addProductToCart = {this.addProductToCart} addProductToWishlist = {this.addProductToWishlist}/>
				<BrowserRouter>
					<Route
						component={() => <LegoLifePage />}
						path='/legolife'
						exact></Route>

					<Route component={() => <Slider />} path='/' exact></Route>
					<Route component={() => <Slider />} path='/architecture' exact></Route>

					<Route component={() => <Slider />} path='/architecture/:id' exact></Route>

					<Route component={() => <ProductPage />} path='/architecture/:id' exact></Route>
					<Route component={() => <Cart products = {this.state.products} addProductToWishlist = {this.addProductToWishlist} deleteProductFromCart={this.deleteProductFromCart}/>} path='/cart' exact></Route>
					<Route component={() => <WishList wishlist = {this.state.wishlist} addProductToCart = {this.addProductToCart} deleteProductFromWishlist={this.deleteProductFromWishlist}/>} path='/wishlist' exact></Route>

					<Route
						component={() => (
							<ArchitecturePage
								ninjas={this.state.ninjas}
								ArchitectureAccordion={this.state.ArchitectureAccordion}
								addProductToCart = {this.addProductToCart} 
								addProductToWishlist = {this.addProductToWishlist}
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
