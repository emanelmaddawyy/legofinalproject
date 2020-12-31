import { Container, Col,Row } from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Aboutus from '../Aboutus/Aboutus';
import Account from './Account';
import Region from './Region';
import Vip from '../Vip/Vip';
import Findstore from '../Findstore/Findstore';
import Legolife from '../Legolife/Legolife'
import Kids from '../Kids/Kids';
import wishListModule from '../../modules/WishListModule';
import cartModule from '../../modules/CartModule';
import EventEmitter from "../../modules/EventEmitter";
import LoggedUserModule from '../../modules/LoggedUserModule';

const { Component } = require("react");

class TopHeader extends Component{
  state = {
    wishListCount: wishListModule.getProductCount(),
    cartCount: cartModule.getProductCount()
  }

  componentDidMount() {
    EventEmitter.subscribe('wishlist-changed', event => {
      this.setState({wishListCount: wishListModule.getProductCount()});
    });

    EventEmitter.subscribe('cart-changed', event => {
      this.setState({cartCount: cartModule.getProductCount()});
    });
  }

  componentWillUnmount() {
    EventEmitter.unsubscribe('wishlist-changed');
    EventEmitter.unsubscribe('cart-changed');
  }

  wishListClickHandler = (e) => {
    e.preventDefault();

    if (LoggedUserModule.getLoggedUser()) {
      this.props.history.push('/wishlist');
    } else {
      alert("Please login first");
    }
  }

  cartClickHandler = (e) => {
    e.preventDefault();

    if (LoggedUserModule.getLoggedUser()) {
      this.props.history.push('/cart');
    } else {
      alert("Please login first");
    }
  }

  render(){
    return(
      <div className="topHeader">
          <Col>
          <ul className="list-unstyled">
            <li>
              <Region/>
            </li>
            <li>
              <Aboutus/>
            </li>
            <li>
              <Vip/>
            </li>
            <li>
              <Findstore/>
            </li>
            <li className="noborder">
              <Legolife />
            </li>
            <li className="noborder">
              <Kids />
            </li>
          </ul>
          </Col>
          <ul className="list-unstyled UlleftColor">
            <li>
            <Account/>
            </li>
            <li>
            <Link onClick={this.wishListClickHandler}>Wish List {this.state.wishListCount ? `(${this.state.wishListCount})` : ''}</Link>
            </li>
            <li>
            <Link onClick={this.cartClickHandler}>Cart {this.state.cartCount ? `(${this.state.cartCount})` : ''}</Link>
            </li>
          </ul>
    </div>
   
    )  
  }
}
export default withRouter(TopHeader);