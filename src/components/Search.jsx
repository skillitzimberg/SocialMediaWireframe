import React from "react";

function Search(){
  const searchField = {
    margin: '10px',
    height: '35px',
    width: '150px',
    float: 'right',
    border: '2px solid #00ccdb',
    borderRadius: '500px',
    fontSize: '20px'

  }

  return (
    <input type='text' style={searchField} placeholder='Search'></input>
  );
}

export default Search;
