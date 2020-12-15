import { Component } from "react"
import { Nav, Container ,Dropdown , Row, Col} from 'react-bootstrap';
import './themes.css';
import data from "../../../api/data.json";

export default class Themes extends Component{
  state = {
    isOpen1: false,
    themes: data.themes
  }
  toggle1() {
    this.setState({ ...this.state, isOpen1: !this.state.isOpen1 });
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
              return(<li>{item.title}</li>);
            })}
          </ul>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
 }