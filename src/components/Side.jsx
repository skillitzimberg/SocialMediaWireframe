import React from "react";

function Side(){
  const sideStyles = {
    width: '30%',
    height: '400px',
    border: '1px solid blue',
    margin: '5px',
    float: 'left'
  }
  return (
    <div style={sideStyles}>
      side works
    </div>
  );
}

export default Side;