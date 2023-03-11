import classes from "./Avatar.module.css";
import avatarPlaceholder from "../../../assets/avatar.png";

export const Avatar = ({ src, ...props }) => {
  return (
    <div className={classes.avatar}>
      <img src={src || avatarPlaceholder} alt={props.alt ?? "Avatar"} />
    </div>
  );
};
