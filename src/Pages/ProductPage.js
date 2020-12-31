// import React, { useEffect } from 'react';
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import './ProductPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,  ListGroup } from 'react-bootstrap';
import Axios from 'axios';


// import ProductsSlider from '../components/ProductsSlider/ProductsSlider';
import Rating from '../components/Rating/Rating';
import Header from '../components/Header/Header';
import ProductInStock from '../components/ProductPageComponents/InStock/ProductInStock';
import ProductNotInStock from '../components/ProductPageComponents/NotInStock/ProductNotInStock';
import Toast from '../components/ProductPageComponents/InStock/Toast/Toast';
import AddToBagHeader from '../components/ProductPageComponents/InStock/AddToBagHeader/AddToBagHeader';
import CheckStoreStock from '../components/ProductPageComponents/Shared/CheckStoreStock/CheckStoreStock';
import PromoBadge from '../components/ProductPageComponents/Shared/PromoBadge/PromoBadge';
import ShopMoreLikeThis from '../components/ProductPageComponents/Shared/ShopMoreLikeThis/ShopMoreLikeThis';
import ProductDetails from '../components/ProductPageComponents/Shared/ProductDetails/ProductDetails';
import ProductAccordion from '../components/ProductPageComponents/Shared/ProductAccordion/ProductAccordion';
import ProductSlider from '../components/Slider/ProductSlider';
import VerticalSlider from "../components/VerticalSlider/VerticalSlider";
import NewProductsSlider from "../components/NewProductsSlider/NewProductsSlider";
import cartModule from '../modules/CartModule';
import loggedUserModule from '../modules/LoggedUserModule';
const config = require('../config.json');




class ProductPage extends Component{
  state = {
    product: null
  }
  addToCartClickHandler = (product) => {
    if (!loggedUserModule.getLoggedUser()) {
      alert("You must login first");
      return;
    }

    cartModule.addProduct(product);
  }

  componentDidMount = async()=>{
    try {
      const response = await Axios.get(`${config.apiUrl}/products/${this.props.match.params.id}`);
      if (response.status === 200) {
         this.setState({
          product: response.data
         })
      } else {
        alert("Something went wrong");
      } 
    } catch (error) {
      alert(error);
    }
  }
	// IsInStock = () => {
	// 	const stockCount = this.props.location.state.numberOfProduct;
	// 	if (stockCount > 0) {
	// 		return (
	// 			<>
	// 				<ProductInStock showToastFunction={this.showToastFunction} />
	// 			</>
	// 		);
	// 	}
	// 	return (
	// 		<>
	// 			<ProductNotInStock />
	// 		</>
	// 	);
	// }

	showToastFunction = () => {
		let toast = document.getElementsByClassName('Toast')[0];
		toast.style.display = 'block';
		toast.style.opacity = 1;

		console.log(toast);
		setTimeout(function () {
			toast.style.display = 'none';
			toast.style.opacity = 0;
		}, 2000);
	}

  render() {
    // const IsInStock = this.IsInStock();

    return (
      <>
      <Header/>
      {
        this.state.product ? 
        <>
        <Row className='m-0 mt-3'>
          <div class='fixed-Header'>
            <Toast />
          </div>
          <Col lg={8} >
          <VerticalSlider images={this.state.product.images}/>
          </Col>
          <Col lg={4} className='bg-light'>
            <ListGroup variant='flush' className='padding18'>
              {/* variant='flush' takes away the border*/}
              <ListGroup.Item>
                <h2>{this.state.product.title}</h2>
                <Rating
                  value={this.state.product.rating}
                  className='text-primary'
                  color='#ffcf00'
                  text={`${this.state.product.numberOfReviews} reviews`}
                />
                Price : <span>{this.state.product.price} $</span>  
                <br/>
                {this.state.product.available=true ? "Avaliable Now": "Not avaliable"}
                <PromoBadge /> 
              <button
                class='btn add col-12'
                onClick={() => this.addToCartClickHandler(this.state.product)}>
                Add to Bag
              </button>
               { /* <IsInStock /> */ }
                <CheckStoreStock />
                {/* <ShopMoreLikeThis /> */}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        {/* <ProductDetails /> */}
        {/* <ProductAccordion data={this.props} /> */}
        {/* <ProductsSlider title='Recommended For You' /> */}
        <NewProductsSlider />
        </>
        : <p>loading...</p>
      }
      </>
    );
  };
}

export default withRouter(ProductPage);
