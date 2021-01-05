import { Component } from 'react';
import {Link} from 'react-router-dom';
import "./FindstorePage.css";

class FindStore extends Component {
  
    render(){
      return(<Link to="/findstore" className="colorLeftHeader">
      <img src="../../../findstore.png" className="topHeaderImg"/>
      Store
</Link>)
    }
}

export default FindStore;
