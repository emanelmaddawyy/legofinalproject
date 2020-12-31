import React from 'react';
import product from "../../api/data.json";
import './MainCategory.css'
const MainCategory = () => {

console.log(product);
const listItems = product.product.map((item)=>
<div className="container">
<div className="row d-flex float-left">
<div className="col"> 
<div className="products" key={item.id}>
    <a href ={``}>
    <div className="img-fluid">
        <img src={item.thumb} className="imgproduct" alt="beautful" />
    </div>
    <div className="product_description">
<h2>{item.description}</h2>

</div>
    </a>
</div>
</div>
</div>
</div>
);

return(
<div className="main_content">
{listItems}
</div>

)

}
export default MainCategory;