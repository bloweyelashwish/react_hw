import { useRegistrationContext } from "../../../../contexts/useRegistrationContext";
import { FormControl, FormWrapper } from "../../../Forms";

export const UserInfo = () => {
  const [state, dispatch] = useRegistrationContext();
  const { firstName, lastName, email } = state;

  const firstNameChangeHandler = ({ target }) => {
    dispatch({ type: "FIRST_NAME_CHANGE", payload: target.value });
  };
  const lastNameChangeHandler = ({ target }) => {
    dispatch({ type: "LAST_NAME_CHANGE", payload: target.value });
  };
  const emailChangeHandler = ({ target }) => {
    dispatch({ type: "EMAIL_CHANGE", payload: target.value });
  };

  return (
    <FormWrapper title="User info">
      <FormControl
        name="name"
        onChange={firstNameChangeHandler}
        value={firstName}
        label="First name"
        placeholder="John"
        required={true}
      />
      <FormControl
        name="last_name"
        onChange={lastNameChangeHandler}
        value={lastName}
        label="Last name"
        placeholder="Doe"
        required={true}
      />
      <FormControl
        type="email"
        name="email"
        onChange={emailChangeHandler}
        value={email}
        label="Email"
        placeholder="example@mail.com"
        required={true}
      />
    </FormWrapper>
  );
};
