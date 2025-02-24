import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Question_Update_Answer } from "../redux/actions/Question_action";
import CodeCompiler from "./CodeCompiler";

function Options({ data, currentQuestion, setCode, code }) {
  const dispatch = useDispatch();
  const [yourcode, setYourCode] = useState("");
  const [youroutput, setYourOutput] = useState("");
  const currentData = data && data[currentQuestion];


  const handleChange = (e, codes) => {
    let dataParams;
    if (currentData?.type === "programming") {
      const correctAnswerCheck = currentData?.expectedOutput === youroutput;

      dataParams = {
        id: currentData?._id,
        options: "",
        question: currentData?.question,
        score: correctAnswerCheck ? 1 : 0,
        yourResponse: "",
        correctResponse: "",
        YourAnswerstatus: correctAnswerCheck ? true : false,
        yourcoding: yourcode ? yourcode : "",
        yourOutput: youroutput ? youroutput : "",
        type: currentData?.type,
      };
    } else {
      if (currentData) {
        const correctAnswerCheck =
          currentData && currentData?.options?.find((item) => item?._id === e);

        const correctAns =
          currentData &&
          currentData?.options?.find((item) => item?.answer == true)?.label;

        dataParams = {
          id: currentData?._id,
          options: currentData?.options,
          question: currentData?.question,
          score: correctAnswerCheck?.answer ? 1 : 0,
          yourResponse: e,
          correctResponse: correctAns,
          YourAnswerstatus: false,
          yourcoding: "",
          yourOutput: "",
          type: currentData?.type,
        };
      }
    }


    dispatch(Question_Update_Answer(dataParams));
  };

  // useEffect(() => {}, [youroutput, yourcode]);

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
                <div className="circle-section-option">
                <div
                  className={
                    currentData?.yourResponse == item?._id
                      ? "active-circle"
                      : "empty-circle"
                  }
                  onClick={() => handleChange(item?._id, "")}
                ></div>
                </div>
               <div className="option-list-section">
               <div
                  className="label-option-texts sm-fw sm cursor"
                  onClick={() => handleChange(item?._id, "")}
                >
                  {item?.label}
                </div>
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
