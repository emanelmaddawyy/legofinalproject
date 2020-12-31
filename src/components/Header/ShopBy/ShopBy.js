import { Component } from "react"
import { Nav, Container ,Dropdown , Row, Col ,Tab } from 'react-bootstrap';
import '../Themes/themes.css';
import Axios from 'axios';
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter,
} from 'react-router-dom';
const config = require('../../../config.json');


export default class ShopBy extends Component{
  state = {
    isOpen: false,
    shopby: []
  }
  api = config.apiUrl
  imageUpload = config.imagesUpload
  toggle = () => {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  }
  componentDidMount = async()=>{
    try {
      const response = await Axios.get(`${this.api}/filters/shopby`);
      if (response.status === 200) {
         this.setState({
          shopby : response.data
         })
      } else {
        alert("Something went wrong");
      } 
    } catch (error) {
      alert(error);
    }
  }
  render(){
    console.log('shopby: ', this.state.shopby);


    return (
      <Dropdown className="categoryDropdown" addonType="append" isOpen={this.state.isOpen} toggle={this.toggle}>
        <Dropdown.Toggle caret>Shop By</Dropdown.Toggle>
        <Dropdown.Menu>
        <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
          <Container className="p-0">
          <Row className="tabsWidth"> 
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {this.state.shopby.map((item, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index}>{item.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {this.state.shopby.map((item, index) => (
                  <Tab.Pane key={index} eventKey={index}>
                    <ul className="shopstyle">
                    {item.items.map(displayItem => (
                    <>
                      <li>   
                      {/* <Link to={{ pathname: `/product/${displayItem._id}`}}>       */}
                        <img src={config.imagesEndpoint + displayItem.imgSrc} className="img-fluid"/>
                          <br/>
                        <p>{displayItem.title}</p>
                        {/* </Link> */}
                        </li>                   
                    </>
                    ))}
                 </ul>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
          </Container>
         
        </Tab.Container>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
 }