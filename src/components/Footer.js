import React from "react";
import { useDispatch } from "react-redux";
import {
  Question_Update_Current_Next,
  Question_Update_Current_Previous,
} from "../redux/actions/Question_action";
import { useNavigate } from "react-router-dom";
import { Quiz_texts } from "../consts/Quiz_const";

function Footer({ currentQuestion, data, setCode }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUserData = data && data[currentQuestion];

  const handleNext = () => {
    dispatch(Question_Update_Current_Next(currentQuestion + 1));
    setCode("");
  };
  const handlePrevious = () => {
    if (currentQuestion === 1) {
      dispatch(Question_Update_Current_Previous(0));
      setCode(currentUserData?.yourcoding);
    } else {
      dispatch(Question_Update_Current_Previous(currentQuestion - 1));
      setCode(currentUserData?.yourcoding);
    }
  };

  const handleSubmitResult = () => {
    navigate("/result");
  };
  return (
    <div className="main-footer-section">
      <div>
        {currentQuestion > 0 ? (
          <>
            <button className="previous-btn" onClick={handlePrevious}>
              {Quiz_texts?.Previous}
            </button>
          </>
        ) : (
          <>
            <div>
              <button className="next-btn" onClick={handleNext}>
                {Quiz_texts?.Next}
              </button>
            </div>
          </>
        )}
      </div>

      {currentQuestion > 0 && (
        <div>
          {data?.length <= currentQuestion + 1 ? (
            <>
              <button className="submit-btn" onClick={handleSubmitResult}>
                {Quiz_texts?.Submit}
              </button>
            </>
          ) : (
            <>
              <button className="next-btn" onClick={handleNext}>
                {Quiz_texts?.Next}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Footer;
