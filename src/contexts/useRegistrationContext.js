import { createContext, useContext, useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  city: "",
  street: "",
  building: "",
  avatar: "",
  password: "",
  currentStep: 0,
  isSubmitted: false,
};

const registrationReducer = (state, action) => {
  switch (action.type) {
    case "FIRST_NAME_CHANGE": {
      return { ...state, firstName: action.payload };
    }
    case "LAST_NAME_CHANGE": {
      return { ...state, lastName: action.payload };
    }
    case "EMAIL_CHANGE": {
      return { ...state, email: action.payload };
    }
    case "PASSWORD_CHANGE": {
      return { ...state, password: action.payload };
    }
    case "CITY_CHANGE": {
      return { ...state, city: action.payload };
    }
    case "STREET_CHANGE": {
      return { ...state, street: action.payload };
    }
    case "BUILDING_CHANGE": {
      return { ...state, building: action.payload };
    }
    case "AVATAR_CHANGE": {
      return { ...state, avatar: action.payload };
    }
    case "STEP_CHANGE": {
      return { ...state, currentStep: action.payload };
    }
    case "SUBMIT_CHANGE": {
      return { ...state, isSubmitted: true };
    }
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

const RegistrationContext = createContext();

export const RegistrationProvider = (props) => {
  const [state, dispatch] = useReducer(registrationReducer, initialState);
  const value = [state, dispatch];

  return <RegistrationContext.Provider value={value} {...props} />;
};

export const useRegistrationContext = () => {
  const ctx = useContext(RegistrationContext);

  if (!ctx) {
    console.error(
      "Registration context must be used within RegistrationProvider"
    );
    return;
  }

  return ctx;
};
