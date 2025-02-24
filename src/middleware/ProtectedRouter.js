import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import RootRouter from "./RootRouter";
import { getToken } from "../utils/TokenLocal";

function ProtectedRouter() {

  const token=getToken();

  useEffect(() => {
  }, [token]);

  // if (token === null) return <div>Loading...</div>;

  return token ? <RootRouter /> : <Navigate to="/" />;
}

export default ProtectedRouter;
