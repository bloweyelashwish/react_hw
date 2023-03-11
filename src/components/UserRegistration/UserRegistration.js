import { useRegistrationContext } from "../../contexts/useRegistrationContext";
import { UserAddress, UserInfo, UserAvatar } from "./UserRegistrationSteps";
import { Form } from "../Forms";
import { Button } from "../UI/Button/Button";

import classes from "./UserRegistration.module.css";
import { UserPassword } from "./UserRegistrationSteps/UserPassword/UserPassword";

export const UserRegistration = () => {
  const [state, dispatch] = useRegistrationContext();
  const { currentStep } = state;

  const steps = [
    <UserInfo />,
    <UserAddress />,
    <UserAvatar />,
    <UserPassword />,
  ];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const nextStepHandler = () => {
    dispatch({ type: "STEP_CHANGE", payload: currentStep + 1 });
  };
  const prevStepHandler = () => {
    dispatch({ type: "STEP_CHANGE", payload: currentStep - 1 });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isLastStep) {
      return nextStepHandler();
    } else {
      console.log(123);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Step: {currentStep + 1}</h2>
        <div className={classes.content}>{steps[currentStep]}</div>
        <div className={classes.actions}>
          {!isFirstStep && (
            <Button text="Previous step" onClick={prevStepHandler} />
          )}
          <Button
            text={isLastStep ? "Submit" : "Next step"}
            // onClick={isLastStep ? submitHandler : nextStepHandler}
            type="submit"
            className="button--dark"
          />
        </div>
      </div>
    </Form>
  );
};
