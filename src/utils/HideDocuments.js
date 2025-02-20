import React, { useEffect } from "react";

function HideDocuments({ children }) {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    const preventReload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", preventReload);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      window.removeEventListener("beforeunload", preventReload);
    };
  }, []);

  return <div>{children}</div>;
}

export default HideDocuments;
