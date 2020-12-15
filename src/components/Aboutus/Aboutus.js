import { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Aboutus extends Component{
  render(){
    return(<Link to="/aboutus" className="colorLeftHeader">
            <img src="../../../aboutus.png" className="topHeaderImg"/>
            About Us
    </Link>)
  }
}