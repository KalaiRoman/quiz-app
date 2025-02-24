import React from "react";

import Timer from "./Timer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Header({ data, currentQuestion,setCheckTime }) {
  const percentage =
    (Number(currentQuestion + 1) / Number(data?.questionsData?.length)) * 100;
  return (
    <div className="header-section">
      <div className="sm grey-color">Exam</div>
      <div className="lg md-fw progressbar-show">
        <div style={{ width: 40, height: 40 }}>
          <CircularProgressbar
            value={percentage}
            text={`${Math.round(percentage)}%`}
            styles={buildStyles({
              textSize: "16px",
              pathColor: "#eb5757",
              textColor: "#333",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <span className="grey-color">{currentQuestion + 1}</span>/
        {data?.questionsData?.length}
      </div>
      <div>
        <Timer 
        setCheckTime={setCheckTime}
        />
      </div>
    </div>
  );
}

export default Header;
