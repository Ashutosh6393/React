import React from "react";
import { forwardRef } from "react";
const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemaining },
  ref
) {
  const userLost = timeRemaining <= 0;
  return (
    <dialog ref={ref} className="result-modal">
      {userLost && <h2>You lost</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with 
        <strong>{timeRemaining} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
