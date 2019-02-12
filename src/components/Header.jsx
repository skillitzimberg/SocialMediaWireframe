import React from "react";
import Nav from "./Nav";
import Search from "./Search";
import Social from "./Social";

function Header(){
  const headerStyles = {
    width: '95%',
    height: '100px',
    // border: '1px solid red',
    margin: '10px auto'
  }

  return (
    <div style={headerStyles}>
      <Nav/>
      <Social/>
      <Search/>
    </div>
  );
}

export default Header;
