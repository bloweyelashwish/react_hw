import { useEffect, useState } from "react";
import { Button } from "../UI/Button/Button";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { debounce, timeParser } from "../../utils/general.utils";
import classes from "./Stopwatch.module.css";

const StopwatchHistory = ({ history }) => {
  return (
    <ol className={classes.list}>
      {history.map((timeString, idx) => (
        <li key={idx}>{timeString}</li>
      ))}
    </ol>
  );
};

export const Stopwatch = () => {
  const CLICK_SOUND = new Audio(
    "https://www.soundjay.com/buttons/sounds/beep-07a.mp3"
  );

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeHistory, setTimeHistory] = useLocalStorage("stored_time", "");

  useEffect(() => {
    let timeInterval;
    if (isRunning) {
      timeInterval = setInterval(() => setTime(time + 1), 10);
    }

    return () => clearInterval(timeInterval);
  }, [isRunning, time]);

  const toggleHandler = () => setIsRunning(!isRunning);
  const stopHandler = () => {
    if (!isRunning) {
      return;
    }

    setIsRunning(false);
    setTimeHistory([...timeHistory, timeParser(time)]);
  };
  const resetHandler = () => {
    setTime(0);
    stopHandler();
  };

  const commands = {
    reset: () => resetHandler(),
    toggle: () => toggleHandler(),
    stop: () => stopHandler(),
  };

  const clickHandler = (type) => {
    CLICK_SOUND.play();
    commands[type]();
  };

  return (
    <div className={classes.stopwatch}>
      <div className={classes.timer}>{timeParser(time)}</div>
      <div className={classes.controls}>
        {!isRunning && !time && (
          <Button
            classNames={classes.start}
            text="Start"
            onClick={debounce(() => clickHandler("toggle"))}
          />
        )}
        {!isRunning && !!time && (
          <Button
            classNames={classes.continue}
            text="Continue"
            onClick={debounce(() => clickHandler("toggle"))}
          />
        )}
        <Button
          classNames={classes.stop}
          text="Stop"
          onClick={debounce(() => clickHandler("stop"))}
        />
        <Button
          classNames={classes.reset}
          text="Reset"
          onClick={debounce(() => clickHandler("reset"))}
        />
      </div>
      {!!timeHistory.length && <StopwatchHistory history={timeHistory} />}
    </div>
  );
};
