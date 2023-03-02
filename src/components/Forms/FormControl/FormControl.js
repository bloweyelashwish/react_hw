import { useState } from 'react';
import classes from './FormControl.module.css';

export const FormControl = ({
  type,
  onChange,
  name,
  id,
  label,
  placeholder }) => {
  const [value, setValue] = useState('');

  const changeHandler = ({ target }) => {
    setValue(target.value);
    onChange(target.value);
  }

  return (
    <div className={classes.control}>
      <label htmlFor={id} className={classes.label}>{label}</label>
      <input
        className={classes.input}
        type={type}
        value={value}
        onChange={changeHandler}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}