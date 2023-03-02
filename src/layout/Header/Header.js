import classes from './Header.module.css';

export const Header = ({children}) => {
  return <header className={classes.header}>{children}</header>
}