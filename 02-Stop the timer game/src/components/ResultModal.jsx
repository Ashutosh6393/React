import React from "react";
import { forwardRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemaining, resetTime },
  ref
) {
  const userLost = timeRemaining <= 0;
  const score = Math.round(100 - (timeRemaining / (targetTime * 1000)) * 100);
  return createPortal(
    <dialog ref={ref} className="result-modal" onClose={resetTime}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{timeRemaining / 1000} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={resetTime}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
