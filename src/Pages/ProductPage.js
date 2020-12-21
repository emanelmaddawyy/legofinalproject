// import React, { useEffect } from 'react';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ProductPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, ListGroup } from 'react-bootstrap';

// import ProductsSlider from '../components/ProductsSlider/ProductsSlider';
import Rating from '../components/Rating/Rating';
import Header from '../components/Header/Header';
import ProductInStock from '../components/ProductPageComponents/InStock/ProductInStock';
import ProductNotInStock from '../components/ProductPageComponents/NotInStock/ProductNotInStock';
import Toast from '../components/ProductPageComponents/InStock/Toast/Toast';
import Silder from '../components/Slider/Slider';
// import AddToBagHeader from '../components/ProductPageComponents/InStock/AddToBagHeader/AddToBagHeader';
// import CheckStoreStock from '../components/ProductPageComponents/Shared/CheckStoreStock/CheckStoreStock';
import PromoBadge from '../components/ProductPageComponents/Shared/PromoBadge/PromoBadge';
import ShopMoreLikeThis from '../components/ProductPageComponents/Shared/ShopMoreLikeThis/ShopMoreLikeThis';
import ProductDetails from '../components/ProductPageComponents/Shared/ProductDetails/ProductDetails';
import ProductAccordion from '../components/ProductPageComponents/Shared/ProductAccordion/ProductAccordion';
import ProductSlider from '../components/Slider/ProductSlider';
import VerticalSlider from '../components/VerticalSlider/VerticalSlider';

const ProductPage = (props) => {
	console.log('ProductPage props!', props);
	// console.log('ProductPage props location state', props.location.state);
	// console.log('ProductPage match.params.id', props.match.params.id);
	// console.log('numberOfProduct',props.location.state.numberOfProduct);
	// const product = products.find(p=>p.ID === props.match.params.id)
	// console.log('product',product);

	//! ===============================================================================================================

	// useEffect(() => {
	// 	// debugger;
	// 	const stockCount = props.location.state.numberOfProduct;
	// 	console.log(
	// 		'window.scrollY >= 615',
	// 		window.scrollY,
	// 		window.scrollY >= 615,
	// 		'stockCount',
	// 		stockCount,
	// 	);
	// 	if (window.scrollY >= 615) {
	// 		if (stockCount > 0) {
	// 			return (
	// 				<>
	// 					<AddToBagHeader></AddToBagHeader>
	// 				</>
	// 			);
	// 		}
	// 	} else {
	// 		return <></>;
	// 	}
	// });

	// // }, []);

	// window.addEventListener('scroll', IsInStockForBagHeader);

	// function IsInStockForBagHeader() {
	// 	const stockCount = props.location.state.numberOfProduct;
	// 	console.log(
	// 		'window.scrollY >= 615',
	// 		window.scrollY,
	// 		window.scrollY >= 615,
	// 		'stockCount',
	// 		stockCount,
	// 	);
	// 	if (window.scrollY >= 615) {
	// 		if (stockCount > 0) {
	// 			return (
	// 				<>
	// 					<AddToBagHeader></AddToBagHeader>
	// 				</>
	// 			);
	// 		}
	// 	} else {
	// 		return <></>;
	// 	}
	// }
	//! ===============================================================================================================

	function IsInStock() {
		const stockCount = props.location.state.numberOfProduct;
		if (stockCount > 0) {
			return (
				<>
					<ProductInStock showToastFunction={showToastFunction} />
				</>
			);
		}
		return (
			<>
				<ProductNotInStock />
			</>
		);
	}

	function showToastFunction() {
		let toast = document.getElementsByClassName('Toast')[0];
		toast.style.display = 'block';
		toast.style.opacity = 1;

		console.log(toast);
		setTimeout(function () {
			toast.style.display = 'none';
			toast.style.opacity = 0;
		}, 2000);
	}

	// function test(){
	// 	console.log('test')
	// }
	// function test2(){
	// 	console.log('test2')
	// }

	return (
		<>
			<Header />
			<Silder/>
			<Row className='m-0 mt-3'>
				<div class='fixed-Header'>
					{/* <div class='fixed-Header' onClick={test2}> */}
					{/* <button onClick={test}> test</button> */}
					{/* <IsInStockForBagHeader /> */}
					<Toast />
				</div>

				<Col lg={8}>
					<VerticalSlider />
					{/* <img
						className='w-100'
						src={props.location.state.imgSrc}
						alt={props.location.state.name}
						fluid/> */}
				</Col>

				<Col lg={4} className='bg-light'>
					<ListGroup variant='flush' className='padding18'>
						{/* variant='flush' takes away the border*/}
						<ListGroup.Item>
							<img
								src={props.location.state.themeLogo}
								alt={props.location.state.theme}
								className='mb-2'
							/>
							<h2>{props.location.state.name}</h2>


							<Rating
								value={props.location.state.rating}
								className='text-primary'
								color='#ffcf00'
								text={`${props.location.state.numberOfReviews} reviews`}
							/>


							<PromoBadge />

							<IsInStock />

							{/* <CheckStoreStock /> */}

							<ShopMoreLikeThis />
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<ProductDetails />

			<ProductAccordion data={props} />

			{/* <ProductsSlider title='Recommended For You' /> */}

			<ProductSlider
				title='Recommended For You'
				products={props.products}
				addProductToCart={props.addProductToCart}
				addProductToWishlist={props.addProductToWishlist}
			/>
		</>
	);
};

export default withRouter(ProductPage);
