import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Side from "./Side";
import Main from "./Main";
import Follow from "./Follow";
import Content from "./Content";

function App(){
  const appStyles = {
    width: '100%'
  }

  return (
    <div style={appStyles}>
      <Header/>
      <hr/>
      <Content/>
    </div>
  );
}

export default App;
