import React from 'react';
import { withRouter } from 'react-router-dom';
import { HeartOutlined } from '@ant-design/icons';

const Cart = ({ products = [], addProductToWishlist, deleteProductFromCart }) => {

    const productsList = products.length ? (
        products.map((product) => {
            return (
                <tr key={product._id} className="p-0">
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
                        {product.numberOfProduct}
                    </td>
                    <td className="text-center align-self-center">
                        <button class="btn wish text-left p-0 pt-2" onClick={(e) => { addProductToWishlist(product, e) }}>
                            <HeartOutlined style={{ fontSize: '16px', color: 'darkblue', margin: '2px', paddingRight: '1px' }} />
                        </button>
                    </td>
                    <td className="text-center align-self-center">
                        <button onClick={() => deleteProductFromCart(product)} className="btn text-primary p-0 pl-2 pr-2 ml-3 mr-3" type="button">Delete</button>
                    </td>
                </tr>
            )
        })
    ) : (
            <p>There is no products added to cart</p>
        )


    return (
        <>
            <h1 class="text-center">Cart</h1>
            <table className="table col-8 offset-2">
                <thead className="thead-light">
                    <tr className="">
                        <th scope="col" className="text-left align-self-center">ID</th>
                        <th scope="col" className="text-left align-self-center">Name</th>
                        <th scope="col" className="text-left align-self-center">Price</th>
                        <th scope="col" className="text-left align-self-center">Number of product</th>
                        <th scope="col" className="text-left align-self-center">Add to wishlist</th>
                        <th scope="col" className="text-left align-self-center">del</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList}
                </tbody>
            </table>
        </>
    )
}

export default withRouter(Cart);
