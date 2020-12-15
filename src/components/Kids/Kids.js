import { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Kids extends Component{
  render(){
    return(<Link to="/kids" className="colorLeftHeader kidsBtn">
            <img src="../../../kids.png" className="topHeaderImg"/>
            LEGO® LIFE
    </Link>)
  }
}