import React from "react";

function Social(){
  const socialField = {
    margin: '10px',
    height: '45px',
    width: '150px',
    float: 'right',
    border: '2px solid #00ccdb',
    borderRadius: '500px',
    fontSize: '20px'
  }

  return (
    <button type='submit' style={socialField} placeholder='Social'>Tweet</button>
  );
}

export default Social;
