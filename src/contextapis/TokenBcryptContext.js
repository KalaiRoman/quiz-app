import React, { createContext, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { getToken } from "../utils/TokenLocal";
const TokenContext = createContext();
export const useToken = () => useContext(TokenContext);
export const TokenProvider = ({ children }) => {
  const [tokenvalue, setTokenValue] = useState("");
  const token = getToken();

  if (token) {
    const decodetoken = jwtDecode(token);
    setTokenValue(decodetoken);
  }
  return (
    <TokenContext.Provider value={{ tokenvalue }}>
      {children}
    </TokenContext.Provider>
  );
};
