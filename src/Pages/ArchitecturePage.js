import React from 'react';
import './ArchitecturePage.css';
import Filter from "../components/Filter/Filter";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    HeartFilled  
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

const Architecture = ({ ArchitectureAccordion, addProductToCart, addProductToWishlist}) => {
	// console.log('ArchitectureAccordion', ArchitectureAccordion);

	const products =[
        {ID:1, name: "Empire State Building", price: "119.99",  rating: 1, imgSrc:'./21042.jpeg', avaliable: true, numberOfProduct: 1, isInWishlist: false},
        {ID:2, name: "The White House", price: "110.99",  rating: 5, imgSrc: './21043.jpeg', avaliable: false, numberOfProduct: 1, isInWishlist: false},
        {ID:3, name: "Trafalgar Square", price: "98.99",  rating: 3, imgSrc: './21046.jpeg', avaliable: true, numberOfProduct: 1, isInWishlist: false},
        {ID:4, name: "Statue of Liberty", price: "70.50",  rating: 2, imgSrc: './21045.jpeg', avaliable: false, numberOfProduct: 1, isInWishlist: false},
        {ID:5, name: "San Francisco", price: "255.99",  rating: 4, imgSrc: './40367.jpeg', avaliable: true, numberOfProduct: 1, isInWishlist: false},
        {ID:6, name: "Las Vegas", price: "119.99",  rating: 1, imgSrc: './21043.jpeg', avaliable: false, numberOfProduct: 1, isInWishlist: false},
        {ID:7, name: "Paris", price: "110.0",  rating: 5, imgSrc: './21042.jpeg', avaliable: true, numberOfProduct: 1, isInWishlist: false},
        {ID:8, name: "London", price: "98.0",  rating: 3, imgSrc: './40367.jpeg', avaliable: true, numberOfProduct: 1, isInWishlist: false}
    ]
	
	const productList = products.map((product) => {

        let ratingClal = (nOfStars)=>{
            const filledStar = <StarFilled style={{ fontSize: '16px', color: 'rgb(255, 213, 0)' }}/>;
            const emptyStar = <StarTwoTone twoToneColor="rgb(255, 213, 0)"/>;  
            let result = [];
            for(let i=0; i < 5; i++){
                (i < nOfStars) ? result.push(filledStar): result.push(emptyStar);
            }
            return <p>{result}</p>;
        }

        let isAvaliable = ()=>{
            const avaliable = <button class="btn add col-12 p-2" onClick = {()=>{addProductToCart(product)}}>Add to Bag</button>;
            const outOfStock = <button disabled class="btn outOfStock col-12 p-2" >Out of stock</button>;
            return (product.avaliable)?avaliable:outOfStock;
        }

        let isWishListProduct = (id)=>{
            let wishlist = localStorage.getItem('wishlist')?JSON.parse(localStorage.getItem('wishlist')):[];
            const FilledHeart = <><HeartFilled  style = {{cursor: "auto", fontSize: '18px', color: 'darkblue', backgroundColor: "#eee", margin: '2px', padding:'1px'}}/><span class="font-weight-bold" style={{fontSize:'14px'}} >Added to Wishlist</span></>;
            const OutlinedHeart =  <><HeartOutlined  style = {{fontSize: '16px', color: 'darkblue', margin: '2px', paddingRight:'1px'}}/><span class="font-weight-bold" style={{fontSize:'14px'}} >Add to Wishlist</span></>;
            let required;
            wishlist.forEach(product => {
                if(product.ID===id) required = product;
            })
            let result = [];
            if(required) {
                if(required.isInWishlist)
                result.push(FilledHeart)
                return <>{result}</>
            }
            else {
                result.push(OutlinedHeart)
                return <>{result}</>
            }
        }
       
       
    return (true) ? (    
                <div class="row col-6 col-lg-4 border border-1 m-0">
                    <div class="p-3">
                        <div class="">
                            <span class="love">
                            </span>
                                <img class="image-fluid w-100 pImg pImg2" src={product.imgSrc} alt=""/>
                        </div>
                            <p class="font-weight-bold text-dark">{product.name}</p>
                        <p class="">{ ratingClal(product.rating) }</p>
                        <p class="font-weight-bold">${product.price}</p>
                        {isAvaliable()}
                        <button class="btn wish text-left p-0 pt-2" onClick = {(e)=>{addProductToWishlist(product, e)}}>
                            {isWishListProduct(product.ID)}
                        </button>

                    </div>
                </div>
        ) : null;
    })

	return (
        <>
			<div class='row p-5 m-0'>
				<div class=' col-lg-3 d-none d-lg-block '>
					<Filter ArchitectureAccordion={ArchitectureAccordion} ></Filter>
				</div>

				<div class='row col-lg-9 col-12  m-xs-0'>
					{productList}
                </div>
			</div>
        </>
	);
};

export default withRouter(Architecture);
