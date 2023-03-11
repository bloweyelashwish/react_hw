import { RegistrationProvider } from "./contexts/useRegistrationContext";
import { UserRegistration } from "./components/UserRegistration/UserRegistration";
import { Container } from "./components/UI/Container/Container";

export const App = () => {
  return (
    <div>
      <Container>
        <RegistrationProvider>
          <UserRegistration />
        </RegistrationProvider>
      </Container>
    </div>
  );
};
