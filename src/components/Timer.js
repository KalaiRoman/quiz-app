import React, { useState, useEffect } from "react";
import { timer } from "../assests/images";
function Timer() {
  const [time, setTime] = useState(3600);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div>
      <>
        <span className="md">
          {/* <i class="fa-regular fa-clock"></i> */}
          <img src={timer} alt="no image"
          className="timer-clock"
          />
        </span>{" "}
        <span className="md md-fw">{formatTime(time)}</span>
      </>
    </div>
  );
}

export default Timer;
