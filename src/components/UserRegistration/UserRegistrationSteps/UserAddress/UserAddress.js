import { useRegistrationContext } from "../../../../contexts/useRegistrationContext";
import { FormControl, FormWrapper } from "../../../Forms";

export const UserAddress = () => {
  const [state, dispatch] = useRegistrationContext();
  const { city, street, building } = state;

  const cityChangeHandler = ({ target }) => {
    dispatch({ type: "CITY_CHANGE", payload: target.value });
  };
  const streetChangeHandler = ({ target }) => {
    dispatch({ type: "STREET_CHANGE", payload: target.value });
  };
  const buildingChangeHandler = ({ target }) => {
    dispatch({ type: "BUILDING_CHANGE", payload: target.value });
  };

  return (
    <FormWrapper title="User address">
      <FormControl
        name="city"
        onChange={cityChangeHandler}
        value={city}
        label="City"
        placeholder="Enter your city"
        required={true}
      />
      <FormControl
        name="street"
        onChange={streetChangeHandler}
        value={street}
        label="Street"
        placeholder="Enter your street address"
        required={true}
      />
      <FormControl
        name="building"
        onChange={buildingChangeHandler}
        value={building}
        label="Building"
        placeholder="Enter your building identifier"
        required={true}
      />
    </FormWrapper>
  );
};
