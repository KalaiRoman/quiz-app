import React, { Suspense } from "react";
import Loader from "./Loader";

function LazyLoader({ children }) {
  return (
    <Suspense
      fallback={
        <div className="Loader">
          <Loader />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

export default LazyLoader;
