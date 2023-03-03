import classes from "./Button.module.css";

export const Button = ({ classNames, type, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${classNames}`}
      type={type || "button"}
    >
      {text}
    </button>
  );
};
