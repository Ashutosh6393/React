import React from "react";
import { useRef } from "react";
import { useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.showModal();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaingin) => prevTimeRemaingin - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.showModal();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeRemaining = targetTime*1000 ? handleStart : handleStop}>
            {timeRemaining = targe ? "Start" : "Stop"} Challenge
          </button>
        </p>
        <p className={timeRemaining <= 0 ? "active" : undefined}>
          {timeRemaining <= 0 ? "Timer inactive" : "Time is running ..."}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
