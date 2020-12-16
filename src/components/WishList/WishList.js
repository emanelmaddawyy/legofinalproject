import React from 'react';
import {withRouter} from 'react-router-dom';
import {
	StarOutlined,
	StarFilled,
	StarTwoTone,
	HeartTwoTone,
    HeartOutlined,
    HeartFilled  
} from '@ant-design/icons';


const WishList = ({wishlist, addProductToCart, deleteProductFromWishlist})=> {

    const productsList = wishlist.map((product, i) => {
    return (true) ? (
        <tr key = {product._id} className="p-0">
            <td className="text-left align-self-center">
                {product.ID} 
            </td>
           
            <td className="text-left align-self-center">
                   {product.name}
                {/*<button className="btn btn-warning p-0 pl-2 pr-2 ml-2 mr-2" type="button">Edit</button>*/}
                
                {/*<Link to="/wishList {state: this.ninja}">add to</Link>*/}
                
                {/*<button onClick={()=> deleteNinja(ninja.ID)} className="btn text-primary p-0 pl-2 pr-2 ml-3 mr-3" type="button"><i className="far fa-heart"></i></button>*/}
            </td>
            <td className="text-left align-self-center">
                {product.price}
            </td>
            <td className="text-left align-self-center">
                <button class="btn wish text-left p-0 pt-2" onClick = {()=>{addProductToCart(product)}}>
                    <HeartOutlined  style = {{fontSize: '16px', color: 'darkblue', margin: '2px', paddingRight:'1px'}}/>
                </button>
            </td>
            <td className="text-center align-self-center">
                <button onClick={()=>deleteProductFromWishlist(product.ID)} className="btn text-primary p-0 pl-2 pr-2 ml-3 mr-3" type="button">Delete</button>
            </td>
        </tr>) : null ;
    })
    return(
        <>
            <h1 class="text-center">Wishlist</h1>
            <table className="table col-8 offset-2">
                <thead className="thead-light">
                    <tr className="">
                        <th scope="col" className="text-left align-self-center">ID</th>
                        <th scope="col" className="text-left align-self-center">Name</th>
                        <th scope="col" className="text-left align-self-center">Price</th>
                        <th scope="col" className="text-left align-self-center">Add to Bag</th>
                        <th scope="col" className="text-left align-self-center">del</th>
                    </tr>
                </thead>
                <tbody>
                    { productsList }
                </tbody>
            </table>
        </>
    )
}

export default withRouter(WishList);