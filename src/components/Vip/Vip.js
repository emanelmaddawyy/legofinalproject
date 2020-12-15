import { Component } from 'react';
import {Link} from 'react-router-dom';


export default class vip extends Component{
  render(){
    return(<Link to="/vip" className="colorLeftHeader">
            <img src="../../../vip.png" className="topHeaderImg"/>
            VIP
    </Link>)
  }
}