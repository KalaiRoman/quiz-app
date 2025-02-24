import React, { useEffect } from "react";
function HideDocuments({ children }) {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", (event) => {
      if (
        event.ctrlKey &&
        (event.key === "c" || event.key === "x" || event.key === "u")
      ) {
        event.preventDefault();
      }
    });
    document.addEventListener("selectstart", (event) => event.preventDefault());
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
