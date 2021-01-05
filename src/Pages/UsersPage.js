import { Button, Form} from 'react-bootstrap';
import Axios from 'axios'
import UsersList from '../components/Users/UsersList';
import { toast } from 'react-toastify';
import config from '../config.json'


const { Component } = require("react");
class LoginPage extends Component{
  state = {
    users : null
  }
  api = config.apiUrl

  async componentDidMount() {
    try {
      const response = await Axios.get(`${this.api}/users/`);
        // successful
        this.setState({ 
          users : response.data
        })
      console.log(response.data)
    } catch (error) {
      toast.error(error.message);
    }
}
  deleteUser = async (index, user) =>{
    try {
      const response =  await Axios.delete(`${this.api}/users/${user._id}`);
      if (response.status === 204) {
        const newUsers = [...this.state.users];
        newUsers.splice(index, 1);
        this.setState({users: newUsers});
      } else {
        toast.error("Something went wrong"); 
      }
    } catch (error) {
      toast.error(error.message)
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

      const response =  await Axios.put(`${this.api}/users/${user._id}`, reqBody);
      if (response.status === 200) {
        const newUsers = [...this.state.users];
        newUsers.splice(index, 1, response.data);
        this.setState({users: newUsers});
      } else {
        toast.error("Something went wrong"); 
      }
    } catch (error) {
      toast.error(error.message)
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