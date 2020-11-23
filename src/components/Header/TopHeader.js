import { Container, Col,Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Account from './Account'
const { Component } = require("react");

class TopHeader extends Component{
  render(){
    return(
      <div className="topHeader">
           <Container>
        <Row>
          <Col>
           <p>left</p>
          </Col>
          <Col>
          <Account/>
          </Col>
        </Row>
      </Container> 
    </div>
   
    )  
  }
}
export default TopHeader;