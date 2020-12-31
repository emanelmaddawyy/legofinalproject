import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import NewProductsSlider from '../components/NewProductsSlider/NewProductsSlider';
import Slider from '../components/Slider/Slider';
import WishList from '../components/WishList/WishList';
import loggedUserModule from '../modules/LoggedUserModule';

class WishlistPage extends Component {

  render() {
    if (!loggedUserModule.getLoggedUser()) {
      return <Redirect to="/" />;
    }

    return(
      <>
      <Header />
      <Slider />
      <WishList />
      <NewProductsSlider />
      </>
    )
  }
}
export default WishlistPage