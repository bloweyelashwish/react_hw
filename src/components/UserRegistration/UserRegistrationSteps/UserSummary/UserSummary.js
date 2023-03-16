import { useRegistrationContext } from "../../../../contexts/useRegistrationContext";
import { FormWrapper } from "../../../Forms";
import { Avatar } from "../../../UI/Avatar/Avatar";

export const UserSummary = () => {
  const [state] = useRegistrationContext();
  const { firstName, lastName, email, city, street, building, avatar } = state;

  return (
    <FormWrapper>
      <Avatar avatar={avatar} />
      <div style={{ textAlign: "center" }}>
        <p style={{ fontWeight: 600 }}>Contact Information</p>
        <div>
          <p>First name: {firstName}</p>
          <p>Last name: {lastName}</p>
          <p>Email: {email}</p>
          <p>City: {city}</p>
          <p>Street: {street}</p>
          <p>Building: {building}</p>
        </div>
      </div>
    </FormWrapper>
  );
};
