import { Container, Col,Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Aboutus from '../Aboutus/Aboutus';
import Account from './Account';
import Region from './Region';
import Vip from '../Vip/Vip';
import Findstore from '../Findstore/Findstore';
import Legolife from '../Legolife/Legolife'
import Kids from '../Kids/Kids';
import WishList from '../WishList/WishList';
import Cart from '../Cart/Cart';


const { Component } = require("react");

class TopHeader extends Component{
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
            <Link to="/wishlist">Wish List</Link>
            </li>
            <li>
            <Link to="/cart">Cart</Link>
            </li>
          </ul>
    </div>
   
    )  
  }
}
export default TopHeader;