import './HomePage.css';
import ProductSlider from '../components/Slider/ProductSlider';
import Slider from '../components/Slider/Slider';
import CardContainer from '../components/CardContent/CardContainer';

//If You Want to make it class not a function you will use this.props
const HomePage = ({
	products,
	TrendingTitle,
	TrendingData,
	SpotlightTitle,
	SpotlightData,
	addProductToCart,
	addProductToWishlist,
}) => {
	return (
		<>
			<Slider />
			<CardContainer title={TrendingTitle} data={TrendingData} />
			<CardContainer title={SpotlightTitle} data={SpotlightData} />
			<ProductSlider
				title="Featured sets"
				products={products}
				addProductToCart={addProductToCart}
				addProductToWishlist={addProductToWishlist}
			/>
		</>
	);
};

export default HomePage;

// import { BrowserRouter, Route } from 'react-router-dom';
// import ArchitecturePage from './ArchitecturePage';
// import LegoLifePage from './LegoLifePage';
// import ProductPage from './ProductPage';
// import './HomePage.css';

// import Slider from '../components/Slider/Slider';
// import CardContainer from '../components/CardContent/CardContainer';

// import {
// 	StarOutlined,
// 	StarFilled,
// 	StarTwoTone,
// 	HeartTwoTone,
// 	HeartOutlined,
// } from '@ant-design/icons';

// const { Component } = require('react');

// class HomePage extends Component {
// 	state = {
// 		TrendingNow: [
// 			{
// 				cardImg: '/trending1.jpeg',
// 				cardTitle: 'The exclusive new Elf Club House',
// 				cardBody: 'Unwrap the newest addition to the LEGO® festive collection.',
// 			},
// 			{
// 				cardImg: '/trending2.jpeg',
// 				cardTitle: 'New exclusive 123 Sesame Street',
// 				cardBody:
// 					'Revisit childhood memories with this iconic fan-inspired set.',
// 			},
// 			{
// 				cardImg: '/trending3.jpeg',
// 				cardTitle: 'Bring fun home',
// 				cardBody:
// 					'Watch toddlers build, play and learn with new LEGO® DUPLO® sets.',
// 			},
// 		],

// 		SpotlightOn: [
// 			{
// 				cardImg: '/spotlight1.jpeg',
// 				cardTitle: 'Make a splash',
// 				cardBody:
// 					'Transport kids to shore with the new LEGO® Friends Party Boat.',
// 			},
// 			{
// 				cardImg: '/spotlight2.jpg',
// 				cardTitle: 'Shine a light on creativity',
// 				cardBody:
// 					'Discover endless possibilities in play with LEGO® Classic Brick sets.',
// 			},
// 		],

