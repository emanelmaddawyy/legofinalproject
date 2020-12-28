import { Component } from 'react';

import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import UsersPage from './Pages/UsersPage';
import AboutusPage from './Pages/AboutusPage';
import FindstorePage from './Pages/FindstorePage';
import KidsPage from './Pages/KidsPage';
import CartPage from './Pages/CartPage';
import OffersPage from './Pages/Offers&Sale';
import ExclusivesPage from './Pages/ExclusivesPage';
import ForgetUsernamePage from './Pages/ForgetUsername';
import ForgetPasswordPage from './Pages/ForgetPasswordPage';

import { BrowserRouter, Route } from 'react-router-dom';
import ArchitecturePage from './Pages/ArchitecturePage';
import LegoLifePage from './Pages/LegoLifePage';
import ProductPage from './Pages/ProductPage';
import Cart from './components/Cart/Cart.js';
import WishList from './components/WishList/Wishlist';
import './App.css';
import './Pages/HomePage.css';
import VipPage from './Pages/VipPage';
import { StarFilled, StarTwoTone } from '@ant-design/icons';
import Rating from './components/Rating/Rating';
import axios from 'axios';
import ScrollToTop from './components/ScrollToTop';
import LegoLifeAppPage from './Pages/LegoLifeSubPages/LegoLifeAppPage';
import LegoLifeFAQPage from './Pages/LegoLifeSubPages/LegoLifeFAQPage';
import LegoLifeMagazinePage from './Pages/LegoLifeSubPages/LegoLifeMagazinePage';
import ContactUs from './Pages/ContactUs';
import ContactUsHelpTopics from './Pages/ContactUsSubPages/ContactUsHelpTopics';
import ContactUsDeviceGuide from './Pages/ContactUsSubPages/ContactUsDeviceGuide';
import BrickSeparator from './Pages/ContactUsSubPages/BrickSeparator';
import KeepDataSafe from './Pages/ContactUsSubPages/KeepDataSafe';
import Deliveries from './Pages/ContactUsSubPages/HelpTopicsSubPages/Deliveries';
import OnlineShop from './Pages/ContactUsSubPages/HelpTopicsSubPages/OnlineShop';
import BrickFacts from './Pages/ContactUsSubPages/HelpTopicsSubPages/BrickFacts';
import BuildingInstructions from './Pages/ContactUsSubPages/HelpTopicsSubPages/BuildingInstructions';
import BuyingParts from './Pages/ContactUsSubPages/HelpTopicsSubPages/BuyingParts';
import HelpContactUs from './Pages/ContactUsSubPages/HelpTopicsSubPages/HelpContactUs';
import LegoAccount from './Pages/ContactUsSubPages/HelpTopicsSubPages/LegoAccount';
import ElectronicsRobotics from './Pages/ContactUsSubPages/HelpTopicsSubPages/ElectronicsRobotics';
import ThemesSets from './Pages/ContactUsSubPages/HelpTopicsSubPages/ThemesSets';
import LegoEventsTours from './Pages/ContactUsSubPages/HelpTopicsSubPages/LegoEventsTours';
import LegoLand from './Pages/ContactUsSubPages/HelpTopicsSubPages/LegoLand';
import CovidResponse from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CovidResponse';
import LegoAvailabilityStatuses from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LegoAvailabilityStatuses';
import BuyingIndividualParts from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BuyingIndividualParts';
import ReplacementPartsForOlderSets from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ReplacementPartsForOlderSets';
import CreatingMinifigure from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CreatingMinifigure';
import LegoDigitalDesigner from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LegoDigitalDesigner';
import IdentifyingLegoSet from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/IdentifyingLegoSet';
import TrackingOrders from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/TrackingOrders';
import WhenPartsDelivered from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/WhenPartsDelivered';
import BackorderedItems from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BackorderedItems';
import MissingParts from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/MissingParts';
import WrongDamagedOrders from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/WrongDamagedOrders';
import BricksTakingLong from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BricksTakingLong';
import ChangeRegion from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ChangeRegion';
import OrderingOnline from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/OrderingOnline';
import ShopWebErrors from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ShopWebErrors';
import CancelOrder from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CancelOrder';
import AddPromotional from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/AddPromotional';
import LegoGiftCard from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LegoGiftCard';
import RecyclingLego from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/RecyclingLego';
import CleaningLego from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CleaningLego';
import ComparingBricksPlates from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ComparingBricksPlates';
import WhatBricksMadeOf from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/WhatBricksMadeOf';
import HowBricksMade from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/HowBricksMade';
import WaterProof from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/WaterProof';
import BuildingTips from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BuildingTips';
import ReplaceInstructions from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ReplaceInstructions';
import DesignInstructions from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/DesignInstructions';
import PrintedMaterials from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/PrintedMaterials';
import Minion from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/Minion';
import ReplacingBuyingMinifigures from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ReplacingBuyingMinifigures';
import BuyLicensedParts from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BuyLicensedParts';
import WriteLegoLife from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/WriteLegoLife';
import Jobs from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/Jobs';
import CustomerServiceTeam from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CustomerServiceTeam';
import CoolCreation from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CoolCreation';
import SellingLego from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/SellingLego';
import ContactingCustomerService from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ContactingCustomerService';
import RegisteredAccountToChild from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/RegisteredAccountToChild';
import AccountandHowToUseIt from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/AccountandHowToUseIt';
import SubscribeToNewsLetter from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/SubscribeToNewsLetter';
import DeleteAccount from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/DeleteAccount';
import DidntGetEmail from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/DidntGetEmail';
import CantRememberUsername from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CantRememberUsername';
import MakingChangesToAccount from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/MakingChangesToAccount';
import ConnectLegoBoost from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ConnectLegoBoost';
import BOOSTCompatible from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BOOSTCompatible';
import MindStorm from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/MindStorm';
import HearingSound from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/HearingSound';
import StarWars from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/StarWars';
import LightLegoBoost from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LightLegoBoost';
import RetiredSets from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/RetiredSets';
import DesignLego from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/DesignLego';
import PriceLego from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/PriceLego';
import BuyLego from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BuyLego';
import NewSetsAvailable from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/NewSetsAvailable';
import LEGOAmbassador from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LEGOAmbassador';
import EventsNearYou from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/EventsNearYou';
import LegoInside from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LegoInside';
import DiscoveryCenterApp from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/DiscoveryCenterApp';
import LEGOHouse from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LEGOHouse';
import EventsAtStores from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/EventsAtStores';
import LEGOLANDlocations from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LEGOLANDlocations';
import LEGOLANDSupport from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LEGOLANDSupport';
import DiscoveryAroundTheWorld from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/DiscoveryAroundTheWorld';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import PrivacyPolicyCookies from './Pages/PrivacyPolicyCookies';
import Shipping from './Pages/Shipping';
import MarioApp from './Pages/DeviceGuideSubPages/MarioApp';
import MindstormRobot from './Pages/DeviceGuideSubPages/MindstormRobot';
import BoostStarwars from './Pages/DeviceGuideSubPages/BoostStarwars';
import ControlPlus from './Pages/DeviceGuideSubPages/ControlPlus';
import PoweredUp from './Pages/DeviceGuideSubPages/PoweredUp';
import HiddenSide from './Pages/DeviceGuideSubPages/HiddenSide';
import ARPhotoShoot from './Pages/DeviceGuideSubPages/ARPhotoShoot';
import BoostApp from './Pages/DeviceGuideSubPages/BoostApp';
import MovieMakerApp from './Pages/DeviceGuideSubPages/MovieMakerApp';
import DuploApp from './Pages/DeviceGuideSubPages/DuploApp';

