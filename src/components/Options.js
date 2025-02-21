import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Question_Update_Answer } from "../redux/actions/Question_action";
import CodeCompiler from "./CodeCompiler";

function Options({ data, currentQuestion, setCode, code }) {
  const dispatch = useDispatch();
  const [yourcode, setYourCode] = useState("");
  const [youroutput, setYourOutput] = useState("");
  const currentData = data && data[currentQuestion];

  const handleChange = (e) => {
    let dataParams;
    if (currentData?.type == "coding") {
      const correctAnswerCheck = currentData?.expectedOutput == youroutput;
      if (correctAnswerCheck) {
        dataParams = {
          id: currentData?.id,
          options: "",
          question: currentData?.question,
          answer: "",
          score: 1,
          yourResponse: "",
          correctResponse: "",
          YourAnswerstatus: true,
          yourcoding: yourcode,
          yourOutput: youroutput,
          type: "coding",
        };
      } else {
        dataParams = {
          id: currentData?.id,
          options: "",
          question: currentData?.question,
          answer: "",
          score: 0,
          yourResponse: "",
          correctResponse: "",
          YourAnswerstatus: false,
          yourcoding: yourcode,
          yourOutput: youroutput,
          type: "coding",
        };
      }
    } else {
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
            yourcoding: "",
            yourOutput: "",
            type: "",
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
            yourcoding: "",
            yourOutput: "",
            type: "",
          };
        }
      }
    }
    dispatch(Question_Update_Answer(dataParams));
  };

  return (
    <div>
      {currentData?.type == "coding" ? (
        <div className="option-list">
          <CodeCompiler
            question={currentData?.exampleInput}
            outputValue={currentData?.expectedOutput}
            setYourCode={setYourCode}
            setYourOutput={setYourOutput}
            handleClickUser={handleChange}
            setCode={setCode}
            code={code}
          />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default Options;
