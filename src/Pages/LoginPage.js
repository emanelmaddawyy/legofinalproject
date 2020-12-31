import { Form} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAppleAlt} from '@fortawesome/free-solid-svg-icons';
import {  faCoffee } from '@fortawesome/fontawesome-free-solid';
import './Auth.css';
import loggedModule from '../modules/LoggedUserModule';
import config from '../config.json'

const { Component } = require("react");
class LoginPage extends Component{

  state={
    users:{
      email:'',
      password:''
    }
  }
  api = config.apiUrl

  emailChangeHandler = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  passwordChangeHandeler = (e)=>{
    this.setState({
      password : e.target.value
    })
  }

  submitHandeler = async (e) => {
    e.preventDefault();
    
    const reqBody = {
      email: this.state.email,
      password: this.state.password,
    }

    try {
        const response = await Axios.post(`${this.api}/auth/login`, reqBody);
        if (response.status === 200) {
          loggedModule.setLoggedUser(response.data);
          this.props.history.push('/');
        } else {
          alert("Something went wrong");
        } 
      } catch (error) {
        alert(error);
    }
  }
  render(){
    return(<>
      <div className="main">
        <div className="regForm">
          <div className="formHeader">
            <img src="../../Lego-logo.jpeg"/>
            <span>Account</span>
          </div>

   <form method="POST" className="form-group" onSubmit={this.submitHandeler}>
     <div className="form-group my-4">
     <label for="name">User Name</label>
      <input type="text" className="form-control" placeholder="name" value={this.state.name} onChange={this.emailChangeHandler} required/>
    <span></span>
     </div>
     <div className="form-group my-4">
     <label for="password"> Password</label>
      <input type="password" placeholder="password" className="form-control" value={this.state.password} onChange={this.passwordChangeHandeler} required/>
     <span></span>
     </div>
     <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
<Link>Remember me</Link> <br/>
Remember to log out afterwards if you’re using a shared computer, for example in a library or school.

  </label>
  </div>
   <button type="submit" className="btn loginBtn"> Log In </button> 
    </form>
     <div className="forgetLinks">
     {/* <Link to="/forgetusername" className="regLink px-2">Forget username? </Link>  */}
     
     <Link to="/forgetpassword" className="regLink px-2">Forget password? </Link> 

     </div>
    <div className="break my-4">
           <h1>
           <span>Or</span> 
           </h1>
    </div>
          <div className="formDescripe">
          {/* <div className="socialLogin my-3">
            <button className=" btn appleLogin mx-2">
            <FontAwesomeIcon icon={faAppleAlt} />
           <span> Continue with Apple ID </span>
            </button>
            <button className="btn btn-primary">
            <FontAwesomeIcon icon={faCoffee} />
            </button>
            <button className="btn btn-primary">
            <FontAwesomeIcon icon={faCoffee} />
            </button>
              </div>  */}
             <p className="">Don’t have a LEGO® Account?</p>
             <Link to="/Register" className="regLink">Create account </Link>
             <br/>
          
          </div>

        </div>
      </div>
    </>)
  }
}
export default withRouter(LoginPage);