// 		ninjas: [
// 			{
// 				ID: 1,
// 				name: 'Empire State Building',
// 				price: '119.99',
// 				rating: 1,
// 				imgSrc: '/21042.jpeg',
// 				avaliable: true,
// 				numberOfReviews: 10,
// 				countInStock: 2,
// 				themeLogo: '/categoryArchitecture.png',
// 				theme: 'Architecture',
// 				interests: 'Building',
// 				ages: 8,
// 				pieces: 60,
// 				vipPoints: 78,
// 				itemNo: 40418,
// 				specificatonImg: '/specificationImg1.jpeg',
// 				specificationsParagraph:
// 					'Collectors of LEGO® BrickHeadz™ will love Goofy & Pluto (40378), featuring 2 classic Disney characters. Goofy, wearing his familiar turtleneck sweater and tall green hat, stands alongside the playful Pluto. The 2 lovable Disney friends come with sturdy baseplates that make them easy to display, either individually or alongside other BrickHeadz models. Collectors of LEGO BrickHeadz can combine elements of different sets to create fun, mashed-up characters of their own.',
// 				specificationsUl: [
// 					'This collectible building set lets kids construct fun LEGO® BrickHeadz™ models of 2 of Disney’s most recognizable characters: Goofy and Pluto.',
// 					'A great gift for LEGO® and Disney fans, this set provides an age-appropriate build-and-play experience for kids aged 10 and up',
// 					'With Goofy standing over 3” (8cm) tall and Pluto over 1” (5cm) tall, this 214-piece buildable toy delivers creative fun on a big scale as kids build, play and display.',
// 				],
// 				DeliveriesAndReturnsUl: [
// 					'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
// 					'Express shipping available at checkout.',
// 					'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
// 					'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
// 				],
// 				DeliveriesAndReturnsParagraph:
// 					'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
// 				Reviews: [
// 					{
// 						nickname: 'LEGOfans123',
// 						review:
// 							'Love it, hope to see Winnie the Pooh BrickHeadz in the future. Highly recommended ',
// 					},
// 					{
// 						nickname: 'lovingevenmorepenguins',
// 						review:
// 							'This set is really cute! Pluto has a really nice tail with really cute eyes which every Brickheadz always has the same as goofy but without the tail obviously but his hat is really nice. But I do really want a goofy and pluto figure soon and I bet as as other people.',
// 					},
// 				],
// 			},
// 			{
// 				ID: 2,
// 				name: 'The White House',
// 				price: '110.99',
// 				rating: 5,
// 				imgSrc: '/21043.jpeg',
// 				avaliable: false,
// 				numberOfReviews: 10,
// 				countInStock: 0,
// 				themeLogo: '/categoryArchitecture.png',
// 				theme: 'Architecture',
// 				interests: 'Building',
// 				ages: 16,
// 				pieces: 1685,
// 				vipPoints: 780,
// 				itemNo: 21042,
// 				specificatonImg: '/specificationImg2.jpeg',
// 				specificationsParagraph:
// 					'Fans of superhero battles will have endless fun role-playing this colossal clash, as 2 popular Marvel Avengers – the winged Falcon and super-soldier Black Widow – take on 2 enemy A.I.M. Agents. LEGO® Marvel Avengers Falcon & Black Widow Team Up (40418) ramps up the action even further with an extra-large, hand-operated 6-shooter, plus lots of ammunition.',
// 				specificationsUl: [
// 					'This LEGO® Marvel Avengers set includes 4 minifigures – Black Widow, Falcon and 2 A.I.M. Agents – and a large 6-shooter, plus ammunition.',
// 					'Falcon’s wings can be moved by hand into ‘flying’ position.',
// 					'The hand-controlled 6-shooter fires out large LEGO®projectiles.',
// 				],
// 				DeliveriesAndReturnsUl: [
// 					'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
// 					'Express shipping available at checkout.',
// 					'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
// 					'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
// 				],
// 				DeliveriesAndReturnsParagraph:
// 					'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
// 				Reviews: [
// 					{
// 						nickname: 'frontranger',
// 						review:
// 							'It seems to me that LEGO has opened up a whole new category for what they can offer with this piece. As mom to a lifelong LEGO builder, and also having grown up with LEGO myself, this little fig touches my heart. It is an exquisite piece of lovely woodwork which can be displayed as is. It presently sits next to a fine art horse sculpture in my home & holds its own proudly. Given that my son & I used to create wool felt works together when he was a child, I can see adding a little felt vest & hat to the piece for special occasions. The best part about this piece is how it represents the beginnings of LEGO, honoring the beauty of toy making with wood. I will cherish this gift. I look forward to seeing more from LEGO in the form of sustainably produced wooden toys in the future. I welcome the blend of the historical with the modern. Bravo!',
// 					},
// 				],
// 			},
// 			{
// 				ID: 3,
// 				name: 'Trafalgar Square',
// 				price: '98.99',
// 				rating: 3,
// 				imgSrc: '/21045.jpeg',
// 				avaliable: true,
// 				numberOfReviews: 20,
// 				countInStock: 3,
// 				themeLogo: '/categoryArchitecture.png',
// 				theme: 'Architecture',
// 				interests: 'Building',
// 				ages: 10,
// 				pieces: 214,
// 				vipPoints: 97,
// 				itemNo: 40378,
// 				specificatonImg: '/specificationImg3.jpeg',
// 				specificationsParagraph:
// 					'Collectors of LEGO® BrickHeadz™ will love Goofy & Pluto (40378), featuring 2 classic Disney characters. Goofy, wearing his familiar turtleneck sweater and tall green hat, stands alongside the playful Pluto. The 2 lovable Disney friends come with sturdy baseplates that make them easy to display, either individually or alongside other BrickHeadz models. Collectors of LEGO BrickHeadz can combine elements of different sets to create fun, mashed-up characters of their own.',
// 				specificationsUl: [
// 					'This collectible building set lets kids construct fun LEGO® BrickHeadz™ models of 2 of Disney’s most recognizable characters: Goofy and Pluto.',
// 					'A great gift for LEGO® and Disney fans, this set provides an age-appropriate build-and-play experience for kids aged 10 and up',
// 					'With Goofy standing over 3” (8cm) tall and Pluto over 1” (5cm) tall, this 214-piece buildable toy delivers creative fun on a big scale as kids build, play and display.',
// 				],
// 				DeliveriesAndReturnsUl: [
// 					'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
// 					'Express shipping available at checkout.',
// 					'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
// 					'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
// 				],
// 				DeliveriesAndReturnsParagraph:
// 					'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
// 				Reviews: [
// 					{
// 						nickname: 'LEGOfans123',
// 						review:
// 							'Love it, hope to see Winnie the Pooh BrickHeadz in the future. Highly recommended ',
// 					},
// 					{
// 						nickname: 'lovingevenmorepenguins',
// 						review:
// 							'This set is really cute! Pluto has a really nice tail with really cute eyes which every Brickheadz always has the same as goofy but without the tail obviously but his hat is really nice. But I do really want a goofy and pluto figure soon and I bet as as other people.',
// 					},
// 				],
// 			},
// 			{
// 				ID: 4,
// 				name: 'Statue of Liberty',
// 				price: '70.50',
// 				rating: 2,
// 				imgSrc: '/21046.jpeg',
// 				avaliable: false,
// 				numberOfReviews: 20,
// 				countInStock: 0,
// 				themeLogo: '/categoryArchitecture.png',
// 				theme: 'Architecture',
// 				interests: 'Building',
// 				ages: 8,
// 				pieces: 60,
// 				vipPoints: 78,
// 				itemNo: 40418,
// 				specificatonImg: '/specificationImg4.jpeg',
// 				specificationsParagraph:
// 					'Fans of superhero battles will have endless fun role-playing this colossal clash, as 2 popular Marvel Avengers – the winged Falcon and super-soldier Black Widow – take on 2 enemy A.I.M. Agents. LEGO® Marvel Avengers Falcon & Black Widow Team Up (40418) ramps up the action even further with an extra-large, hand-operated 6-shooter, plus lots of ammunition.',
// 				specificationsUl: [
// 					'This LEGO® Marvel Avengers set includes 4 minifigures – Black Widow, Falcon and 2 A.I.M. Agents – and a large 6-shooter, plus ammunition.',
// 					'Falcon’s wings can be moved by hand into ‘flying’ position.',
// 					'The hand-controlled 6-shooter fires out large LEGO®projectiles.',
// 				],
// 				DeliveriesAndReturnsUl: [
// 					'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
// 					'Express shipping available at checkout.',
// 					'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
// 					'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
// 				],
// 				DeliveriesAndReturnsParagraph:
// 					'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
// 				Reviews: [
// 					{
// 						nickname: 'frontranger',
// 						review:
// 							'It seems to me that LEGO has opened up a whole new category for what they can offer with this piece. As mom to a lifelong LEGO builder, and also having grown up with LEGO myself, this little fig touches my heart. It is an exquisite piece of lovely woodwork which can be displayed as is. It presently sits next to a fine art horse sculpture in my home & holds its own proudly. Given that my son & I used to create wool felt works together when he was a child, I can see adding a little felt vest & hat to the piece for special occasions. The best part about this piece is how it represents the beginnings of LEGO, honoring the beauty of toy making with wood. I will cherish this gift. I look forward to seeing more from LEGO in the form of sustainably produced wooden toys in the future. I welcome the blend of the historical with the modern. Bravo!',
// 					},
// 				],
// 			},
// 			{
// 				ID: 5,
// 				name: 'San Francisco',
// 				price: '255.99',
// 				rating: 4,
// 				imgSrc: '/40367.jpeg',
// 				avaliable: true,
// 				numberOfReviews: 30,
// 				countInStock: 4,
// 				themeLogo: '/categoryBrickHeadz.png',
// 				theme: 'Brick Headz',
// 				interests: 'Building',
// 				ages: 16,
// 				pieces: 1685,
// 				vipPoints: 780,
// 				itemNo: 21042,
// 				specificatonImg: '/specificationImg1.jpeg',
// 				specificationsParagraph:
// 					'Collectors of LEGO® BrickHeadz™ will love Goofy & Pluto (40378), featuring 2 classic Disney characters. Goofy, wearing his familiar turtleneck sweater and tall green hat, stands alongside the playful Pluto. The 2 lovable Disney friends come with sturdy baseplates that make them easy to display, either individually or alongside other BrickHeadz models. Collectors of LEGO BrickHeadz can combine elements of different sets to create fun, mashed-up characters of their own.',
// 				specificationsUl: [
// 					'This collectible building set lets kids construct fun LEGO® BrickHeadz™ models of 2 of Disney’s most recognizable characters: Goofy and Pluto.',
// 					'A great gift for LEGO® and Disney fans, this set provides an age-appropriate build-and-play experience for kids aged 10 and up',
// 					'With Goofy standing over 3” (8cm) tall and Pluto over 1” (5cm) tall, this 214-piece buildable toy delivers creative fun on a big scale as kids build, play and display.',
// 				],
// 				DeliveriesAndReturnsUl: [
// 					'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
// 					'Express shipping available at checkout.',
// 					'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
// 					'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
// 				],
// 				DeliveriesAndReturnsParagraph:
// 					'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
// 				Reviews: [
// 					{
// 						nickname: 'LEGOfans123',
// 						review:
// 							'Love it, hope to see Winnie the Pooh BrickHeadz in the future. Highly recommended ',
// 					},
// 					{
// 						nickname: 'lovingevenmorepenguins',
// 						review:
// 							'This set is really cute! Pluto has a really nice tail with really cute eyes which every Brickheadz always has the same as goofy but without the tail obviously but his hat is really nice. But I do really want a goofy and pluto figure soon and I bet as as other people.',
// 					},
// 				],
// 			},
// 			{
// 				ID: 6,
// 				name: 'Las Vegas',
// 				price: '119.99',
// 				rating: 1,
// 				imgSrc: '/21042.jpeg',
// 				avaliable: false,
// 				numberOfReviews: 30,
// 				countInStock: 0,
// 				themeLogo: '/categoryArchitecture.png',
// 				theme: 'Architecture',
// 				interests: 'Building',
// 				ages: 10,
// 				pieces: 214,
// 				vipPoints: 97,
// 				itemNo: 40378,
// 				specificatonImg: '/specificationImg2.jpeg',
// 				specificationsParagraph:
// 					'Fans of superhero battles will have endless fun role-playing this colossal clash, as 2 popular Marvel Avengers – the winged Falcon and super-soldier Black Widow – take on 2 enemy A.I.M. Agents. LEGO® Marvel Avengers Falcon & Black Widow Team Up (40418) ramps up the action even further with an extra-large, hand-operated 6-shooter, plus lots of ammunition.',
// 				specificationsUl: [
// 					'This LEGO® Marvel Avengers set includes 4 minifigures – Black Widow, Falcon and 2 A.I.M. Agents – and a large 6-shooter, plus ammunition.',
// 					'Falcon’s wings can be moved by hand into ‘flying’ position.',
// 					'The hand-controlled 6-shooter fires out large LEGO®projectiles.',
// 				],
// 				DeliveriesAndReturnsUl: [
// 					'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
// 					'Express shipping available at checkout.',
// 					'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
// 					'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
// 				],
// 				DeliveriesAndReturnsParagraph:
// 					'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
// 				Reviews: [
// 					{
// 						nickname: 'frontranger',
// 						review:
// 							'It seems to me that LEGO has opened up a whole new category for what they can offer with this piece. As mom to a lifelong LEGO builder, and also having grown up with LEGO myself, this little fig touches my heart. It is an exquisite piece of lovely woodwork which can be displayed as is. It presently sits next to a fine art horse sculpture in my home & holds its own proudly. Given that my son & I used to create wool felt works together when he was a child, I can see adding a little felt vest & hat to the piece for special occasions. The best part about this piece is how it represents the beginnings of LEGO, honoring the beauty of toy making with wood. I will cherish this gift. I look forward to seeing more from LEGO in the form of sustainably produced wooden toys in the future. I welcome the blend of the historical with the modern. Bravo!',
// 					},
// 				],
// 			},
// 			{
// 				ID: 7,
// 				name: 'Paris',
// 				price: '110.0',
// 				rating: 5,
// 				imgSrc: '/21043.jpeg',
// 				avaliable: true,
// 				numberOfReviews: 40,
// 				countInStock: 5,
// 				themeLogo: '/categoryArchitecture.png',
// 				theme: 'Architecture',
// 				interests: 'Building',
// 				ages: 8,
// 				pieces: 60,
// 				vipPoints: 78,
// 				itemNo: 40418,
// 				specificatonImg: '/specificationImg3.jpeg',
// 				specificationsParagraph:
// 					'Collectors of LEGO® BrickHeadz™ will love Goofy & Pluto (40378), featuring 2 classic Disney characters. Goofy, wearing his familiar turtleneck sweater and tall green hat, stands alongside the playful Pluto. The 2 lovable Disney friends come with sturdy baseplates that make them easy to display, either individually or alongside other BrickHeadz models. Collectors of LEGO BrickHeadz can combine elements of different sets to create fun, mashed-up characters of their own.',
// 				specificationsUl: [
// 					'This collectible building set lets kids construct fun LEGO® BrickHeadz™ models of 2 of Disney’s most recognizable characters: Goofy and Pluto.',
// 					'A great gift for LEGO® and Disney fans, this set provides an age-appropriate build-and-play experience for kids aged 10 and up',
// 					'With Goofy standing over 3” (8cm) tall and Pluto over 1” (5cm) tall, this 214-piece buildable toy delivers creative fun on a big scale as kids build, play and display.',
// 				],
// 				DeliveriesAndReturnsUl: [
// 					'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
// 					'Express shipping available at checkout.',
// 					'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
// 					'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
// 				],
// 				DeliveriesAndReturnsParagraph:
// 					'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
// 				Reviews: [
// 					{
// 						nickname: 'LEGOfans123',
// 						review:
// 							'Love it, hope to see Winnie the Pooh BrickHeadz in the future. Highly recommended ',
// 					},
// 					{
// 						nickname: 'lovingevenmorepenguins',
// 						review:
// 							'This set is really cute! Pluto has a really nice tail with really cute eyes which every Brickheadz always has the same as goofy but without the tail obviously but his hat is really nice. But I do really want a goofy and pluto figure soon and I bet as as other people.',
// 					},
// 				],
// 			},
// 			{
// 				ID: 8,
// 				name: 'London',
// 				price: '98.0',
// 				rating: 3,
// 				imgSrc: '/21045.jpeg',
// 				avaliable: true,
// 				numberOfReviews: 50,
// 				countInStock: 1,
// 				themeLogo: '/categoryArchitecture.png',
// 				theme: 'Architecture',
// 				interests: 'Building',
// 				ages: 16,
// 				pieces: 1685,
// 				vipPoints: 780,
// 				itemNo: 21042,
// 				specificatonImg: '/specificationImg4.jpeg',
// 				specificationsParagraph:
// 					'Fans of superhero battles will have endless fun role-playing this colossal clash, as 2 popular Marvel Avengers – the winged Falcon and super-soldier Black Widow – take on 2 enemy A.I.M. Agents. LEGO® Marvel Avengers Falcon & Black Widow Team Up (40418) ramps up the action even further with an extra-large, hand-operated 6-shooter, plus lots of ammunition.',
// 				specificationsUl: [
// 					'This LEGO® Marvel Avengers set includes 4 minifigures – Black Widow, Falcon and 2 A.I.M. Agents – and a large 6-shooter, plus ammunition.',
// 					'Falcon’s wings can be moved by hand into ‘flying’ position.',
// 					'The hand-controlled 6-shooter fires out large LEGO®projectiles.',
// 				],
// 				DeliveriesAndReturnsUl: [
// 					'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
// 					'Express shipping available at checkout.',
// 					'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
// 					'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
// 				],
// 				DeliveriesAndReturnsParagraph:
// 					'Some exclusions apply. Visit our Deliveries and Returns page for more information.',
// 				Reviews: [
// 					{
// 						nickname: 'frontranger',
// 						review:
// 							'It seems to me that LEGO has opened up a whole new category for what they can offer with this piece. As mom to a lifelong LEGO builder, and also having grown up with LEGO myself, this little fig touches my heart. It is an exquisite piece of lovely woodwork which can be displayed as is. It presently sits next to a fine art horse sculpture in my home & holds its own proudly. Given that my son & I used to create wool felt works together when he was a child, I can see adding a little felt vest & hat to the piece for special occasions. The best part about this piece is how it represents the beginnings of LEGO, honoring the beauty of toy making with wood. I will cherish this gift. I look forward to seeing more from LEGO in the form of sustainably produced wooden toys in the future. I welcome the blend of the historical with the modern. Bravo!',
// 					},
// 				],
// 			},
// 		],

