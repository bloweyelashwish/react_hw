import classes from "./Form.module.css";

export const Form = ({ ...props }) => {
  return <form className={classes.form} {...props} />;
};
