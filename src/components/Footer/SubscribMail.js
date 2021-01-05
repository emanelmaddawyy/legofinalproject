import Axios from "axios";
import config from '../../config.json'
import { toast } from 'react-toastify';
const { Component } = require("react");

export default class SubscribMail extends Component{
  state={
    emailValue : ''
  }
  handelChange =(e)=>{
    this.setState({
      emailValue:e.target.value
    })
  }
  sendEmailHandeler = async () => {
   const reqBody = {
     email: this.state.emailValue
   }
   console.log("body",reqBody)
  
    try {
      const response = await Axios.post(`${config.apiUrl}/subscribe`, reqBody);
      toast.error("your subscribe done")
    } catch (error) {
      toast.error(error.message);
    }
  }
  render(){
    return(<div className="input-group mb-0 mt-0  search__input">
    <input
      type="text"
      placeholder="Your Email Address"
      aria-label="Amount"
      className="form-control"
      value={this.state.emailValue}
      onChange={this.handelChange}
    />
    <span className="input-group-append">
      <button
        type="button"
        className="btn btn-outline-light continue"
        onClick={this.sendEmailHandeler}
      >
        Continue
      </button>
    </span>
  </div>)
  }
}