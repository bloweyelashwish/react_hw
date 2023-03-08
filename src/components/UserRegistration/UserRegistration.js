import { useRegistrationContext } from "../../contexts/useRegistrationContext";
import { UserInfo } from "./UserRegistrationSteps/UserInfo/UserInfo";
import { Button } from "../UI/Button/Button";

import classes from "./UserRegistration.module.css";

export const UserRegistration = () => {
  const [{ currentStep }] = useRegistrationContext();

  const steps = [<UserInfo />];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Step: {currentStep + 1}</h2>
      <div className={classes.content}>{steps[currentStep]}</div>
      <div className={classes.actions}>
        {!isFirstStep && <Button text="Previous step" />}
        <Button
          text={isLastStep ? "Submit" : "Next step"}
          className="button--dark"
        />
      </div>
    </div>
  );
};
