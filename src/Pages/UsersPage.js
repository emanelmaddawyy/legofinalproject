import { Button, Form} from 'react-bootstrap';
import Axios from 'axios'
import UsersList from '../components/Users/UsersList';


const { Component } = require("react");
class LoginPage extends Component{
  state = {
    users : null
  }
  async componentDidMount() {
    try {
      const response = await Axios.get('http://localhost:3013/users/');
        // successful
        this.setState({ 
          users : response.data
        })
      console.log(response.data)
    } catch (error) {
      alert(error);
    }
}
  deleteUser = async (index, user) =>{
    try {
      const response =  await Axios.delete(`http://localhost:3013/users/${user._id}`);
      if (response.status === 204) {
        const newUsers = [...this.state.users];
        newUsers.splice(index, 1);
        this.setState({users: newUsers});
      } else {
        alert("Something went wrong"); 
      }
    } catch (error) {
      alert(error)
    }
  }

  editUserHandler = (index) => {
    const newUsers = [...this.state.users];
    const user = newUsers[index];
    user.isBeingEdited = true;
    this.setState({users: newUsers});
  }

  confirmUserUpdateHandler = async (index, newBirthdate) => {
    try {
      const user = this.state.users[index];
      const reqBody = {
        birthDate: newBirthdate
      };

      const response =  await Axios.put(`http://localhost:3013/users/${user._id}`, reqBody);
      if (response.status === 200) {
        const newUsers = [...this.state.users];
        newUsers.splice(index, 1, response.data);
        this.setState({users: newUsers});
      } else {
        alert("Something went wrong"); 
      }
    } catch (error) {
      alert(error)
    }
  }

  cancelUserUpdateHandler = (index) => {
    const newUsers = [...this.state.users];
    const user = newUsers[index];
    user.isBeingEdited = false;
    this.setState({users: newUsers});
  }

  render(){
    return(<>
    <table className="table">
    <thead>
      <tr>
      <th>Email</th>
      <th>BirthDate</th>
      <th>Update</th>
      <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        this.state.users 
        ? <UsersList 
            users={this.state.users}
            deleteUserHandler={this.deleteUser}
            editUserHandler={this.editUserHandler}
            confirmUserUpdateHandler={this.confirmUserUpdateHandler}
            cancelUserUpdateHandler={this.cancelUserUpdateHandler}
          />
        : <p>Loading...</p>
      }
    </tbody>
    </table>
    </>)
  }
}
export default LoginPage;