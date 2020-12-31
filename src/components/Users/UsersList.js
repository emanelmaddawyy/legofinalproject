import UserItem from './UserItem';
import EditUserItem from './EditUserItem';

export default function(props) {
  return (
    props.users.map((user, index) => 
      user.isBeingEdited
      ? <EditUserItem
          key={user._id}
          user={user}
          index={index}
          confirmUserUpdateHandler={props.confirmUserUpdateHandler}
          cancelUserUpdateHandler={props.cancelUserUpdateHandler}
        />
      : <UserItem 
          key={user._id}
          user={user} 
          index={index}
          deleteUserHandler={props.deleteUserHandler}
          editUserHandler={props.editUserHandler}
        />
    )
  );
}