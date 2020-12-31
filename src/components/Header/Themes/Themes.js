import { Component } from "react"
import { Nav, Container ,Dropdown , Row, Col} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios';
import './themes.css';
import config from '../../../config.json';


export default class Themes extends Component{
  state = {
    isOpen: false,
    themes: []
  }
  api = config.apiUrl

  toggle() {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  }

  componentDidMount = async()=>{
  try {
    const response = await Axios.get(`${this.api}/themes`);
    if (response.status === 200) {
       this.setState({
        themes : response.data
       })
    } else {
      alert("Something went wrong");
    } 
  } catch (error) {
    alert(error);
  }
}


  render(){
    return (
      <Dropdown className="categoryDropdown" addonType="append" isOpen={this.state.isOpen} toggle={() => this.toggle()}>
        <Dropdown.Toggle caret>Themes</Dropdown.Toggle>
        
        <Dropdown.Menu>
          {this.state.themes.map((item, index) => {
            return(
              <Dropdown.Item key={item._id}>
                <Link to={"/architecture/" + item.visibleId}>{item.name}</Link>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
 }