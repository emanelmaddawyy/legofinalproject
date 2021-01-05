import { Nav, Container ,Tabs ,Modal, Row, Col ,Tab } from 'react-bootstrap';

import ReactCountryFlag from "react-country-flag";
import {Link} from 'react-router-dom';
import './modalBranch.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';
const config = require('../../config.json');




function Region() {
  const [show, setShow] = useState(false);
  const [key, setKey] = useState('home');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [continents ,setContinents]= useState([])

  useEffect(async () => {
    try {
      const response = await Axios.get(`${config.apiUrl}/continents`);
      if (response.status === 200) {
        setContinents(response.data)
      } else {
        toast.error("Something went wrong");
      } 
    } catch (error) {
      toast.error(error.message);
    }
  }, []);
  
  return (
    <>
     <img src="../../../region.png" className="img-fluid topHeaderImg"/>
      <a className="colorLeftHeader" onClick={handleShow}>
        Change Region
      </a>

      <Modal show={show} onHide={handleClose} className="branchModel">
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="logo" >
            <img src="../../../Lego-logo.jpeg"/> 
          </div>   
            <div className="logo-p">
              <h5> Our Branches</h5>
                <p>our stores region</p>
            </div>
         </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Container>
          <Row>
            <Col>

            <Tab.Container id="left-tabs-example" defaultActiveKey={0} className="bg-style">
          <Container className="p-0 yellowBg">
              <Nav variant="pills" className="north" className="bg-style">
                {continents.map((item, index) => (
                  <Nav.Item key={index} className="p-2">
                    <Nav.Link eventKey={index}>{item.title}</Nav.Link>
                  </Nav.Item>
               ))}
              </Nav>
            <Tab.Content >
            {continents.map((item, index) => (
                  <Tab.Pane key={index} eventKey={index}  className="tab">
                    <ul>
                    {item.branches.map(branch => (
                    <> 
                    <li className="p-2">   
                    <ReactCountryFlag countryCode={branch.code} svg  className="flag" />
                    <span>{branch.title}</span>
                      </li>                   
                    </>
                    ))}
                 </ul>
                  </Tab.Pane>
                ))}
              </Tab.Content>
          </Container>
        </Tab.Container>
           </Col>
          </Row>
        </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

;
export default Region;