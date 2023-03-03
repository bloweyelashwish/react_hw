import { useEffect, useState } from "react";
import { Button } from "../UI/Button/Button";
import { localStorageService } from "../../services/local-storage.service";
import classes from "./Stopwatch.module.css";

const StopwatchSavedTimeTable = ({ timeList }) => {
  return (
    <ul className={classes.list}>
      {timeList.map((timeString) => (
        <li key={timeString}>{timeString}</li>
      ))}
    </ul>
  );
};

export const Stopwatch = () => {
  const STORAGE_KEY = "react_stopwatch";

  const [time, setTime] = useState(0);
  const [savedTime, setSavedTime] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timeInterval;
    if (isRunning) {
      timeInterval = setInterval(() => setTime(time + 1), 10);
    }

    return () => clearInterval(timeInterval);
  }, [isRunning, time]);

  useEffect(() => {
    const storedTimeList = JSON.parse(localStorageService.getItem(STORAGE_KEY));
    if (!storedTimeList) return;
    setSavedTime(storedTimeList);
  }, []);

  useEffect(() => {
    localStorageService.setItem(STORAGE_KEY, JSON.stringify(savedTime));
  }, [savedTime]);

  const timeParser = (ms) => {
    const padDigits = (digit) => digit.toString().padStart(2, "0");

    const HH = padDigits(Math.floor(time / 360000));
    const MM = padDigits(Math.floor((time % 360000) / 6000));
    const SS = padDigits(Math.floor((time % 6000) / 100));
    const MS = padDigits(ms % 100);

    return `${HH}:${MM}:${SS}:${MS}`;
  };

  const timerToggle = () => setIsRunning(!isRunning);
  const stopHandler = () => {
    if (!isRunning) return;

    timerToggle();
    setSavedTime([...savedTime, timeParser(time)]);
  };
  const resetHandler = () => {
    setTime(0);
    stopHandler();
  };

  return (
    <div className={classes.stopwatch}>
      <div className={classes.timer}>{timeParser(time)}</div>
      <div className={classes.controls}>
        {!isRunning && !time && (
          <Button
            classNames={classes.start}
            text="Start"
            onClick={timerToggle}
          />
        )}
        {!isRunning && !!time && (
          <Button
            classNames={classes.continue}
            text="Continue"
            onClick={timerToggle}
          />
        )}
        <Button classNames={classes.stop} text="Stop" onClick={stopHandler} />
        <Button
          classNames={classes.reset}
          text="Reset"
          onClick={resetHandler}
        />
      </div>
      {!!savedTime.length && <StopwatchSavedTimeTable timeList={savedTime} />}
    </div>
  );
};
