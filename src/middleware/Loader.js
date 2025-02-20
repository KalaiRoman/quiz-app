import React from "react";
import { Discuss } from "react-loader-spinner";
function Loader() {
  return (
    <div>
      <Discuss
        visible={true}
        height="200"
        width="200"
        ariaLabel="discuss-loading"
        wrapperStyle={{}}
        wrapperClass="discuss-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
    </div>
  );
}

export default Loader;
