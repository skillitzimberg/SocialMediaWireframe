import React from "react";
import Profile from "./Profile";
import SideContent from "./SideContent";

function Side(){
  const sideStyles = {
    width: '30%',
    height: '400px',
    // border: '1px solid blue',
    margin: '10px',
    float: 'left'
  }
  return (
    <div style={sideStyles}>
      <Profile/>
      <SideContent/>
    </div>
  );
}

export default Side;
