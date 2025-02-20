import React from "react";

function HOC(PropsComponent) {
  function ChildrenHoc(props) {
    return <PropsComponent {...props} />;
  }
  return ChildrenHoc;
}
export default HOC;
