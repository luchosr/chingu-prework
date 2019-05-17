import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";

const bodyStyle = {
  backgroundColor: "#272A36",
  width: "100%"
};
function App() {
  return (
    <div className="App">
      <body style={bodyStyle}>
        <div>hola vengo a probar el body</div>
        <Sidebar />
      </body>
    </div>
  );
}

export default App;
