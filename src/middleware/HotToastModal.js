import React from "react";
import { Toaster } from "react-hot-toast";
function HotToastModal({ children }) {
  return (
    <div>
      <Toaster />
      {children}
    </div>
  );
}

export default HotToastModal;
