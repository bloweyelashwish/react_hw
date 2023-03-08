import classes from "./Button.module.css";

export const Button = ({ text, className, ...props }) => {
  return (
    <button {...props} className={`${classes.button} ${className}`}>
      {text}
    </button>
  );
};
