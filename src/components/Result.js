import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { resultimage } from "../assests/images";
import { result_Text } from "../consts/Result_const";
import { feedBackModal } from "../utils/Modals";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/TokenLocal";
function Result() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
  const state = useSelector((state) => state?.Questions);
  const scoreTotal = state?.questionsData?.reduce((acc, current) => {
    return Number(acc) + Number(current?.score);
  }, 0);

  const goBack = () => {
    navigate("/");
    removeToken();
  };

  return (
    <div className="main-result-section">
      <div className="inside-result-section">
        <div>
          <img src={resultimage} alt={"no image"} className="result-image" />
        </div>
        <div className="lg md-fw">{result_Text?.thankyou}</div>
        <div className="d-flex gap-5 mt-4 mb-4">
          <div>
            <button className="result-btn" onClick={goBack}>
              Back to Home
            </button>
          </div>
          <div>{feedBackModal(show, handleClose, handleShow)}</div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Result;
