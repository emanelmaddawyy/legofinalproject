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
          <div className="formDescripe">
            <p className="p-3">Create Your LEGO® Account</p>
            <span>Aleady have an account?</span>
            <br/>
            <Link to="/login" className="btn loginBtn my-3">Log in </Link>
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
          <div className="break my-4">
           <h1>
           <span>Or use your email</span> 
           </h1>
          </div>
          <img src="../../reg.png" className="img-fluid"/>
          </div>

   <form method="POST" className="form-group" onSubmit={this.submitHandeler}>
     <div className="form-group my-4">
     <label for="email">Email Address</label>
      <input type="email" className="form-control" placeholder="email" value={this.state.email} onChange={this.emailChangeHandler} required/>
    <span></span>
     </div>
     <div className="form-group my-4">
     <label for="password"> Password</label>
      <input type="password" placeholder="password" className="form-control" value={this.state.password} onChange={this.passwordChangeHandeler} required/>
     <span></span>
     </div>
     <div className="form-group my-4">
     <label>birthdate</label>
      <input type="text" placeholder="birthdate" className="form-control" value={this.state.birthdate} onChange={this.birthdateChangeHandeler} required/> 
     <span></span>
     </div>
     <div class="form-group my-4" >
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
<Link>I accept the terms and Conditions</Link> <br/>
  When you agree to the Terms and Conditions you also consent to our use of your personal information to process and operate your LEGO® Account. To see how to control your personal data, please see our privacy policy.
  </label>
  </div>
   <button type="submit" className="btn btnConfirm"> Confirm</button> 
    </form>
        </div>
      </div>




    </>)
  }
}
export default withRouter(RegisterPage);