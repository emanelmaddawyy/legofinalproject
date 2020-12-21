import React from 'react';
import './ArchitecturePage.css';
import Filter from '../components/Filter/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import ProductSlider from '../components/Slider/ProductSlider';
import Slider from '../components/Slider/Slider';
import Header from '../components/Header/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
	Link,
	withRouter,
} from 'react-router-dom';

import {
	StarOutlined,
	StarFilled,
	StarTwoTone,
	HeartTwoTone,
	HeartOutlined,
	HeartFilled,
} from '@ant-design/icons';


const Architecture = ({
	products,
	ArchitectureAccordion,
	addProductToCart,
	addProductToWishlist,
}) => {
	// console.log('ArchitectureAccordion', ArchitectureAccordion);
	// console.log('products', products);
	const productList = products.map((product) => {
		let ratingClal = (nOfStars) => {
			const filledStar = (
				<StarFilled style={{ fontSize: '16px', color: 'rgb(255, 213, 0)' }} />
			);
			const emptyStar = <StarTwoTone twoToneColor='rgb(255, 213, 0)' />;
			let result = [];
			for (let i = 0; i < 5; i++) {
				i < nOfStars ? result.push(filledStar) : result.push(emptyStar);
			}
			return <p>{result}</p>;
		};

		let isAvaliable = () => {
			const avaliable = (
				<button
					class='btn add col-12 p-2'
					onClick={() => {
						addProductToCart(product);
					}}>
					Add to Bag
				</button>
			);
			const outOfStock = (
				<button disabled class='btn outOfStock col-12 p-2'>
					Out of stock
				</button>
			);
			return product.avaliable ? avaliable : outOfStock;
		};

		let isWishListProduct = (id) => {
			let wishlist = localStorage.getItem('wishlist')
				? JSON.parse(localStorage.getItem('wishlist'))
				: [];
			const FilledHeart = (
				<>
					<button
						disabled
						class='btn wish text-left p-0 pt-2'
						onClick={(e) => {
							addProductToWishlist(product, e);
						}}>
						<HeartFilled
							style={{
								cursor: 'auto',
								fontSize: '18px',
								color: 'darkblue',
								backgroundColor: '#eee',
								margin: '2px',
								padding: '1px',
							}}
						/>
						<span class='font-weight-bold' style={{ fontSize: '14px' }}>
							Added to Wishlist
						</span>
					</button>
				</>
			);
			const OutlinedHeart = (
				<>
					<button
						class='btn wish text-left p-0 pt-2'
						onClick={(e) => {
							addProductToWishlist(product, e);
						}}>
						<HeartOutlined
							style={{
								fontSize: '16px',
								color: 'darkblue',
								margin: '2px',
								paddingRight: '1px',
							}}
						/>
						<span class='font-weight-bold' style={{ fontSize: '14px' }}>
							Add to Wishlist
						</span>
					</button>
				</>
			);

			let required;
			wishlist.forEach((product) => {
				if (product.ID === id) required = product;
			});
			let result = [];
			if (required) {
				if (required.isInWishlist) result.push(FilledHeart);
				return <>{result}</>;
			} else {
				result.push(OutlinedHeart);
				return <>{result}</>;
			}
		};

		return true ? (
			<div class='row col-6 col-lg-4 border border-1 m-0'>
				<div class='p-3'>
					<div class=''>
						<span class='love'></span>
						<Link
							to={{ pathname: `/architecture/${product.ID}`, state: product }}>
							<img
								class='image-fluid w-100 pImg pImg2'
								src={product.imgSrc}
								alt=''
							/>
						</Link>
					</div>
					<Link
						to={{ pathname: `/architecture/${product.ID}`, state: product }}>
						<p class='font-weight-bold text-dark'>{product.name}</p>
						<p class=''>{ratingClal(product.rating)}</p>
						<p class='font-weight-bold'>${product.price}</p>
					</Link>
					{isAvaliable()}
					{isWishListProduct(product.ID)}
				</div>
			</div>
		) : null;
  });


	return (
		<>
      <Header/>
			<Slider />
			<div class='row p-5 m-0'>
				<div class=' col-lg-3 d-none d-lg-block '>
					<Filter ArchitectureAccordion={ArchitectureAccordion}></Filter>
				</div>

				<div class='row col-lg-9 col-12  m-xs-0'>{productList}</div>
			</div>
			<ProductSlider
				products={products}
				addProductToCart={addProductToCart}
				addProductToWishlist={addProductToWishlist}
			/>
		</>
	);
};

export default withRouter(Architecture);
