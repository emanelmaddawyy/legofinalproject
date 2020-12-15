import { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Findstore extends Component{
  render(){
    return(<Link to="/findstore" className="colorLeftHeader">
            <img src="../../../findstore.png" className="topHeaderImg"/>
            Find a store
    </Link>)
  }
}