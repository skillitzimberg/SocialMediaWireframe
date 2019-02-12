import React from "react";
import Side from "./Side";
import Main from "./Main";
import Follow from "./Follow";

function Content(){
  const contentStyles = {
    width: '95%',
    // border: '1px solid red',
    margin: '10px auto'
  }

  return (
    <div style={contentStyles}>
      <Side/>
      <Main/>
      <Follow/>
    </div>
  );
}

export default Content;
