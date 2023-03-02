import classes from './FormSelect.module.css';

const SelectOption = ({ value, label }) => {
  return <option value={value}>{label}</option>
}

export const FormSelect = ({ onSelect, name, options }) => {
  const selectHandler = ({ target }) => {
    onSelect(target.value);
  }

  return (
    <select name={name} onChange={selectHandler} className={classes.select}>
      {options.map((option) => {
        return <SelectOption {...option} key={option.value} />
      })}
    </select>
  )
}