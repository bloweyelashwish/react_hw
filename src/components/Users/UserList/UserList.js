import { User } from '../User/User';
import classes from './UserList.module.css';

export const UserList = ({ users }) => {

  if (!users.length) {
    return <h2 className={classes.fallback}>Not found</h2>
  }

  return (
    <ul className={classes.list}>
      {users.map((user) => (
        <li key={user._id}>
          <User {...user}/>
        </li>
      ))}
    </ul>
  )
}