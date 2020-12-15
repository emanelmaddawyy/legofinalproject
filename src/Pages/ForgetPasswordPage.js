import { Form} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios';
import './Auth.css';


const { Component } = require("react");
class ForgetPasswordPage extends Component{
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

      <div className="mainForget">
        <div className="regForm">
          <div className="formHeader">
            <img src="../../Lego-logo.jpeg"/>
            <span>Account</span>
          </div>

          <div className="formDescripe py-2">
            <p>Recover your Password</p>
             <span className="">
             Enter the username registered to your account. An email will be sent with details on how to reset your password.
            </span>
             <br/>
          </div>
      
        <form method="POST" className="form-group" onSubmit={this.submitHandeler}>
          <div className="form-group my-4">
          <label for="name">User Name</label>
            <input type="text" className="form-control" placeholder="name" value={this.state.name} onChange={this.emailChangeHandler} required/>
          <span></span>
          </div>

        <button type="submit" className="btn btnConfirm">Submit </button> 
          </form>
          <Link to="/Login" className="regLink">Back to Login </Link>
        </div>
      </div>
    </>)
  }
}
export default withRouter(ForgetPasswordPage);