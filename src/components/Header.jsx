import React from "react";

function Header(){
  const headerStyles = {
    width: '95%',
    height: '100px',
    border: '1px solid red',
    margin: '5px'
  }
  return (
    <div style={headerStyles}>
      header works
    </div>
  );
}

export default Header;
