import { Component } from "react";
import config from '../../config.json';
import loggedUserModule from '../../modules/LoggedUserModule';
import axios from 'axios';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import {Link} from 'react-router-dom';
import './Order.css'


export default class Order extends Component{
  state = {
    orders:[]
  }
    async componentDidMount(){  
    try {
      const response = await axios.get(`${config.apiUrl}/orders?userId=${loggedUserModule.getLoggedUser()._id}`);
       const orders = response.data;
       console.log(orders)
       this.setState({
         orders:orders
       })
    }
    catch (error){

    }
  }
  render(){
    return(<>
      <Header/>
      <Slider/>
      <table className=" order table-bordered m-auto text-center">
       <thead>
          <th className="p-3" scope="col">
          Total Order Count
          </th>
          <th scope="col">
          Total Order Price
          </th>
          <th scope="col">
          Order Date
          </th>
          <th scope="col">
          Total Order Status
          </th>
          <th scope="col">
            Order
          </th>
        </thead>

        <tbody>

      {this.state.orders.map((item,index) => {
        let totalCount = 0, totalPrice = 0;
        item.products.forEach(product => {
          totalCount += product.count;
          totalPrice += product.price*product.count;
        });

        const date = new Date(item.createdAt).toDateString();
        return (
            <tr key={index}  scope="row" >
            <td className="p-3">{totalCount}</td>
            <td>{totalPrice}</td>
            <td>{date}</td>
            <td>{item.status}</td>
            <td><ul>
              {item.products.map((productItem,id) => {
              return(
              <li><Link to={`/product/${productItem.productData._id}`} key={id}>{productItem.productData.title}</Link></li>)
            })}</ul></td> 
            </tr>
            )
        })}
      
      </tbody>
      </table></>
    )
  }
}