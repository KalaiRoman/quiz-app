import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Question_Update_Current_Next,
  Question_Update_Current_Previous,
  SubmitAnswerUser,
} from "../redux/actions/Question_action";
import { useNavigate } from "react-router-dom";
import { Quiz_texts } from "../consts/Quiz_const";
import { jwtDecode } from "jwt-decode";
import { getToken, questionGet } from "../utils/TokenLocal";
import { submitModal } from "../utils/Modals";
function Footer({ currentQuestion, dataOld, setCode, checktime }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tokenvalue, setTokenValue] = useState("");
  const [visitedCountBrowser, setVisitedBrowswerCount] = useState(0);
  const token = getToken();
  const currentUserData = dataOld && dataOld[currentQuestion];

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
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
  useEffect(() => {
    if (token) {
      const decodetoken = jwtDecode(token);
      setTokenValue(decodetoken);
    }
  }, [token]);

  const handleSubmitResult = async () => {
    try {
      const oldData = questionGet();
      const finalResult = oldData.filter((item, index) => item?.type == "mcq");
      const resultData = finalResult.map((item) => ({
        [item?.id]: item?.yourResponse,
      }));
      const resultObject = finalResult.reduce((acc, item) => {
        acc[item.id] = item.yourResponse;
        return acc;
      }, {});
      const paramsData = {
        examId: tokenvalue?.examId || "",
        studentId: tokenvalue?.studentId || "",
        totalTime: "12.24",
        answerDetails: resultObject,
        programResult: [],
      };
      dispatch(SubmitAnswerUser(paramsData, navigate));
    } catch (error) {
      console.error("Error submitting results:", error);
    }
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      // document.title = document.visibilityState;
      if (document.hidden) {
      } else {
        if (visitedCountBrowser === 2) {
          setVisitedBrowswerCount(2);
        } else {
          setVisitedBrowswerCount(visitedCountBrowser + 1);
        }
      }
      if (visitedCountBrowser === 2) {
        // handleShow();
        // handleSubmitResult();
      }
    });
  }, [visitedCountBrowser]);

  useEffect(() => {
    if (checktime == "000") {
      handleSubmitResult();
    }
  }, [checktime]);

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
              {dataOld?.length === currentQuestion + 1 ? (
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
          </>
        )}
      </div>
      {currentQuestion > 0 && (
        <div>
          {dataOld?.length === currentQuestion + 1 ? (
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

      <div>
        {/* {submitModal(show, handleClose, handleShow, handleSubmitResult)} */}
      </div>
    </div>
  );
}

export default Footer;
