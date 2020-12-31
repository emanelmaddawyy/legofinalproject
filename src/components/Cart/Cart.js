import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import cartModule from '../../modules/CartModule';
import wishListModule from '../../modules/WishListModule';
import Axios from 'axios';
import LoggedUserModule from '../../modules/LoggedUserModule';
import EventEmitter from '../../modules/EventEmitter';
import config from '../../config.json';





class Cart extends Component{
  state={
    products:[],
    totalPrice: cartModule.getTotalPrice()
  }

  componentDidMount() {
    const products = cartModule.getProducts().map(item => {
      return {
        ...item,
        existsInWishList: wishListModule.isExistsInWishList(item._id)
      }
    });
    EventEmitter.subscribe('cart-changed', cartProducts => {
      this.setState({
        products: cartProducts,
        totalPrice: cartModule.getTotalPrice()

      });
    });

    this.setState({
      products: products
    })
  };
  componentWillUnmount() {
    EventEmitter.unsubscribe('cart-changed');
  }

  removeFromCart = (product) => {
    cartModule.removeProduct(product._id);
    this.setState({
      products :cartModule.getProducts()
    })
  }

  addToWishListHandler = (index) => {
    const product = {...this.state.products[index]};

    wishListModule.addProduct(product);

    product.existsInWishList = true;

    // update state
    const newProducts = [...this.state.products];
    newProducts[index] = product;
    this.setState({products: newProducts});
  }

  removeFromWishListHandler = (index) => {
    const product = {...this.state.products[index]};

    wishListModule.removeProduct(product._id);
    product.existsInWishList = false;  

    // update state
    const newProducts = [...this.state.products];
    newProducts[index] = product;
    this.setState({products: newProducts});
  }

  getWishListHeartButton = (product, index) => {
    return product.existsInWishList ?
      <button class="btn wish text-left p-0 pt-2" onClick={() => this.removeFromWishListHandler(index)}>
        <HeartFilled style={{ fontSize: '16px', color: 'rgb(0, 109, 183)', margin: '2px',  padding: '3px',
                  borderRadius:'50%' }} />
      </button> 
      : <button class="btn wish text-left p-0 pt-2" onClick={() => this.addToWishListHandler(index)}>
      <HeartOutlined style={{ fontSize: '16px', color: 'rgb(0, 109, 183)', margin: '2px',  padding: '3px',
                  borderRadius:'50%' }} />
    </button> 
  }

  orderNowHandeler = async () => {  
    if(this.state.products.length == 0){
      alert("Order First")
      return;
    }


    const orderProducts = this.state.products.map(item => {
      return {
        count: item.countInCart,
        price: item.price,
        productData: item._id
      };
    })
    const reqBody = {
      user: LoggedUserModule.getLoggedUser()._id,
      products: orderProducts
    }

    try {
        const response = await Axios.post(`${config.apiUrl}/orders`, reqBody); 
        cartModule.clearCart();
        this.props.history.push('/orders');   
      } catch (error) {
        alert(error);
    }
  }
  render(){
    const productsList = this.state.products.length ? (
      this.state.products.map((product, index) => {
          return (
              <tr key={product._id} className="p-0">
                  <td className="text-left align-self-center">
                      {product._id}
                  </td>

                  <td className="text-left align-self-center">
                      {product.title}
                  </td>
                  <td className="text-left align-self-center">
                      {product.price}
                  </td>
                  <td className="text-left align-self-center">
                      {product.countInCart}
                  </td>
                  <td className="text-center align-self-center">
                  { this.getWishListHeartButton(product, index) }
                  </td>
                  <td className="text-center align-self-center">
                      <button onClick={() => this.removeFromCart(product)} className="btn text-primary p-0 pl-2 pr-2 ml-3 mr-3" type="button">Delete</button>
                  </td>
              </tr>
          )
      })
  ) : (
          <p>There is no products added to cart</p>
      )


  return (
      <>
        <h1 class="text-center">Cart</h1>
        <table className="table col-8 offset-2">
            <thead className="thead-light">
                <tr className="">
                    <th scope="col" className="text-left align-self-center">ID</th>
                    <th scope="col" className="text-left align-self-center">Name</th>
                    <th scope="col" className="text-left align-self-center">Price</th>
                    <th scope="col" className="text-left align-self-center">Number of product</th>
                    <th scope="col" className="text-left align-self-center">Add to wishlist</th>
                    <th scope="col" className="text-left align-self-center">del</th>
                </tr>
            </thead>
            <tbody>
                {productsList}
                <p>total :{this.state.totalPrice} </p>
            </tbody>
        </table>
        <div className="w-100 m-auto text-center">
        <button className="btn loginBtn" onClick={this.orderNowHandeler}>Order Now</button>
        </div>
      </>
  )  }
    
}

export default withRouter(Cart);
