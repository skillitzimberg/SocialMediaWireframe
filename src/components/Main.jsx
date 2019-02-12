import React from "react";
import Post from "./Post";

function Main(){
  const mainStyles = {
    width: '30%',
    height: '700px',
    border: '2px solid #ddd',
    margin: '10px',
    float: 'left'
  }
  return (
    <div style={mainStyles}>
      <Post/>
    </div>
  );
}

export default Main;
