import classes from './Main.module.css';

export const Main = ({ children }) => {
  return <main className={classes.main}>{children}</main>
}