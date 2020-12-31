import { Form} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios';
import './Auth.css';
import config from '../config.json'


const { Component } = require("react");
class Writecode extends Component{
  state={
    email: this.props.location.state || '',
    resetCode: '',
    newPassword: ''
  }
  api = config.apiUrl
  emailChangeHandler = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  passwordChangeHandeler = (e)=>{
    this.setState({
      newPassword : e.target.value
    })
  }

  
  resetCodeChangeHandeler =(e)=>{
    this.setState({
      resetCode : e.target.value
    })
  }
  submitHandeler = async (e) => {
    e.preventDefault();
    
    const reqBody = {
      email: this.state.email,
      resetCode : this.state.resetCode,
      newPassword: this.state.newPassword
    }

    try {
        await Axios.post(`${config.apiUrl}/auth/changePassword`, reqBody);
        // redirect
        this.props.history.push('/login');
      } catch (error) {
        const msg = error.response.data.message || "Something went wrong";
        alert(msg);
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
            <p>Reset your password</p>
             <span className="">
             Enter the email address registered to your account. An email will be sent with details on how to reset your password.
            </span>
             <br/>
          </div>
      
        <form method="POST" className="form-group" onSubmit={this.submitHandeler}>
          <div className="form-group my-4">
          <label for="name">Email address</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Email address" 
              value={this.state.email} 
              onChange={this.emailChangeHandler} 
              disabled={this.props.location.state ? true : false}
              required/>
          <span></span>
          </div>
          <div className="form-group my-4">
          <label for="resetCode">Code</label>
            <input type="text" className="form-control" placeholder="write code" value={this.state.resetCode} onChange={this.resetCodeChangeHandeler} required/>
          <span></span>
          </div>
          <div className="form-group my-4">
          <label for="password">New Password</label>
            <input type="password" className="form-control" placeholder="new password" value={this.state.newPassword} onChange={this.passwordChangeHandeler} required/>
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
export default withRouter(Writecode);