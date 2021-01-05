import React from 'react';
import './Adv.css'
import {Link} from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa';
const Adv = () =>{
    return( <>

<div className="bannar">
    <div className="bannar_content">
<div className="container">
    <div className="row">
    <div className="col">
    <div className="bannar_text">
    <p className="lead"> Shop Now You Can Ses Our Batman Toy </p>
   <div className="bannar_btn">
       <Link to="/products/theme/5fe64b92438ee9d3e643db6a" className="btn btn-info">Shop now<i className="icon"><FaChevronRight/></i></Link>
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

export default Adv;  
      