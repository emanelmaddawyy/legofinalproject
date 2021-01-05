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
import { toast } from 'react-toastify';
const config = require('../../../config.json');


export default class ShopBy extends Component{
  state = {
    isOpen: false,
    filters: []
  }
  api = config.apiUrl
  imageUpload = config.imagesUpload
  toggle = () => {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  }
  componentDidMount = async()=>{
    try {
      const response = await Axios.get(`${this.api}/filters/shopby`);
      this.setState({
        filters : response.data
       })
    } catch (error) {
      toast.error(error.message);
    }
  }
  render(){
    return (
      <Dropdown className="categoryDropdown" addonType="append" isOpen={this.state.isOpen} toggle={this.toggle}>
        <Dropdown.Toggle caret>Shop By</Dropdown.Toggle>
        <Dropdown.Menu>
        <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
          <Container className="p-0">
          <Row className="tabsWidth"> 
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {this.state.filters.map((filterItem, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index}>{filterItem.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {this.state.filters.map((filterItem, index) => (
                  <Tab.Pane key={index} eventKey={index}>
                    <ul className="shopstyle">
                    {filterItem.data.map(dataItem => (
                    <Link className="d-flex" to={`/products/${filterItem.key}/${dataItem._id}`}>
                      <li>   
                          <img src={dataItem.image ? config.imagesEndpoint + dataItem.image : "../../../images/def-product.png"} className="img-fluid"/>
                          <br/>
                        <p>{dataItem.title}</p>
                        </li>                   
                    </Link>
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