import React from "react";

function Questions({ data, currentQuestion }) {
  return (
    <div className="md md-fw question-text">
      {currentQuestion + 1}.{data[currentQuestion]?.question}
    </div>
  );
}

export default Questions;
