import { Form} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios';
import './Auth.css';
import config from '../config.json';
import SpinnerLoader from '../components/common/SpinnerLoader/SpinnerLoader';
import { toast } from 'react-toastify';



const { Component } = require("react");
class ForgetUsernamePage extends Component{
  state={
    email:'',
    showLoading: false
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

    this.setState({showLoading: true});

    try {
      const response = await Axios.post(`${config.apiUrl}/auth/resetPassword`, reqBody);

      this.setState({showLoading: false});

      this.props.history.push({
        pathname: '/writecode',
        state: this.state.email
      });
      } catch (error) {
        this.setState({showLoading: false});
        const msg = error.response.data.message || "Something went wrong";
        toast.error(msg);
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

          <SpinnerLoader visible={this.state.showLoading} />

          <div className="formDescripe py-2">
            <p>Reset you password</p>
             <span className="">Enter the email address registered to your account. An email will be sent to that address with username(s) registered to that account.</span>
             <br/>
          </div>
      
        <form method="POST" className="form-group" onSubmit={this.submitHandeler}>
          <div className="form-group my-4">
          <label for="name">Email address</label>
            <input type="text" className="form-control" placeholder="Email address" value={this.state.name} onChange={this.emailChangeHandler} required/>
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
export default withRouter(ForgetUsernamePage);