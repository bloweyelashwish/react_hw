import classes from "./Form.module.css";

export const Form = ({ title, onSubmit, children, actions }) => {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <fieldset className={classes["form-group"]}>
        <legend className="sr-only">{title}</legend>
        <div className={classes["form-inner"]}>{children}</div>
      </fieldset>
    </form>
  );
};
