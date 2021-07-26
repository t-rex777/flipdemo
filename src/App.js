import React from "react";
import Main from "./components/main/Main";
import Nav from "./components/navbar/Nav";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Nav />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
