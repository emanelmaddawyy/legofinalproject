import { Component } from "react"
import { Nav, Container ,Dropdown , Row, Col} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios';
import '../Themes/themes.css';
import { toast } from 'react-toastify';
import config from '../../../config.json';


export default class Interest extends Component{
  state = {
    isOpen: false,
    interest: []
  }

  toggle() {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  }

  componentDidMount = async()=>{
  try {
    const response = await Axios.get(`${config.apiUrl}/interest`);
    if (response.status === 200) {
       this.setState({
        interest : response.data
       })
    } else {
      toast.error("Something went wrong");
    } 
  } catch (error) {
    toast.error(error.message);
  }
}


  render(){
    return (
      <Dropdown className="categoryDropdown" addonType="append" isOpen={this.state.isOpen} toggle={() => this.toggle()}>
        <Dropdown.Toggle caret>Interests</Dropdown.Toggle>
        
        <Dropdown.Menu>
          {this.state.interest.map((item, index) => {
            return(
              <Dropdown.Item key={item._id}>
                <Link to={`/products/interest/${item._id}`}>{item.title}</Link>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
 }