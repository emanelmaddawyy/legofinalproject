import { Component } from "react"
import { Nav, Container ,Dropdown , Row, Col} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios';
import './themes.css';
import data from "../../../api/data.json";

export default class Themes extends Component{
  state = {
    isOpen1: false,
    themes: []
  }

  toggle1() {
    this.setState({ ...this.state, isOpen1: !this.state.isOpen1 });
  }

  componentDidMount = async()=>{
  try {
    const response = await Axios.get('http://localhost:3013/themes');
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
    console.log(this.state.themes)
    return (
      <Dropdown className="categoryDropdown" addonType="append" isOpen={this.state.isOpen} toggle={() => this.toggle()}>
        <Dropdown.Toggle caret>Themes</Dropdown.Toggle>
        <Dropdown.Menu>
          <div>
          <ul className="list-unstyled liststyle">
            {this.state.themes.map((item, index) => {
              return(<li key={item._id}>
                <Link to={'/themes/' + item.visibleId}>{item.name}</Link>
                </li>);
            })}
          </ul>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
 }