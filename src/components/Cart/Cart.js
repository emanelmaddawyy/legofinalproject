import { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Cart extends Component{
  render(){
    return(<Link to="/cart" className="colorRightHeader">
            <img src="../../../bag.png" className="topHeaderImg"/>
           My Bag
            <span>(0)</span>
    </Link>)
  }
}