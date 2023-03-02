import classes from './User.module.css';
import { useState } from 'react';
import { UserModal } from '../UserModal/UserModal';

export const User = ({ user }) => {
  const [userModalOpened, setUserModalOpened] = useState(false);

  const handleUserClick = () => {
    setUserModalOpened(!userModalOpened);
  }

  return (
    <>
      <div className={classes.user} onClick={handleUserClick}>
        <figure className={classes.image}>
          <img src={user.picture} alt={user.name}/>
        </figure>
        <div className={classes.data}>
          <p className={classes.name}>{user.name}</p>
          <div className={classes.info}>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
          </div>
        </div>
      </div>
      {userModalOpened && <UserModal user={user} onClose={handleUserClick}/>}
    </>
  )
}