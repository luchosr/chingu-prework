import React from "react";
import { FaRegClock, FaJsSquare } from "react-icons/fa";
import HistoryData from "./HistoryData";
import Clock from "./Clock";

class JShistory extends React.Component {
  state = {
    jsHistory: [],
    date: new Date(),
    hour: "",
    time12: "PM",
    month: "",
    day: "",
    year: ""
  };

  render() {
    const historyComponent = HistoryData.map(data => (
      <li
        style={{ marginBottom: "18px", borderRadius: "3px", textAlign: "left" }}
      >
        <FaJsSquare />{" "}
        <a href="https://javascript.info/" style={{ color: "#6272a4" }}>
          {data.title}
        </a>
        <span style={{ color: "#999", textAlign: "right", width: "25%" }}>
          {data.timeAgo} ago
        </span>
      </li>
    ));
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#6272a4",
          fontFamily: "Inconsolata, monospace",
          maxHeight: "100%",
          textAlign: "center",
          position: "relative",
          top: "0",
          flex: 2
        }}
      >
        <div
          className="linkPanel invisibleScrollbar"
          style={{
            borderBottom: "1px solid #44475a",
            maxHeight: "49%",
            overflow: "auto"
          }}
        >
          <h4
            className="title"
            style={{
              color: "#8be9fd",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "10px",
              marginTop: "30px",
              fontSize: "16px"
            }}
          >
            <FaRegClock /> relevant javascript history
          </h4>
          <ul
            className="jsLinkList"
            style={{
              listStyleType: "none",
              marginTop: "40px",
              verticalAlign: "baseline"
            }}
          >
            {historyComponent}
          </ul>
        </div>
        <div
          style={{
            width: "100%",
            margin: "auto",
            textAlign: "center",
            cursor: "default",
            bottom: "calc(25% - 101px)",
            height: "402px",
            marginTop: "180px"
          }}
        >
          <Clock />
        </div>
      </div>
    );
  }
}

export default JShistory;
