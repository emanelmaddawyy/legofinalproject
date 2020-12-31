import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import {
	StarOutlined,
	StarFilled,
	StarTwoTone,
	HeartTwoTone,
    HeartOutlined,
    HeartFilled  
} from '@ant-design/icons';
import loggedUserModule from '../../modules/LoggedUserModule';
import cartModule from '../../modules/CartModule';
import wishListModule from '../../modules/WishListModule';
import EventEmitter from '../../modules/EventEmitter';


class WishList extends React.Component  {
  state = {
    products: wishListModule.getProducts()
  }

  componentDidMount() {
    EventEmitter.subscribe('wishlist-changed', wishListProducts => {
      this.setState({
        products: wishListProducts
      });
    });
  }

  componentWillUnmount() {
    EventEmitter.unsubscribe('wishlist-changed');
  }

  addToCartClickHandler = (product) => {
    if (!loggedUserModule.getLoggedUser()) {
      alert("You must login first");
      return;
    }

    cartModule.addProduct(product);
  }

  removeFromWishListHandler = (index) => {
    wishListModule.removeProduct(this.state.products[index]._id);
  }

  render() {
    const productsList = this.state.products.map((product, index) => {
      return (true) ? (
          <tr key = {product._id} className="p-0">
              <td className="text-left align-self-center">
                  {product._id} 
              </td>
             
              <td className="text-left align-self-center">
                     {product.title}
                  {/*<button className="btn btn-warning p-0 pl-2 pr-2 ml-2 mr-2" type="button">Edit</button>*/}
                  
                  {/*<Link to="/wishList {state: this.ninja}">add to</Link>*/}
                  
                  {/*<button onClick={()=> deleteNinja(ninja.ID)} className="btn text-primary p-0 pl-2 pr-2 ml-3 mr-3" type="button"><i className="far fa-heart"></i></button>*/}
              </td>
              <td className="text-left align-self-center">
                  {product.price}
              </td>
              <td className="text-left align-self-center">
                  <button class="btn wish text-left p-0 pt-2" onClick = {() => this.addToCartClickHandler(product)}>
                      <HeartOutlined  style = {{fontSize: '16px', color: 'rgb(0, 109, 183)', margin: '2px', padding: '3px',
                    borderRadius:'50%'}}/>
                  </button>
              </td>
              <td className="text-center align-self-center">
                  <button onClick={()=>this.removeFromWishListHandler(index)} className="btn text-primary p-0 pl-2 pr-2 ml-3 mr-3" type="button">Delete</button>
              </td>
          </tr>) : null ;
      })
      return(
          <>
              <h1 class="text-center">Wishlist</h1>
              <table className="table col-8 offset-2">
                  <thead className="thead-light">
                      <tr className="">
                          <th scope="col" className="text-left align-self-center">ID</th>
                          <th scope="col" className="text-left align-self-center">Name</th>
                          <th scope="col" className="text-left align-self-center">Price</th>
                          <th scope="col" className="text-left align-self-center">Add to Bag</th>
                          <th scope="col" className="text-left align-self-center">del</th>
                      </tr>
                  </thead>
                  <tbody>
                      { productsList }
                  </tbody>
              </table>
          </>
      )
  }
}

export default withRouter(WishList);