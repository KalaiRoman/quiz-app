import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Question_Update_Answer } from "../redux/actions/Question_action";

function Options({ data, currentQuestion }) {
  const dispatch = useDispatch();

  const currentData = data[currentQuestion];
  console.log(currentData, "kalai");

  const handleChange = (e) => {
    let dataParams;
    if (currentData) {
      const correctAnswerCheck = currentData?.answer == e;
      if (correctAnswerCheck) {
        dataParams = {
          id: currentData?.id,
          options: currentData?.options,
          question: currentData?.question,
          answer: currentData?.answer,
          score: 1,
          yourResponse: e,
          correctResponse: currentData?.answer,
          YourAnswerstatus: true,
        };
      } else {
        dataParams = {
          id: currentData?.id,
          options: currentData?.options,
          question: currentData?.question,
          answer: currentData?.answer,
          score: 0,
          yourResponse: e,
          correctResponse: currentData?.answer,
          YourAnswerstatus: false,
        };
      }
    }
    dispatch(Question_Update_Answer(dataParams));
  };
  return (
    <div>
      {data[currentQuestion]?.options?.map((item, index) => {
        return (
          <div className="option-list">
            {/* <input
              type="radio"
              value={item}
              onChange={handleChange}
              checked={value == item}
              id={`handleChangeoptions${index + 1}`}
              className="radio-button"
            />
            <label
              htmlFor={`handleChangeoptions${index + 1}`}
              className="label-option-texts sm-fw sm"
            >
              {item}
            </label> */}
            <div
              className={
                currentData?.yourResponse == item
                  ? "active-circle"
                  : "empty-circle"
              }
              onClick={() => handleChange(item)}
            ></div>
            <div
              className="label-option-texts sm-fw sm cursor"
              onClick={() => handleChange(item)}
            >
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Options;
