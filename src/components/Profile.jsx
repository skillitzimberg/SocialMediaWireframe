import React from "react";

function Profile(){
  const profileStyles = {
    height: '200',
    border: '2px solid #ddd'
  }

  const topDiv = {
    height: '50%',
    backgroundColor: '#00bbee',
    padding: '50'
  }

  const avatar = {
    width: '50%',
    // height: '80%',
    backgroundColor: '#00bbee',
    border: '2px solid #fff',
    borderRadius: '10'
  }

  const navStyles = {
    listStyle: 'none'
  }

  const listItem = {
    display: 'inline',
    textAlign: 'center',
    margin: '0 7px'
  }

  const name = {
    float: 'right',
    margin: '5'
  }

  return (
    <div style={profileStyles}>
      <div style={topDiv}>
        <div style={avatar}>
          avatar
        </div>
      </div>
      <h3 style={name}>First Last</h3>
      <ul style={navStyles}>
        <li style={listItem}>TWEETS</li>
        <li style={listItem}>FOLLOWING</li>
        <li style={listItem}>FOLLOWERS</li>
      </ul>
    </div>
  );
}

export default Profile;
