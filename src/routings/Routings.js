import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRouter from "../middleware/ProtectedRouter";
import { RoutingPathDatas } from "../utils/RoutingDatas";
function Routings() {
  return (
    <div>
      <Routes>
        {RoutingPathDatas?.map((item, index) =>
          item?.auth ? (
            <Route
              key={item?.path || index}
              path={item?.path}
              element={item?.components}
              exact={item?.exact}
              index={item?.index}
            />
          ) : (
            <Route key={item?.path || index} element={<ProtectedRouter />}>
              <Route
                path={item?.path}
                element={item?.components}
                exact={item?.exact}
                index={item?.index}
              />
            </Route>
          )
        )}
      </Routes>
    </div>
  );
}

export default Routings;
