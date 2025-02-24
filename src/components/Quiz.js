import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Question_get } from "../redux/actions/Question_action";
import Header from "./Header";
import Questions from "./Questions";
import Footer from "./Footer";
import { girlimage } from "../assests/images";
import Options from "./Options";

function Quiz() {
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const [checktime, setCheckTime] = useState(null);
  const state = useSelector((state) => state?.Questions);
  useEffect(() => {
    dispatch(Question_get());
  }, [dispatch, checktime]);
  return (
    <div className="main-quiz">
      <div className="inside-quiz-section">
        <div className="header-quiz">
          <Header
            data={state}
            currentQuestion={state?.currentQuestion}
            setCheckTime={setCheckTime}
          />
        </div>
        <div className="question-quiz">
          <div className="quiz-inside">
            <div className="quiz-questions">
              <div className="quiz-questions-inside">
                <div className="quiz-question-options">
                  <Questions
                    data={state?.questionsData}
                    currentQuestion={state?.currentQuestion}
                  />
                  <Options
                    data={state?.questionsData}
                    currentQuestion={state?.currentQuestion}
                    setCode={setCode}
                    code={code}
                  />
                </div>

                <div className="quiz-footer-buttons">
                  <Footer
                    currentQuestion={state?.currentQuestion}
                    dataOld={state?.questionsData}
                    setCode={setCode}
                    checktime={checktime}
                  />
                </div>
              </div>
              <div className="quiz-image">
                <img src={girlimage} alt="no image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <Footer
                currentQuestion={state?.currentQuestion}
                data={state?.questionsData}
              /> */
}

export default Quiz;
