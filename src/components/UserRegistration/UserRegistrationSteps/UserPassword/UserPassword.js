import { useRegistrationContext } from "../../../../contexts/useRegistrationContext";
import { FormWrapper, FormControl } from "../../../Forms";

export const UserPassword = () => {
  const [, dispatch] = useRegistrationContext();

  const passwordChangeHandler = ({ target }) => {
    if (!target.value.length) {
      return;
    }

    dispatch({ type: "PASSWORD_CHANGE", payload: target.value });
  };

  return (
    <FormWrapper>
      <FormControl
        type="password"
        name="password"
        onChange={passwordChangeHandler}
        placeholder="Enter your password"
        label="Password"
        required={true}
      />
      <FormControl
        type="password"
        name="password_confirmation"
        placeholder="Confirm your password"
        label="Password confirmation"
        required={true}
      />
    </FormWrapper>
  );
};
