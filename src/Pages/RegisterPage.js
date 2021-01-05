import { Form} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAppleAlt} from '@fortawesome/free-solid-svg-icons';
import {  faCoffee } from '@fortawesome/fontawesome-free-solid';
import './Auth.css';
import { toast } from 'react-toastify';
import config from '../config.json';

const { Component } = require("react");
class RegisterPage extends Component{
  state={
    users:{
      email:'',
      password:'',
      birthdate:'',
      remember:''
    },
    countries: [],
    selectedCountry: null
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
  birthdateChangeHandeler =(e)=>{
    this.setState({
      birthdate : e.target.value
    })
  }
  countryChangeHandeler =(e)=>{
    const selectedCountry = this.state.countries.find(item => item._id === e.target.value);

    this.setState({
      selectedCountry : selectedCountry
    })
  }
  rememberChangeHandeler =(e)=>{
    this.setState({
      remember : e.target.value
    })
  }
  submitHandeler = async (e) => {
    e.preventDefault();
    
    const reqBody = {
      email: this.state.email,
      password: this.state.password,
      birthDate: this.state.birthdate,
      country :this.state.selectedCountry._id,
      remember :this.state.remember
      
    }

    try {
        const response = await Axios.post(`${this.api}/auth/register`, reqBody);
        if (response.status === 201) {
          // successful
          // redirect
          this.props.history.push('/login');
        } else {
          toast.error("Something went wrong");
        } 
      } catch (error) {
        toast.error(error.message);
    }
  }
  async componentDidMount() {
    try {
      const response = await Axios.get(`${this.api}/countries`);
        // successful
        this.setState({ 
          countries : response.data,
          selectedCountry: response.data[0]
        })

    } catch (error) {
      toast.error(error.message);
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
            {/* <button className=" btn appleLogin mx-2">
            <FontAwesomeIcon icon={faAppleAlt} />
           <span> Continue with Apple ID </span>
            </button>
            <button className="btn btn-primary">
            <FontAwesomeIcon icon={faCoffee} />
            </button>
            <button className="btn btn-primary">
            <FontAwesomeIcon icon={faCoffee} />
            </button> */}
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
      <input type="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="form-control" placeholder="email" value={this.state.email} onChange={this.emailChangeHandler} required/>
    <span></span>
     </div>
     <div className="form-group my-4">
     <label for="password"> Password</label>
      <input type="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="password" className="form-control" value={this.state.password}placeholder="password" className="form-control" value={this.state.password} onChange={this.passwordChangeHandeler} required/>
     <span></span>
     </div>
     <div className="form-group my-4">
     <label>birthdate</label>
      <input type="text" placeholder="birthdate" className="form-control" value={this.state.birthdate} onChange={this.birthdateChangeHandeler} required/> 
     <span></span>
     </div>
     <div class="form-group my-4" >
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1" value={this.state.selectedCountry ? this.state.selectedCountry._id : ''} onChange={this.countryChangeHandeler}>
    {this.state.countries.map((item,index)=>(
      <option key={index} value={item._id}>{item.name}</option>
    ))
    }
    </select>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value={this.state.remember} onChange={this.rememberChangeHandeler} id="defaultCheck1"/>
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