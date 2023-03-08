import { RegistrationProvider } from "./contexts/useRegistrationContext";
import { UserRegistration } from "./components/UserRegistration/UserRegistration";

export const App = () => {
  return (
    <div>
      <RegistrationProvider>
        <UserRegistration />
      </RegistrationProvider>
    </div>
  );
};
