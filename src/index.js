import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RoutingBrowser from "./middleware/RoutingBrowser";
import LazyLoader from "./middleware/LazyLoader";
import HotToastModal from "./middleware/HotToastModal";
import { ErrorProvider } from "./contextapis/ErrorContext";
import ErrorBoundary from "./middleware/ErrorBoundary";
import ReduxProvider from "./middleware/ReduxProvider";

// boostrap css links

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import HideDocuments from "./utils/HideDocuments";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <HideDocuments>
    <ErrorBoundary>
      <ReduxProvider>
        <LazyLoader>
          <ErrorProvider>
            <HotToastModal>
              <RoutingBrowser>
                <App />
              </RoutingBrowser>
            </HotToastModal>
          </ErrorProvider>
        </LazyLoader>
      </ReduxProvider>
    </ErrorBoundary>
  // </HideDocuments>
);

reportWebVitals();
