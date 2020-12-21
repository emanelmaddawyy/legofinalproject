import { Button } from 'react-bootstrap';

export default function(props) {
  return (
    <tr key={props.user._id}>      
      <td>{props.user.email}</td>
      {
      props.user.birthDate
      ? <td>{props.user.birthDate}</td>
      :<td>Forget your birthDate</td>
      }
      <td><Button onClick={() => props.editUserHandler(props.index)}>Update</Button></td>
      <td><Button className="btn-danger" onClick={() => props.deleteUserHandler(props.index, props.user)}>Delete</Button></td>
    </tr>
  );
}