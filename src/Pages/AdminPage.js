import { Component } from 'react';
import Admin from '../components/Admin/Admin';
import config from '../config.json';
import Axios from 'axios';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';

class AdminPage extends Component {
  state = {
    orders:[]
  }
    async componentDidMount(){  
    try {
      const response = await Axios.get(`${config.apiUrl}/orders`);
       const orders = response.data;
       console.log(orders)
       this.setState({
         orders:orders
       })
    }
    catch (error){ 

    }  
  }
  updateHandeler = async (id, index, newStatus)=>{
    try {
      const reqBody = {
        _id: id,
        status: newStatus
      }
      const orderUpdateRes = await Axios.put(`${config.apiUrl}/orders`, reqBody);
      const newOrders = [...this.state.orders];
      newOrders[index].status = newStatus;
      this.setState({orders: newOrders});
    
    } catch (error) {
      toast.error(error.message);
  }
  }
  render(){
    return(<>
      <Header/>
      <Slider/>
      <table className="table-bordered  table-hover table-responsive-lg m-auto text-center">
       <thead>
       <th>
           User Email
         </th>
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
          <th>
            #
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

        // prepare action button
        let actionButton;
        if (item.status === "Pending") {
          actionButton = (<button className="btn btn-success" onClick={() => this.updateHandeler(item._id, index, "Accepted")}>Accept</button>)
        } else if (item.status === "Accepted") {
          actionButton = (<button className="btn btn-primary" onClick={() => this.updateHandeler(item._id, index, "Delivered")}>Deliver</button>)
        } else if (item.status === "Delivered") {
          actionButton = (<button className="btn btn-danger" onClick={() => this.updateHandeler(item._id, index, "Completed")}>Complete</button>)
        } 

        return (
            <tr key={index}  scope="row" className=""> 
            <td>{item.user.email}</td> 
            <td className="p-3">{totalCount}</td>
            <td>{totalPrice}</td>
            <td>{date}</td>
            <td>{item.status}</td>
            <td>
              <ul className="list-unstyled">
                {item.products.map((productItem,id) => {
              return(<li><Link to={`/product/${productItem._id}`} key={id}>{productItem.productData.title}</Link></li>)
            })}</ul>
            </td> 
            <td>{actionButton}</td>
            </tr>
            )
        })}
      
      </tbody>
      </table></>
    )
  }
}
export default AdminPage