// 		ArchitectureAccordion: [
// 			{ title: 'Product Type', filters: [{ Sets: 'Sets' }] },
// 			{ title: 'Age', filters: [{ Age: '12+' }] },
// 			{
// 				title: 'Price',
// 				filters: [
// 					{ Price1: '$25 - $50' },
// 					{ Price2: '$50 - $75' },
// 					{ Price3: '$75 - $100' },
// 					{ Price4: '$100+' },
// 				],
// 			},
// 			{ title: 'Theme', filters: [{ Theme: 'Architecture' }] },
// 			{ title: 'Interest', filters: [{ Interest: 'Buildings' }] },
// 			{
// 				title: 'Piece Count',
// 				filters: [
// 					{ PieceCount1: '250-499' },
// 					{ PieceCount2: '500-999' },
// 					{ PieceCount3: '1000+' },
// 				],
// 			},
// 			{ title: 'Availability', filters: [{ Availability: 'Out Of Stock' }] },
// 			{ title: 'Rating', filters: [{ Rating: this.fourStars() }] },
// 		],
// 	};

// 	fourStars() {
// 		return (
// 			<span>
// 				<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 				<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 				<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 				<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 				<StarTwoTone twoToneColor='orange' />
// 			</span>
// 		);
// 	}

// 	addNinja = (ninja) => {
// 		let newNinjas = [...this.state.ninjas, ninja];
// 		this.setState({
// 			ninjas: newNinjas,
// 		});
// 	};

