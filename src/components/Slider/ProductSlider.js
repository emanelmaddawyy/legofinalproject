import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter,
} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductSlider.css';
import {
	StarFilled,
	StarTwoTone,
	HeartOutlined,
	HeartFilled,
} from '@ant-design/icons';
import cartModule from '../../modules/CartModule';
import loggedUserModule from '../../modules/LoggedUserModule';
import wishListModule from '../../modules/WishListModule';
import { toast } from 'react-toastify';
import config from '../../config.json';

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

const ProductSlider = ({
	products = [],
  title,
  addToWishListHandler,
  removeFromWishListHandler
}) => {

  const addToCartClickHandler = (product) => {
    if (!loggedUserModule.getLoggedUser()) {
      toast.error("You must login first");
      return;
    }

    cartModule.addProduct(product);
    toast.success("You products added");

  }

	const productList = products.map((product, i) => {
    product.existsInWishList = wishListModule.isExistsInWishList(product._id);

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

		let getWishListHeartButton = () => {
			const FilledHeart = (
				<>
					<button
						class='btn p-0'
						onClick={(e) => {
							removeFromWishListHandler(i);
						}}>
						<span class='love'>
							<HeartFilled
								style={{
									cursor: 'auto',
									fontSize: '18px',
									color: 'rgb(0, 109, 183)',
									backgroundColor: '#eee',
									margin: '2px',
                  padding: '3px',
                  borderRadius:'50%'
								}}
							/>
						</span>
					</button>
				</>
			);
			const OutlinedHeart = (
				<>
					<button
						class='btn p-0'
						onClick={(e) => {
							addToWishListHandler(i);
						}}>
						<span class='love'>
							<HeartOutlined
								style={{
									fontSize: '18px',
									color: 'rgb(0, 109, 183)',
									backgroundColor: '#eee',
									margin: '2px',
                  padding: '3px',
                  borderRadius:'50%'
								}}
							/>
						</span>
					</button>
				</>
      );
      
      return product.existsInWishList ? FilledHeart : OutlinedHeart;
		};

		return true ? (
			<div class='mb-5 m-0'>
				<div class='p-3'>
					<div class='border border-1'>
						{getWishListHeartButton()}
                        <Link
							to={{ pathname: `/product/${product._id}` }}>
							<img
								class='image-fluid w-100 pImg pImg2'
								src={product.images.length > 0 ? config.imagesEndpoint+product.images[0] : "../../images/def-product.png"}
								alt=''
							/>
						</Link>
					</div>

          <Link to={{ pathname: `/product/${product._id}`}}>
            <p>{product.title}</p>
            <p class=''>{ratingClal(product.rating)}</p>
            <p class='font-weight-bold'>${product.price}</p>
					</Link>

					<button
						class='btn add col-12'
						onClick={() => addToCartClickHandler(product)}>
						Add to Bag
					</button>
				</div>
			</div>
		) : null;
	});

	return (
		<div class='m-5 p-5'>
			<h1 className='m-2'>{title}</h1>
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
				transitionDuration={500}
				//containerClass="carousel-container"
				//removeArrowOnDeviceType={["tablet", "mobile"]}
				//dotListClass="custom-dot-list-style"
				//itemClass="carousel-item-padding-40-px"
				slidesToSlide='2'>
				{productList}
			</Carousel>
		</div>
	);
};

export default withRouter(ProductSlider);