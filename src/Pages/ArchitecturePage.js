import React from 'react';
import './ArchitecturePage.css';
import Filter from '../components/Filter/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import ProductSlider from '../components/Slider/ProductSlider';
import Slider from '../components/Slider/Slider';

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
	HeartFilled,
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

const Architecture = ({
	products,
	ArchitectureAccordion,
	addProductToCart,
	addProductToWishlist,
}) => {
	// console.log('ArchitectureAccordion', ArchitectureAccordion);
	console.log('products', products);
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

// import React from 'react';
// import './ArchitecturePage.css';
// import Filter from '../components/Filter/Filter';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Logo from '../21042.jpeg';
// import Logo1 from '../21043.jpeg';
// import Logo2 from '../21045.jpeg';
// import Logo3 from '../21046.jpeg';
// import Logo4 from '../40367.jpeg';
// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Link,
// 	withRouter,
// } from 'react-router-dom';

// import {
// 	StarOutlined,
// 	StarFilled,
// 	StarTwoTone,
// 	HeartTwoTone,
// 	HeartOutlined,
// } from '@ant-design/icons';

// const responsive = {
// 	superLargeDesktop: {
// 		// the naming can be any, depends on you.
// 		breakpoint: { max: 4000, min: 1200 },
// 		items: 4,
// 	},
// 	desktop: {
// 		breakpoint: { max: 1200, min: 800 },
// 		items: 3,
// 	},
// 	tablet: {
// 		breakpoint: { max: 800, min: 464 },
// 		items: 2,
// 	},
// 	mobile: {
// 		breakpoint: { max: 464, min: 0 },
// 		items: 1,
// 	},
// };

// const Architecture = ({ ninjas, deleteNinja, ArchitectureAccordion }) => {
// 	// console.log('ArchitectureAccordion', ArchitectureAccordion);

// 	const ninjaList = ninjas.map((ninja, i) => {
// 		const imgLogos = [
// 			Logo,
// 			Logo1,
// 			Logo2,
// 			Logo3,
// 			Logo4,
// 			Logo,
// 			Logo1,
// 			Logo2,
// 			Logo3,
// 			Logo4,
// 		];

// 		let rate = () => {
// 			switch (ninja.rating) {
// 				case 1:
// 					return (
// 						<p>
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarTwoTone twoToneColor='orange' />
// 							<StarTwoTone twoToneColor='orange' />
// 							<StarTwoTone twoToneColor='orange' />
// 							<StarTwoTone twoToneColor='orange' />
// 						</p>
// 					);
// 					break;
// 				case 2:
// 					return (
// 						<p>
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarTwoTone twoToneColor='orange' />
// 							<StarTwoTone twoToneColor='orange' />
// 							<StarTwoTone twoToneColor='orange' />
// 						</p>
// 					);
// 					break;
// 				case 3:
// 					return (
// 						<p>
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarTwoTone twoToneColor='orange' />
// 							<StarTwoTone twoToneColor='orange' />
// 						</p>
// 					);
// 					break;
// 				case 4:
// 					return (
// 						<p>
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarTwoTone twoToneColor='orange' />
// 						</p>
// 					);
// 					break;
// 				case 5:
// 					return (
// 						<p>
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 							<StarFilled style={{ fontSize: '16px', color: 'orange' }} />
// 						</p>
// 					);
// 					break;
// 			}
// 		};

// 		return true ? (
// 			<div class='row col-6 col-lg-4 border border-1 m-0'>
// 				<div class='p-3'>
// 					<div class=''>
// 						<span class='love'></span>
// 						<Link to={{ pathname: `/architecture/${ninja.ID}`, state: ninja }}>
// 							<img
// 								class='image-fluid w-100 pImg pImg2'
// 								src={imgLogos[i]}
// 								alt=''
// 							/>
// 						</Link>
// 					</div>
// 					<Link to={{ pathname: `/architecture/${ninja.ID}`, state: ninja }}>
// 						<p class='font-weight-bold text-dark'>{ninja.name}</p>
// 					</Link>
// 					<p class=''>{rate()}</p>
// 					<p class='font-weight-bold'>${ninja.price}</p>
// 					<button class='btn add col-12 p-2'>Add to Bag</button>
// 					<button class='btn wish col-12 text-left p-0 pt-2'>
// 						<i class='far fa-heart pr-2'></i>
// 						<span class='align-self-center'>Add to Wishlist</span>
// 					</button>
// 				</div>
// 			</div>
// 		) : null;
// 	});

// 	return (
// 		<div>
// 			<div class='row p-5 m-0'>
// 				<div class=' col-lg-3 d-none d-lg-block '>
// 					<Filter ArchitectureAccordion={ArchitectureAccordion}></Filter>
// 				</div>

// 				<div class='row col-lg-9 col-12  m-xs-0'>{ninjaList}</div>
// 			</div>
// 		</div>
// 	);
// };

// export default withRouter(Architecture);
