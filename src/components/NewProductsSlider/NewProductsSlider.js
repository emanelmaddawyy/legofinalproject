// const { Component } = require("react");
import {Component} from 'react';
import axios from 'axios';
import ProductSlider from '../Slider/ProductSlider';
import wishListModule from '../../modules/WishListModule';
import loggedUserModule from '../../modules/LoggedUserModule';
import config from '../../config.json';
import EventEmitter from '../../modules/EventEmitter';
import { toast } from 'react-toastify';


export default class NewProductsSlider extends Component {
  state = {
    products: []
  }

  addToWishListHandler = (index) => {
    if (!loggedUserModule.getLoggedUser()) {
      toast.error("You must login first");
      return;
    }

    const product = {...this.state.products[index]};

    wishListModule.addProduct(product);

    product.existsInWishList = true;

    // update state
    const newProducts = [...this.state.products];
    newProducts[index] = product;
    this.setState({products: newProducts});
  }

  removeFromWishListHandler = (index) => {
    if (!loggedUserModule.getLoggedUser()) {
      toast.error("You must login first");
      return;
    }


    const product = {...this.state.products[index]};

    wishListModule.removeProduct(product._id);
    product.existsInWishList = false;  

    // update state
    const newProducts = [...this.state.products];
    newProducts[index] = product;
    this.setState({products: newProducts});
  }

  async componentDidMount(){  
    try {
      const response = await axios.get(`${config.apiUrl}/products?sortBy=createdAt&sortOrder=desc`);
      
      const products = response.data.map(item => {
        return {
          ...item,
          existsInWishList: wishListModule.isExistsInWishList(item._id)
        }
      })

      this.setState({ products: products });
    } catch (error) {
      let msg = "Something went wrong"
      if (error && error.response && error.response.data && error.response.data.message) {
        msg = error.response.data.message;
      }
      toast.error(msg);
    }

    // listen
    EventEmitter.subscribe("wishlist-product-added", (productId) => {
      this.toggleProductInWishList(productId, true);
    });
    EventEmitter.subscribe("wishlist-product-removed", (productId) => {
      this.toggleProductInWishList(productId, false);
    });
  }

  componentWillUnmount() {
    EventEmitter.unsubscribe('wishlist-product-added');
    EventEmitter.unsubscribe('wishlist-product-removed');
  }

  toggleProductInWishList(productId, added) {
    const productIndex = this.state.products.findIndex(item => item._id === productId);
      if (productIndex != -1) {
        const newProducts = [...this.state.products];
        newProducts[productIndex].isExistsInWishList = added;
        this.setState({
          products: newProducts
        })
      }
  }

  render(){
    return(
      <ProductSlider
        products={this.state.products}
        title="New Products"
        addToWishListHandler={this.addToWishListHandler}
        removeFromWishListHandler={this.removeFromWishListHandler}
        />
    )
  }
}