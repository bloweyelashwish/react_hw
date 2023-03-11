import { safeId } from "../../../utils/safeId.utils";

import classes from "./FormUpload.module.css";

export const FormUpload = ({ name, id, label, ...props }) => {
  const uid = id || safeId();

  return (
    <div className={classes["form-upload"]}>
      <input type="file" id={uid} {...props} className="sr-only" />
      <label htmlFor={uid} name={name} className={classes.label}>
        <span>{label}</span>
      </label>
    </div>
  );
};