class App extends Component {
	staticProducts = [
		//this array for demo uncomment below axios function to work with DB
		{
			ID: 1,
			name: 'Empire State Building',
			price: '119.99',
			rating: 1,
			imgSrc: '/21042.jpeg',
			numberOfProduct: 3,
			isInWishlist: false,
			avaliable: true,
			numberOfReviews: 2,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 8,
			pieces: 60,
			vipPoints: 78,
			itemNo: 40418,
			specificatonImg: '/specificationImg1.jpeg',
			specificationsParagraph:
				'Collectors of LEGO® BrickHeadz™ will love Goofy & Pluto (40378), featuring 2 classic Disney characters. Goofy, wearing his familiar turtleneck sweater and tall green hat, stands alongside the playful Pluto. The 2 lovable Disney friends come with sturdy baseplates that make them easy to display, either individually or alongside other BrickHeadz models. Collectors of LEGO BrickHeadz can combine elements of different sets to create fun, mashed-up characters of their own.',
			specificationsUl: [
				'This collectible building set lets kids construct fun LEGO® BrickHeadz™ models of 2 of Disney’s most recognizable characters: Goofy and Pluto.',
				'A great gift for LEGO® and Disney fans, this set provides an age-appropriate build-and-play experience for kids aged 10 and up',
				'With Goofy standing over 3” (8cm) tall and Pluto over 1” (5cm) tall, this 214-piece buildable toy delivers creative fun on a big scale as kids build, play and display.',
			],
			DeliveriesAndReturnsUl: [
				'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
				'Express shipping available at checkout.',
				'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
				'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
			],

			Reviews: [
				{
					nickname: 'LEGOfans123',
					review:
						'Love it, hope to see Winnie the Pooh BrickHeadz in the future. Highly recommended ',
				},
				{
					nickname: 'lovingevenmorepenguins',
					review:
						'This set is really cute! Pluto has a really nice tail with really cute eyes which every Brickheadz always has the same as goofy but without the tail obviously but his hat is really nice. But I do really want a goofy and pluto figure soon and I bet as as other people.',
				},
			],
		},
		{
			ID: 2,
			name: 'The White House',
			price: '110.99',
			rating: 5,
			imgSrc: '/21043.jpeg',
			numberOfProduct: 4,
			isInWishlist: false,
			avaliable: true,
			numberOfReviews: 1,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 16,
			pieces: 1685,
			vipPoints: 780,
			itemNo: 21042,
			specificatonImg: '/specificationImg2.jpeg',
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

			Reviews: [
				{
					nickname: 'frontranger',
					review:
						'It seems to me that LEGO has opened up a whole new category for what they can offer with this piece. As mom to a lifelong LEGO builder, and also having grown up with LEGO myself, this little fig touches my heart. It is an exquisite piece of lovely woodwork which can be displayed as is. It presently sits next to a fine art horse sculpture in my home & holds its own proudly. Given that my son & I used to create wool felt works together when he was a child, I can see adding a little felt vest & hat to the piece for special occasions. The best part about this piece is how it represents the beginnings of LEGO, honoring the beauty of toy making with wood. I will cherish this gift. I look forward to seeing more from LEGO in the form of sustainably produced wooden toys in the future. I welcome the blend of the historical with the modern. Bravo!',
				},
			],
		},
		{
			ID: 3,
			name: 'Trafalgar Square',
			price: '98.99',
			rating: 3,
			imgSrc: '/21046.jpeg',
			numberOfProduct: 0,
			isInWishlist: false,
			avaliable: false,
			numberOfReviews: 2,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 10,
			pieces: 214,
			vipPoints: 97,
			itemNo: 40378,
			specificatonImg: '/specificationImg3.jpeg',
			specificationsParagraph:
				'Collectors of LEGO® BrickHeadz™ will love Goofy & Pluto (40378), featuring 2 classic Disney characters. Goofy, wearing his familiar turtleneck sweater and tall green hat, stands alongside the playful Pluto. The 2 lovable Disney friends come with sturdy baseplates that make them easy to display, either individually or alongside other BrickHeadz models. Collectors of LEGO BrickHeadz can combine elements of different sets to create fun, mashed-up characters of their own.',
			specificationsUl: [
				'This collectible building set lets kids construct fun LEGO® BrickHeadz™ models of 2 of Disney’s most recognizable characters: Goofy and Pluto.',
				'A great gift for LEGO® and Disney fans, this set provides an age-appropriate build-and-play experience for kids aged 10 and up',
				'With Goofy standing over 3” (8cm) tall and Pluto over 1” (5cm) tall, this 214-piece buildable toy delivers creative fun on a big scale as kids build, play and display.',
			],
			DeliveriesAndReturnsUl: [
				'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
				'Express shipping available at checkout.',
				'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
				'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
			],

			Reviews: [
				{
					nickname: 'LEGOfans123',
					review:
						'Love it, hope to see Winnie the Pooh BrickHeadz in the future. Highly recommended ',
				},
				{
					nickname: 'lovingevenmorepenguins',
					review:
						'This set is really cute! Pluto has a really nice tail with really cute eyes which every Brickheadz always has the same as goofy but without the tail obviously but his hat is really nice. But I do really want a goofy and pluto figure soon and I bet as as other people.',
				},
			],
		},
		{
			ID: 4,
			name: 'Statue of Liberty',
			price: '70.50',
			rating: 2,
			imgSrc: '/21045.jpeg',
			numberOfProduct: 4,
			isInWishlist: false,
			avaliable: true,
			numberOfReviews: 1,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 8,
			pieces: 60,
			vipPoints: 78,
			itemNo: 40418,
			specificatonImg: '/specificationImg4.jpeg',
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

			Reviews: [
				{
					nickname: 'frontranger',
					review:
						'It seems to me that LEGO has opened up a whole new category for what they can offer with this piece. As mom to a lifelong LEGO builder, and also having grown up with LEGO myself, this little fig touches my heart. It is an exquisite piece of lovely woodwork which can be displayed as is. It presently sits next to a fine art horse sculpture in my home & holds its own proudly. Given that my son & I used to create wool felt works together when he was a child, I can see adding a little felt vest & hat to the piece for special occasions. The best part about this piece is how it represents the beginnings of LEGO, honoring the beauty of toy making with wood. I will cherish this gift. I look forward to seeing more from LEGO in the form of sustainably produced wooden toys in the future. I welcome the blend of the historical with the modern. Bravo!',
				},
			],
		},
		{
			ID: 5,
			name: 'San Francisco',
			price: '255.99',
			rating: 4,
			imgSrc: '/40367.jpeg',
			numberOfProduct: 0,
			isInWishlist: false,
			avaliable: false,
			numberOfReviews: 2,
			themeLogo: '/categoryBrickHeadz.png',
			theme: 'Brick Headz',
			interests: 'Building',
			ages: 16,
			pieces: 1685,
			vipPoints: 780,
			itemNo: 21042,
			specificatonImg: '/specificationImg1.jpeg',
			specificationsParagraph:
				'Collectors of LEGO® BrickHeadz™ will love Goofy & Pluto (40378), featuring 2 classic Disney characters. Goofy, wearing his familiar turtleneck sweater and tall green hat, stands alongside the playful Pluto. The 2 lovable Disney friends come with sturdy baseplates that make them easy to display, either individually or alongside other BrickHeadz models. Collectors of LEGO BrickHeadz can combine elements of different sets to create fun, mashed-up characters of their own.',
			specificationsUl: [
				'This collectible building set lets kids construct fun LEGO® BrickHeadz™ models of 2 of Disney’s most recognizable characters: Goofy and Pluto.',
				'A great gift for LEGO® and Disney fans, this set provides an age-appropriate build-and-play experience for kids aged 10 and up',
				'With Goofy standing over 3” (8cm) tall and Pluto over 1” (5cm) tall, this 214-piece buildable toy delivers creative fun on a big scale as kids build, play and display.',
			],
			DeliveriesAndReturnsUl: [
				'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
				'Express shipping available at checkout.',
				'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
				'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
			],

			Reviews: [
				{
					nickname: 'LEGOfans123',
					review:
						'Love it, hope to see Winnie the Pooh BrickHeadz in the future. Highly recommended ',
				},
				{
					nickname: 'lovingevenmorepenguins',
					review:
						'This set is really cute! Pluto has a really nice tail with really cute eyes which every Brickheadz always has the same as goofy but without the tail obviously but his hat is really nice. But I do really want a goofy and pluto figure soon and I bet as as other people.',
				},
			],
		},
		{
			ID: 6,
			name: 'Las Vegas',
			price: '119.99',
			rating: 1,
			imgSrc: '/21043.jpeg',
			numberOfProduct: 5,
			isInWishlist: false,
			avaliable: true,
			numberOfReviews: 1,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 10,
			pieces: 214,
			vipPoints: 97,
			itemNo: 40378,
			specificatonImg: '/specificationImg2.jpeg',
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

			Reviews: [
				{
					nickname: 'frontranger',
					review:
						'It seems to me that LEGO has opened up a whole new category for what they can offer with this piece. As mom to a lifelong LEGO builder, and also having grown up with LEGO myself, this little fig touches my heart. It is an exquisite piece of lovely woodwork which can be displayed as is. It presently sits next to a fine art horse sculpture in my home & holds its own proudly. Given that my son & I used to create wool felt works together when he was a child, I can see adding a little felt vest & hat to the piece for special occasions. The best part about this piece is how it represents the beginnings of LEGO, honoring the beauty of toy making with wood. I will cherish this gift. I look forward to seeing more from LEGO in the form of sustainably produced wooden toys in the future. I welcome the blend of the historical with the modern. Bravo!',
				},
			],
		},
		{
			ID: 7,
			name: 'Paris',
			price: '110.0',
			rating: 5,
			imgSrc: '/21042.jpeg',
			numberOfProduct: 0,
			isInWishlist: false,
			avaliable: false,
			numberOfReviews: 2,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 8,
			pieces: 60,
			vipPoints: 78,
			itemNo: 40418,
			specificatonImg: '/specificationImg3.jpeg',
			specificationsParagraph:
				'Collectors of LEGO® BrickHeadz™ will love Goofy & Pluto (40378), featuring 2 classic Disney characters. Goofy, wearing his familiar turtleneck sweater and tall green hat, stands alongside the playful Pluto. The 2 lovable Disney friends come with sturdy baseplates that make them easy to display, either individually or alongside other BrickHeadz models. Collectors of LEGO BrickHeadz can combine elements of different sets to create fun, mashed-up characters of their own.',
			specificationsUl: [
				'This collectible building set lets kids construct fun LEGO® BrickHeadz™ models of 2 of Disney’s most recognizable characters: Goofy and Pluto.',
				'A great gift for LEGO® and Disney fans, this set provides an age-appropriate build-and-play experience for kids aged 10 and up',
				'With Goofy standing over 3” (8cm) tall and Pluto over 1” (5cm) tall, this 214-piece buildable toy delivers creative fun on a big scale as kids build, play and display.',
			],
			DeliveriesAndReturnsUl: [
				'Free standard 3 to 5 business day shipping on all merchandise orders over $35!',
				'Express shipping available at checkout.',
				'Custom parts orders are sent separately from merchandise and take additional time to process and deliver.',
				'Unopened merchandise may be returned for a full refund within 90 days of receipt of your order.',
			],

			Reviews: [
				{
					nickname: 'LEGOfans123',
					review:
						'Love it, hope to see Winnie the Pooh BrickHeadz in the future. Highly recommended ',
				},
				{
					nickname: 'lovingevenmorepenguins',
					review:
						'This set is really cute! Pluto has a really nice tail with really cute eyes which every Brickheadz always has the same as goofy but without the tail obviously but his hat is really nice. But I do really want a goofy and pluto figure soon and I bet as as other people.',
				},
			],
		},
		{
			ID: 8,
			name: 'London',
			price: '98.0',
			rating: 3,
			imgSrc: '/40367.jpeg',
			numberOfProduct: 5,
			isInWishlist: false,
			avaliable: true,
			numberOfReviews: 1,
			themeLogo: '/categoryArchitecture.png',
			theme: 'Architecture',
			interests: 'Building',
			ages: 16,
			pieces: 1685,
			vipPoints: 780,
			itemNo: 21042,
			specificatonImg: '/specificationImg4.jpeg',
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
			Reviews: [
				{
					nickname: 'frontranger',
					review:
						'It seems to me that LEGO has opened up a whole new category for what they can offer with this piece. As mom to a lifelong LEGO builder, and also having grown up with LEGO myself, this little fig touches my heart. It is an exquisite piece of lovely woodwork which can be displayed as is. It presently sits next to a fine art horse sculpture in my home & holds its own proudly. Given that my son & I used to create wool felt works together when he was a child, I can see adding a little felt vest & hat to the piece for special occasions. The best part about this piece is how it represents the beginnings of LEGO, honoring the beauty of toy making with wood. I will cherish this gift. I look forward to seeing more from LEGO in the form of sustainably produced wooden toys in the future. I welcome the blend of the historical with the modern. Bravo!',
				},
			],
		},
	];
	state = {
		productsToBeDis: [],
		products: [],
		wishlist: [],
		productsNumber: 0,
		wishlistNumber: 0,

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
			{
				title: 'Availability',
				filters: [
					{ Availability1: 'Out Of Stock' },
					// { Availability2: 'Available Now' },
				],
			},
			{
				title: 'Rating',
				filters: [
					// { Rating1: <Rating value='1' color='#ffcf00' /> },
					// { Rating2: <Rating value='2' color='#ffcf00' /> },
					// { Rating3: <Rating value='3' color='#ffcf00' /> },
					{ Rating4: <Rating value='4' color='#ffcf00' /> },
					// { Rating5: <Rating value='5' color='#ffcf00' /> },
				],
			},
		],
	};

	numberOfProductsCalc = (products) => {
		let result = 0;
		products.forEach((product) => {
			result += product.numberOfProduct;
		});
		return result;
	};
	componentDidMount() {
		// axios.get(`http://localhost:5000/api/customers`)
		//   .then(res => {
		//     const productsToBeDis = res.data;
		//     this.setState({ productsToBeDis });
		//   }).catch(err=>console.log(err.message));
		this.state.productsToBeDis = this.staticProducts; //remove it if u will uncomment axios
		this.state.products = localStorage.getItem('products')
			? JSON.parse(localStorage.getItem('products'))
			: [];
		this.state.wishlist = localStorage.getItem('wishlist')
			? JSON.parse(localStorage.getItem('wishlist'))
			: [];
		this.setState({
			wishlist: this.state.wishlist,
			products: this.state.products,
			productsNumber: this.numberOfProductsCalc(this.state.products),
			wishlistNumber: this.state.wishlist.length,
		});
	}

	isAddedBeforeToTheWishlist(wishlist, product) {
		const isFounded = wishlist.find((p) => {
			return p.ID === product.ID;
		});
		if (!isFounded) {
			product.isInWishlist = true;
			return false;
		} else {
			return true;
		}
	}
	addProductToWishlist = (product, e) => {
		const is = this.isAddedBeforeToTheWishlist(this.state.wishlist, product);
		let newSetOfProducts;
		if (is) {
			newSetOfProducts = [...this.state.wishlist];
		} else if (!is) {
			newSetOfProducts = [...this.state.wishlist, product];
			this.state.wishlistNumber += 1;
		}
		const isInCart = this.isAddedBefore(this.state.products, product);
		if (isInCart) {
			//delete product from cart, make minus cart number by 1 and plus wishlist by 1
		}
		this.setState({
			wishlist: newSetOfProducts,
			wishlistNumber: this.state.wishlist.length + 1,
		});
		e.target.innerHTML =
			'<path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>';
		e.target.style = 'cursor: auto';
		localStorage.setItem('wishlist', JSON.stringify(newSetOfProducts));
	};
	deleteProductFromWishlist = (id) => {
		const newSetOfProducts = this.state.wishlist.filter((product) => {
			return product.ID !== id;
		});

		localStorage.setItem('wishlist', JSON.stringify(newSetOfProducts));

		this.setState({
			wishlist: newSetOfProducts,
			wishlistNumber: this.state.wishlist.length - 1,
		});
	};
	isAddedBefore(products, product) {
		const isFounded = products.find((p) => {
			return p.ID === product.ID;
		});
		if (!isFounded) {
			return false;
		} else {
			isFounded.numberOfProduct += 1;
			return true;
		}
	}
	addProductToCart = (product) => {
		const is = this.isAddedBefore(this.state.products, product);
		let newSetOfProducts;
		if (is) {
			newSetOfProducts = [...this.state.products];
		} else {
			newSetOfProducts = [...this.state.products, product];
		}
		this.state.productsNumber += 1;
		this.setState({
			products: newSetOfProducts,
			productsNumber: this.state.productsNumber,
		});
		localStorage.setItem('products', JSON.stringify(newSetOfProducts));
	};

	deleteProductFromCart = (deletedProduct) => {
		const newSetOfProducts = this.state.products.filter((product) => {
			return product.ID !== deletedProduct.ID;
		});

		localStorage.setItem('products', JSON.stringify(newSetOfProducts));

		this.state.productsNumber -= deletedProduct.numberOfProduct;
		this.setState({
			products: newSetOfProducts,
			productsNumber: this.state.productsNumber,
		});
	};

	render() {
		return (
			<>
				{/* <span>Cart: {this.state.productsNumber} </span>
				<span>Wishlist: {this.state.wishlistNumber} </span> */}

				<BrowserRouter>
					<ScrollToTop />

					<Route path='/Login' exact component={() => <LoginPage />}></Route>
					<Route
						path='/Register'
						exact
						component={() => <RegisterPage />}></Route>
					<Route path='/users' exact component={() => <UsersPage />}></Route>
					<Route
						path='/aboutus'
						exact
						component={() => <AboutusPage />}></Route>
					<Route
						path='/findstore'
						exact
						component={() => <FindstorePage />}></Route>
					<Route
						path='/legolife'
						exact
						component={() => <LegoLifePage />}></Route>

					<Route
						path='/legolifeapp'
						exact
						component={() => <LegoLifeAppPage />}></Route>

					<Route
						path='/legolifemagazine'
						exact
						component={() => <LegoLifeMagazinePage />}></Route>

					<Route
						path='/legolifefaq'
						exact
						component={() => <LegoLifeFAQPage />}></Route>

					<Route path='/kids' exact component={() => <KidsPage />}></Route>
					<Route path='/offers' exact component={() => <OffersPage />}></Route>
					<Route
						path='/exclusives'
						exact
						component={() => <ExclusivesPage />}></Route>
					<Route
						path='/forgetusername'
						exact
						component={() => <ForgetUsernamePage />}></Route>
					<Route
						path='/forgetpassword'
						exact
						component={() => <ForgetPasswordPage />}></Route>

					<Route
						component={() => (
							<HomePage
								TrendingTitle='Trending now'
								TrendingData={this.state.TrendingNow}
								addProductToCart={this.addProductToCart}
								addProductToWishlist={this.addProductToWishlist}
								SpotlightTitle='Spotlight on'
								SpotlightData={this.state.SpotlightOn}
								products={this.state.productsToBeDis}
							/>
						)}
						path='/'
						exact></Route>

					<Route
						component={() => (
							<Cart
								products={this.state.products}
								addProductToWishlist={this.addProductToWishlist}
								deleteProductFromCart={this.deleteProductFromCart}
							/>
						)}
						path='/cart'
						exact></Route>

					<Route
						component={() => (
							<WishList
								wishlist={this.state.wishlist}
								addProductToCart={this.addProductToCart}
								deleteProductFromWishlist={this.deleteProductFromWishlist}
							/>
						)}
						path='/wishlist'
						exact></Route>

					<Route
						component={() => (
							<ArchitecturePage
								ArchitectureAccordion={this.state.ArchitectureAccordion}
								addProductToCart={this.addProductToCart}
								addProductToWishlist={this.addProductToWishlist}
								products={this.state.productsToBeDis}
							/>
						)}
						path='/architecture'
						exact></Route>

					<Route
						component={() => (
							<ProductPage
								products={this.state.productsToBeDis}
								addProductToCart={this.addProductToCart}
								addProductToWishlist={this.addProductToWishlist}
							/>
						)}
						path='/architecture/:id'
						exact></Route>

					<Route path='/vip' exact component={() => <VipPage />}></Route>

					<Route path='/service' exact component={() => <ContactUs />}></Route>
					<Route
						path='/help'
						exact
						component={() => <ContactUsHelpTopics />}></Route>
					<Route
						path='/deviceguide'
						exact
						component={() => <ContactUsDeviceGuide />}></Route>
					<Route
						path='/brickseparator'
						exact
						component={() => <BrickSeparator />}></Route>
					<Route
						path='/keepdatasafe'
						exact
						component={() => <KeepDataSafe />}></Route>
					<Route
						path='/deliveries'
						exact
						component={() => <Deliveries />}></Route>
					<Route
						path='/onlineshop'
						exact
						component={() => <OnlineShop />}></Route>
					<Route
						path='/brickfacts'
						exact
						component={() => <BrickFacts />}></Route>
					<Route
						path='/buildinginstructions'
						exact
						component={() => <BuildingInstructions />}></Route>
					<Route
						path='/buyingParts'
						exact
						component={() => <BuyingParts />}></Route>
					<Route
						path='/helpcontactus'
						exact
						component={() => <HelpContactUs />}></Route>
					<Route
						path='/legoaccount'
						exact
						component={() => <LegoAccount />}></Route>
					<Route
						path='/electronicsrobotics'
						exact
						component={() => <ElectronicsRobotics />}></Route>
					<Route
						path='/themessets'
						exact
						component={() => <ThemesSets />}></Route>
					<Route
						path='/legoeventstours'
						exact
						component={() => <LegoEventsTours />}></Route>
					<Route path='/legoland' exact component={() => <LegoLand />}></Route>
					<Route
						path='/covidresponse'
						exact
						component={() => <CovidResponse />}></Route>
					<Route
						path='/legoavailabilitystatuses'
						exact
						component={() => <LegoAvailabilityStatuses />}></Route>
					<Route
						path='/buyingindividualparts'
						exact
						component={() => <BuyingIndividualParts />}></Route>
					<Route
						path='/replacementpartsforoldersets'
						exact
						component={() => <ReplacementPartsForOlderSets />}></Route>
					<Route
						path='/creatingminifigure'
						exact
						component={() => <CreatingMinifigure />}></Route>
					<Route
						path='/legodigitaldesigner'
						exact
						component={() => <LegoDigitalDesigner />}></Route>
					<Route
						path='/identifyinglegoset'
						exact
						component={() => <IdentifyingLegoSet />}></Route>
					<Route
						path='/trackingorders'
						exact
						component={() => <TrackingOrders />}></Route>
					<Route
						path='/whenpartsdelivered'
						exact
						component={() => <WhenPartsDelivered />}></Route>
					<Route
						path='/backordereditems'
						exact
						component={() => <BackorderedItems />}></Route>
					<Route
						path='/missingparts'
						exact
						component={() => <MissingParts />}></Route>
					<Route
						path='/wrongdamagedorders'
						exact
						component={() => <WrongDamagedOrders />}></Route>
					<Route
						path='/brickstakinglong'
						exact
						component={() => <BricksTakingLong />}></Route>
					<Route
						path='/changeregion'
						exact
						component={() => <ChangeRegion />}></Route>
					<Route
						path='/orderingonline'
						exact
						component={() => <OrderingOnline />}></Route>
					<Route
						path='/shopweberrors'
						exact
						component={() => <ShopWebErrors />}></Route>
					<Route
						path='/cancelorder'
						exact
						component={() => <CancelOrder />}></Route>
					<Route
						path='/addpromotional'
						exact
						component={() => <AddPromotional />}></Route>
					<Route
						path='/legogiftcard'
						exact
						component={() => <LegoGiftCard />}></Route>
					<Route
						path='/recyclinglego'
						exact
						component={() => <RecyclingLego />}></Route>
					<Route
						path='/cleaninglego'
						exact
						component={() => <CleaningLego />}></Route>
					<Route
						path='/whatbricksmadeof'
						exact
						component={() => <WhatBricksMadeOf />}></Route>
					<Route
						path='/comparingbricksplates'
						exact
						component={() => <ComparingBricksPlates />}></Route>
					<Route
						path='/howbricksmade'
						exact
						component={() => <HowBricksMade />}></Route>
					<Route
						path='/buildingtips'
						exact
						component={() => <BuildingTips />}></Route>
					<Route
						path='/waterproof'
						exact
						component={() => <WaterProof />}></Route>
					<Route
						path='/replaceinstructions'
						exact
						component={() => <ReplaceInstructions />}></Route>
					<Route
						path='/designinstructions'
						exact
						component={() => <DesignInstructions />}></Route>
					<Route
						path='/printedmaterials'
						exact
						component={() => <PrintedMaterials />}></Route>
					<Route path='/minion' exact component={() => <Minion />}></Route>
					<Route
						path='/replacingbuyingminifigures'
						exact
						component={() => <ReplacingBuyingMinifigures />}></Route>
					<Route
						path='/buylicensedparts'
						exact
						component={() => <BuyLicensedParts />}></Route>
					<Route
						path='/writelegolife'
						exact
						component={() => <WriteLegoLife />}></Route>
					<Route path='/jobswithlego' exact component={() => <Jobs />}></Route>
					<Route
						path='/customerserviceteam'
						exact
						component={() => <CustomerServiceTeam />}></Route>
					<Route
						path='/coolcreation'
						exact
						component={() => <CoolCreation />}></Route>
					<Route
						path='/sellinglego'
						exact
						component={() => <SellingLego />}></Route>
					<Route
						path='/contactingcustomerservice'
						exact
						component={() => <ContactingCustomerService />}></Route>
					<Route
						path='/registeredaccounttochild'
						exact
						component={() => <RegisteredAccountToChild />}></Route>
					<Route
						path='/accountandhowtouseit'
						exact
						component={() => <AccountandHowToUseIt />}></Route>
					<Route
						path='/subscribetonewsletter'
						exact
						component={() => <SubscribeToNewsLetter />}></Route>
					<Route
						path='/cantrememberusername'
						exact
						component={() => <CantRememberUsername />}></Route>
					<Route
						path='/didntgetemail'
						exact
						component={() => <DidntGetEmail />}></Route>
					<Route
						path='/deleteaccount'
						exact
						component={() => <DeleteAccount />}></Route>
					<Route
						path='/makingchangestoaccount'
						exact
						component={() => <MakingChangesToAccount />}></Route>
					<Route
						path='/connectlegoboost'
						exact
						component={() => <ConnectLegoBoost />}></Route>
					<Route
						path='/boostcompatible'
						exact
						component={() => <BOOSTCompatible />}></Route>
					<Route
						path='/mindstorm'
						exact
						component={() => <MindStorm />}></Route>
					<Route
						path='/hearingsound'
						exact
						component={() => <HearingSound />}></Route>
					<Route path='/starwars' exact component={() => <StarWars />}></Route>
					<Route
						path='/lightlegoboost'
						exact
						component={() => <LightLegoBoost />}></Route>
					<Route
						path='/retiredsets'
						exact
						component={() => <RetiredSets />}></Route>
					<Route
						path='/designlego'
						exact
						component={() => <DesignLego />}></Route>
					<Route
						path='/pricelego'
						exact
						component={() => <PriceLego />}></Route>
					<Route path='/buylego' exact component={() => <BuyLego />}></Route>
					<Route
						path='/newsetsavailable'
						exact
						component={() => <NewSetsAvailable />}></Route>
					<Route
						path='/legoambassador'
						exact
						component={() => <LEGOAmbassador />}></Route>
					<Route
						path='/eventsnearyou'
						exact
						component={() => <EventsNearYou />}></Route>
					<Route
						path='/legoinside'
						exact
						component={() => <LegoInside />}></Route>
					<Route
						path='/discoverycenterapp'
						exact
						component={() => <DiscoveryCenterApp />}></Route>
					<Route
						path='/eventsatstores'
						exact
						component={() => <EventsAtStores />}></Route>
					<Route
						path='/legoHouse'
						exact
						component={() => <LEGOHouse />}></Route>
					<Route
						path='/legolandlocations'
						exact
						component={() => <LEGOLANDlocations />}></Route>
					<Route
						path='/legolandsupport'
						exact
						component={() => <LEGOLANDSupport />}></Route>
					<Route
						path='/disccoveryaroundtheworld'
						exact
						component={() => <DiscoveryAroundTheWorld />}></Route>
					<Route
						path='/privacypolicy'
						exact
						component={() => <PrivacyPolicy />}></Route>
					<Route
						path='/privacypolicycookies'
						exact
						component={() => <PrivacyPolicyCookies />}></Route>
					<Route path='/shipping' exact component={() => <Shipping />}></Route>

					<Route path='/marioapp' exact component={() => <MarioApp />}></Route>
					<Route
						path='/mindstormrobot'
						exact
						component={() => <MindstormRobot />}></Route>
					<Route
						path='/booststarwars'
						exact
						component={() => <BoostStarwars />}></Route>
					<Route
						path='/controlplus'
						exact
						component={() => <ControlPlus />}></Route>
					<Route
						path='/poweredup'
						exact
						component={() => <PoweredUp />}></Route>
					<Route
						path='/hiddenside'
						exact
						component={() => <HiddenSide />}></Route>
					<Route
						path='/arphotoshoot'
						exact
						component={() => <ARPhotoShoot />}></Route>
					<Route path='/boostapp' exact component={() => <BoostApp />}></Route>
					<Route
						path='/moviemakerapp'
						exact
						component={() => <MovieMakerApp />}></Route>
					<Route path='/duploapp' exact component={() => <DuploApp />}></Route>
				</BrowserRouter>
			</>
		);
	}
}

export default App;
