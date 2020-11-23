import { Form} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios'


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
    <h1>Register</h1>
    <form method="POST" className="form-group w-50" onSubmit={this.submitHandeler}>
      <input type="text" className="input-group m-4" placeholder="email" value={this.state.email} onChange={this.emailChangeHandler}/>
      <input type="password" placeholder="password" className="input-group m-4" value={this.state.password} onChange={this.passwordChangeHandeler}/>
      <input type="text" placeholder="birthdate" className="input-group m-4" value={this.state.birthdate} onChange={this.birthdateChangeHandeler}/> 
      <button type="submit" className="btn btn-primary"> Sign Up</button> 
    </form>
    </>)
  }
}
export default withRouter(RegisterPage);