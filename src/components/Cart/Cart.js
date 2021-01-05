import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { HeartOutlined, HeartFilled,DeleteOutlined } from '@ant-design/icons';
import cartModule from '../../modules/CartModule';
import wishListModule from '../../modules/WishListModule';
import Axios from 'axios';
import LoggedUserModule from '../../modules/LoggedUserModule';
import EventEmitter from '../../modules/EventEmitter';
import config from '../../config.json';
import './Cart.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






class Cart extends Component{
  state={
    products:[],
    totalPrice: cartModule.getTotalPrice()
  }
   notify = () => toast("Wow so easy !");

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
    toast.error("Added to wishlist") 

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
      toast.error("Order First")
      
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
        toast.error(error.message);
    }
  }
  render(){
    const productsList = this.state.products.length ? (
      this.state.products.map((product, index) => {
          return (

         <tr>
           <td>
            <div className="media cart">
              <img className="mr-3 imgCart" src={config.imagesEndpoint + product.images[0]} alt="Generic placeholder image" />
              <div className="media-body">
               <h5 className="mt-0">{product.title}</h5>
              <ul className="list-unstyled">
                <li>  price : {product.price} $</li>
                <li> count : {product.countInCart}</li>
                <li> </li>
                <li> </li>
              </ul>
              </div>
            </div>
            </td>
            <td> { this.getWishListHeartButton(product, index) }</td>
            <td><button onClick={() => this.removeFromCart(product)} className="btn text-primary p-0 pl-2 pt-2 pr-2 ml-3 mr-3" type="button"><DeleteOutlined style={{ fontSize: '16px', color: 'rgb(0, 109, 183)', margin: '2px',  padding: '3px',
                  borderRadius:'50%' }}/></button></td>
                  <td> {product.price * product.countInCart}</td>
        </tr>    

              /* <tr key={product._id} className="p-0">
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
              </tr> */
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
                    <th scope="col" className="text-left align-self-center">Items</th>
                    <th scope="col" className="text-left align-self-center"></th>
                    <th scope="col" className="text-left align-self-center"></th>
                    <th scope="col" className="text-left align-self-center">total</th> 
                </tr>
            </thead>
            <tbody>
                {productsList}
            </tbody>
        </table>
        <p className="text-center m-3 text-danger" style={{ fontSize: '20px'}}>Total :{this.state.totalPrice} </p>

        <div className="w-100 m-auto text-center">
        <button className="btn loginBtn" onClick={this.orderNowHandeler}>Order Now</button>
        </div>
      </>
  )  }
    
}

export default withRouter(Cart);
