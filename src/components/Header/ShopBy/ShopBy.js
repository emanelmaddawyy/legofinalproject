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
                    {item.display.map(displayItem => (
                    <>
                    <ul>
                      <li>   
                        <img src={displayItem.img}/>
                          <br/>
                        <p>{displayItem.imgTitle}</p></li>
                    </ul>
                   
                    </>
                    ))}
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
 }