import { Form} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAppleAlt} from '@fortawesome/free-solid-svg-icons';
import {  faCoffee } from '@fortawesome/fontawesome-free-solid';
import './Auth.css';


const { Component } = require("react");
class RegisterPage extends Component{
  state={
    users:{
      email:'',
      password:'',
      birthdate:''
    }
  }

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
  birthdateChangeHandeler =(e)=>{
    this.setState({
      birthdate : e.target.value
    })
  }
  submitHandeler = async (e) => {
    e.preventDefault();
    
    const reqBody = {
      email: this.state.email,
      password: this.state.password,
      birthDate: this.state.birthdate
    }

    try {
        const response = await Axios.post('http://localhost:3001/auth/register', reqBody);
        if (response.status === 201) {
          // successful
          // redirect
          this.props.history.push('/users');
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
   <button type="submit" className="btn btnConfirm"> Log In </button> 
    </form>
     <div className="forgetLinks">
     <Link to="/forgetName" className="regLink px-2">Forget username? </Link> 
     |
     <Link to="/forgetpassword" className="regLink px-2">Forget password? </Link> 

     </div>
    <div className="break my-4">
           <h1>
           <span>Or</span> 
           </h1>
    </div>
          <div className="formDescripe">
          <div className="socialLogin my-3">
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
              </div> 
             <p className="">Don’t have a LEGO® Account?</p>
             <Link to="/Register" className="regLink">Create account </Link>
             <br/>
          
          </div>

        </div>
      </div>
    </>)
  }
}
export default withRouter(RegisterPage);