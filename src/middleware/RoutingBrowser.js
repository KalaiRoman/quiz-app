import React from "react";
import { BrowserRouter } from "react-router-dom";

function RoutingBrowser({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default RoutingBrowser;
