import { Button, Form, Modal} from 'react-bootstrap';
import {useState} from 'react';
import {Link} from 'react-router-dom';


function Region() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <img src="../../../region.png" className="img-fluid topHeaderImg"/>
      <a className="colorLeftHeader" onClick={handleShow}>
        Change Region
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Sign In to your LEGO® Account</p>
          <Link to="/Login" className="btn  w-100 p-2 m-auto text-center signIn"> sign in </Link>
          <div className="d-flex">   
            <sapn>Don't have an account?</sapn>
            <Link to="/Register" className="register">Register</Link>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

;
export default Region;