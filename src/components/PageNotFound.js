import React from "react";
import { pagenotimage } from "../assests/images";
import pageNotfound_texts from "../consts/PageNotFound_const";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="pagenotfound-main">
      <div>
        <img
          src={pagenotimage}
          alt="no image"
          className="page-not-found-image"
        />
      </div>

      <div className="md lg-fw">{pageNotfound_texts?.something}</div>
      <div className="xs xs-fw mt-3 mb-2">{pageNotfound_texts?.sorry}</div>
      <div className="mt-2">
        <button className="go-back-btn" onClick={goBack}>
          {pageNotfound_texts?.buttonText}
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
