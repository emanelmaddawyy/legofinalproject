import { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Admin extends Component{
  render(){
    return(<Link to="/admin" className="colorLeftHeader kidsBtn">
            <img src="../../../kids.png" className="topHeaderImg"/>
            Admin
    </Link>)
  }
}