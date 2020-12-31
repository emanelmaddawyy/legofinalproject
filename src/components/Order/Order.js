import { Component } from "react";
import config from '../../config.json';
import loggedUserModule from '../../modules/LoggedUserModule';
import axios from 'axios'
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
      {this.state.orders.map((item,index) => {
        return(<h1 key={index}>{item.user.email}</h1>)
        })}
      </>
    )
  }
}