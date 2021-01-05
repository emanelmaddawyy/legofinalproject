import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NewProductsSlider from '../components/NewProductsSlider/NewProductsSlider';
import Slider from '../components/Slider/Slider';
import loggedUserModule from '../modules/LoggedUserModule';

class CartPage extends Component {
  render() {
    if (!loggedUserModule.getLoggedUser()) {
      return <Redirect to="/" />;
    }

    return(
      <>
        <Header />
        <Slider />
        <Cart/>
        <NewProductsSlider />
        <Footer/>
      </>
    )
  }
}
export default CartPage