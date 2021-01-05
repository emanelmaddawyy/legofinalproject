import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import Order from '../components/Order/Order';
import Footer from '../components/Footer/Footer';

import loggedUserModule from '../modules/LoggedUserModule';
console.log(loggedUserModule)

class WishlistPage extends Component {
  
  render() {
    if (!loggedUserModule.getLoggedUser()) {
      return <Redirect to="/" />;
    }

    return(
      <>
      <Header />
      <Order />
      <Footer/>
      </>
    )
  }
}
export default WishlistPage