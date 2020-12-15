import { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Legolife extends Component{
  render(){
    return(<Link to="/legolife" className="colorLeftHeader">
            <img src="../../../legolife.png" className="topHeaderImg"/>
            LEGO® LIFE
    </Link>)
  }
}