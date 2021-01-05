import { Button, Form, Modal} from 'react-bootstrap';
import {useState} from 'react';
import { useHistory } from "react-router";
import {Link} from 'react-router-dom';
import '../../Pages/Auth.css';
import loggedModule from '../../modules/LoggedUserModule';



function Account(props) {

  const [show, setShow] = useState(false);
  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const loggedUser = loggedModule.getLoggedUser();
  const logOut = (e) => {
    loggedModule.logout();
    history.push("/login")
  }
  return (
    <>
     <img src="../../../account.png" className="img-fluid topHeaderImg "/>
      <a className="colorRightHeader" onClick={handleShow}>
        Account
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {loggedUser ? loggedUser.email : <><img className="pr-3" src="../../Lego-logo.jpeg"/>
          <span className="ml-3 boldText">Sign In to your LEGO® Account</span>
      <Link to="/Login" className="btn  w-100 p-2 my-4 text-center signIn"> sign in </Link>
      <div className="d-flex">   
      <sapn>Don't have an account?</sapn>
      <Link to="/Register" className="register pl-3">Register</Link>
      </div></>}
      {loggedUser ? 
        <div className="orderRegister">
          <img src="../../orderStatus.png"/>
       <Link to="orders">Check Order Satuts</Link>
        </div>
        :""}
        <div className="orderRegister">
          <img src="../../vipBadge.png" className="my-4"/>
          <p>Become a LEGO® VIP member <br/>
          <Link to="/vip"> LEGO® VIP rewards</Link>
          </p>
        </div>
        {loggedUser ? <button onClick={logOut} className="btn loginBtn m-auto d-block">log out</button>: ""}
        </Modal.Body>
      </Modal>
    </>
  );
}

;
export default Account;