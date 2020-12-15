import { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Wishlist extends Component{
  render(){
    return(<Link to="/wishlist" className="colorRightHeader">
            <img src="../../../wishlist.png" className="topHeaderImg"/>
            wish list
            <span>(0)</span>
    </Link>)
  }
}