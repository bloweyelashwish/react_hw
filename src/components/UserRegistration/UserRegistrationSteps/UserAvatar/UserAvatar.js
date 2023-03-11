import { useRegistrationContext } from "../../../../contexts/useRegistrationContext";
import { FormUpload, FormWrapper } from "../../../Forms";
import { Avatar } from "../../../UI/Avatar/Avatar";

export const UserAvatar = () => {
  const [state, dispatch] = useRegistrationContext();
  const { avatar } = state;

  const avatarUploadHandler = ({ target }) => {
    const reader = new FileReader();
    reader.readAsDataURL(target.files[0]);
    reader.addEventListener("load", ({ target: readerTarget }) => {
      const { result } = readerTarget;

      dispatch({ type: "AVATAR_CHANGE", payload: result });
    });
  };

  return (
    <FormWrapper title="User avatar">
      <Avatar src={avatar} />
      <FormUpload
        name="city"
        onChange={avatarUploadHandler}
        label="Click to choose your avatar"
        placeholder="Upload your avatar"
        accept="image/*"
      />
    </FormWrapper>
  );
};
