import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import Order from '../components/Order/Order';
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
      </>
    )
  }
}
export default WishlistPage