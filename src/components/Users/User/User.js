import classes from './User.module.css';

export const User = ({ name, age, gender, picture }) => {
  return (
    <div className={classes.user}>
      <figure className={classes.image}>
        <img src={picture} alt={name}/>
      </figure>
      <div className={classes.data}>
        <p className={classes.name}>{name}</p>
        <div className={classes.info}>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
        </div>
      </div>
    </div>
  )
}