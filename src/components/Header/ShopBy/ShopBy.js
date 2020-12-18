import { Component } from "react"
import { Nav, Container ,Dropdown , Row, Col ,Tab } from 'react-bootstrap';
import '../Themes/themes.css'
import data from "../../../api/data.json";

export default class ShopBy extends Component{
  state = {
    isOpen: false,
    shopby: data.ShopBy
  }
  toggle = () => {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  }

  render(){
    console.log(this.state.shopby);
    console.log(this.state.display);


    return (
      <Dropdown className="categoryDropdown" addonType="append" isOpen={this.state.isOpen} toggle={this.toggle}>
        <Dropdown.Toggle caret>Shop By</Dropdown.Toggle>
        <Dropdown.Menu>
        <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
          <Container className="p-0">
          <Row className="tabsWidth"> 
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {this.state.shopby.map(item => (
                  <Nav.Item key={item.id}>
                    <Nav.Link eventKey={item.id}>{item.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {this.state.shopby.map(item => (
                  <Tab.Pane key={item.id} eventKey={item.id}>
                    <ul className="shopstyle">
                    {item.display.map(displayItem => (
                    <>
                      <li>   
                        <img src={displayItem.img} className="img-fluid"/>
                          <br/>
                        <p>{displayItem.imgTitle}</p>
                        <p>{displayItem.age}</p>
                        <p>{displayItem.price}</p>
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