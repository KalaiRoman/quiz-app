import React from "react";
import { ErrorProvider } from "./ErrorContext";
import { TokenProvider } from "./TokenBcryptContext";

function ContextApis({ children }) {
  return (
    <ErrorProvider>
      <TokenProvider>{children}</TokenProvider>
    </ErrorProvider>
  );
}

export default ContextApis;
