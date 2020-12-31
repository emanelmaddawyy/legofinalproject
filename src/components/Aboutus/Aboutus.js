import { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './Aboutus.css'
export default class Aboutus extends Component{
  render(){
    return(<>
    <Link to="/aboutus" className="colorLeftHeader">
    <img src="../../aboutus.png" className="img-fluid topHeaderImg"/>
      About Us
    </Link>
   
</>
    )
  }
}