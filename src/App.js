import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import MainDisp from "./MainDisp";

const bodyStyle = {
  backgroundColor: "#272A36",
  width: "100%"
};
function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainDisp />
      {/* <body style={bodyStyle}>
       

      </body> */}
    </div>
  );
}

export default App;
