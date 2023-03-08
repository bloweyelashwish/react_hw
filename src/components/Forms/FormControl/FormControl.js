import { safeId } from "../../../utils/safeId.utils";

import classes from "./FormControl.module.css";

export const FormControl = ({ name, id, label, ...props }) => {
  const uid = id || safeId();

  return (
    <div className={classes["form-control"]}>
      <label htmlFor={uid} name={name} className={classes.label}>
        {label}
      </label>
      <input name={name} id={uid} {...props} className={classes.input} />
    </div>
  );
};
