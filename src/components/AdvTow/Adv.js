import React from 'react';
import './Adv2.css'
import {Link} from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa';
const AdvTow = () =>{
    return( <>

<div className="bannar2">
    <div className="bannar_content">
<div className="container">
    <div className="row">
    <div className="col">
    <div className="bannar_text">
    <p className="lead2"> Shop Now You Can Ses Our City Toy </p>
   <div className="bannar_btn">
       <Link to="/products/theme/5feaf37b58b666d095b6b018" className="btn btn-info">Shop now<i className="icon"><FaChevronRight/></i></Link>
       </div>
</div> 
</div>
</div>
       </div>
  </div>
</div>
</>



    );
};

export default AdvTow;  
      