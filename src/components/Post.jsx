import React from "react";

function Post(){
  const postStyles = {
    height: '200',
    backgroundColor: '00ccee'
  }

  const topDiv = {
    height: '50%',
    backgroundColor: '#00bbee',
    padding: '50'
  }

  const colorSquare = {
    backgroundColor: '#cc2233',
    margin: '20',
    padding: '10'
  }

  return (
    <div>
      <div style={postStyles}>
      <div style={topDiv}>
        <span style={colorSquare}></span>
        <input placeholder="What's happening?">
        </input>
      </div>
      </div>
    </div>
  );
}

export default Post;
