import React from "react";
import { Navigate } from "react-router-dom";
import RootRouter from "./RootRouter";
import { getToken } from "../utils/TokenLocal";

function ProtectedRouter() {
  return getToken() ? <RootRouter /> : <Navigate to="/" />;
}

export default ProtectedRouter;
