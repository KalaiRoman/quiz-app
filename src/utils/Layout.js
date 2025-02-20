import React from "react";
import Header from "../components/Header";
import "../commoncss/index.scss";
function Layout({ children }) {
  return (
    <div className="main-layout">
      <div className="header-section-layout">
        <Header />
      </div>
      <div className="body-section-layout">{children}</div>
    </div>
  );
}

export default Layout;
