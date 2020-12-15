import { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class EditUserItem extends Component {
state={
  birthDate:this.props.user.birthDate
}
birthDateChangedHandler = (e)=>{
   this.setState({
     birthDate:e.target.value
   })
}

render(){
  return(<tr key={this.props.user._id}>      
    <td>{this.props.user.email}</td>
    <td><input type="text" value={this.state.birthDate} onChange={this.birthDateChangedHandler} /></td>
    <td><Button className="btn-success" onClick={() => this.props.confirmUserUpdateHandler(this.props.index, this.state.birthDate)}>Confirm</Button></td>
    <td><Button className="btn-danger" onClick={() => this.props.cancelUserUpdateHandler(this.props.index)}>Cancel</Button></td>
   </tr>)
  }
}