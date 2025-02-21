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

  const state = useSelector((state) => state?.Questions);
  useEffect(() => {
    dispatch(Question_get());
  }, [dispatch]);
  return (
    <div className="main-quiz">
      <div className="inside-quiz-section">
        <div className="header-quiz">
          <Header data={state} currentQuestion={state?.currentQuestion} />
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
                    data={state?.questionsData}
                    setCode={setCode}
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
