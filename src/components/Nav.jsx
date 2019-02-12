import React from "react";

function Nav(){
  const navStyles = {
    width: '40%',
    margin: '10px',
    listStyle: 'none'
  }

  const navListItem = {
    display: 'inline',
    border: '2px solid #999',
    padding: '20px',

  }

  return (
    <ul style={navStyles}>
      <li style={navListItem}>Home</li>
      <li style={navListItem}>Notifications</li>
      <li style={navListItem}>Messages</li>
    </ul>
  );
}

export default Nav;
