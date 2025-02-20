import React from "react";
import { useDispatch } from "react-redux";
import {
  Question_Update_Current_Next,
  Question_Update_Current_Previous,
} from "../redux/actions/Question_action";
import { useNavigate } from "react-router-dom";

function Footer({ currentQuestion, data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(Question_Update_Current_Next(currentQuestion + 1));
  };
  const handlePrevious = () => {
    console.log(currentQuestion, "currentQuestion");
    if (currentQuestion === 1) {
      dispatch(Question_Update_Current_Previous(0));
    } else {
      dispatch(Question_Update_Current_Previous(currentQuestion - 1));
    }
  };

  const handleSubmitResult = () => {
    console.log(data, "data");

    navigate("/result");
  };
  return (
    <div className="main-footer-section">
      <div>
        {currentQuestion > 0 ? (
          <>
            <button className="previous-btn" onClick={handlePrevious}>
              {/* <i class="fa-solid fa-arrow-left"></i> */}
              Previous
            </button>
          </>
        ) : (
          <>
            <button className="previous-btn">
              {/* <i class="fa-solid fa-arrow-left"></i> */}
              Previous
            </button>
          </>
        )}
      </div>

      <div>
        {data?.length <= currentQuestion + 1 ? (
          <>
            <button className="submit-btn" onClick={handleSubmitResult}>
              Submit{" "}
            </button>
          </>
        ) : (
          <>
            <button className="next-btn" onClick={handleNext}>
              Next
              {/* <i class="fa-solid fa-arrow-right"></i> */}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Footer;