// 	deleteNinja = (id) => {
// 		let ninjas = this.state.ninjas.filter((ninja) => {
// 			return ninja.ID !== id;
// 		});

// 		/*let deletedNinja = this.state.ninjas.find(ninja => {
//           return ninja.id === id;
//         })
//         let newNinjas = [...this.state.ninjas];
//         newNinjas.splice(deletedNinja.id-1, 1);*/

// 		this.setState({
// 			ninjas: ninjas,
// 		});
// 	};

// 	render() {
// 		return (
// 			<>
// 				<BrowserRouter>
// 					<Route
// 						component={() => <LegoLifePage />}
// 						path='/legolife'
// 						exact></Route>

// 					<Route component={() => <Slider />} path='/' exact></Route>
// 					<Route
// 						component={() => <Slider />}
// 						path='/architecture'
// 						exact></Route>

// 					<Route
// 						component={() => <Slider />}
// 						path='/architecture/:id'
// 						exact></Route>

// 					<Route
// 						component={() => <ProductPage />}
// 						path='/architecture/:id'></Route>

// 					<Route
// 						component={() => (
// 							<ArchitecturePage
// 								ninjas={this.state.ninjas}
// 								ArchitectureAccordion={this.state.ArchitectureAccordion}
// 							/>
// 						)}
// 						path='/architecture'
// 						exact></Route>

// 					<Route
// 						component={() => (
// 							<CardContainer
// 								title='Trending now'
// 								data={this.state.TrendingNow}
// 							/>
// 						)}
// 						path='/'
// 						exact></Route>

// 					<Route
// 						component={() => (
// 							<CardContainer
// 								title='Spotlight on'
// 								data={this.state.SpotlightOn}
// 							/>
// 						)}
// 						path='/'
// 						exact></Route>
// 				</BrowserRouter>
// 			</>
// 		);
// 	}
// }

// export default HomePage;
