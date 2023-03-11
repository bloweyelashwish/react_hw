import classes from "./FormWrapper.module.css";

export const FormWrapper = ({ children, title }) => {
  return (
    <fieldset className={classes["form-group"]}>
      <legend className="sr-only">{title}</legend>
      <div className={classes["form-inner"]}>{children}</div>
    </fieldset>
  );
};
