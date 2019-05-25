import React from "react";
import moment from "moment";

class Clock extends React.Component {
  state = {
    date: new Date(),
    hour: "",
    month: "",
    day: "",
    year: ""
  };
  getTime() {
    this.setState({
      date: new Date(),
      hour: this.state.date.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit"
      })
    });
  }
  render() {
    return (
      <h2
        className="hour"
        style={{
          fontSize: "120px",
          fontWeight: "normal",
          fontFamily: "Helvetica Neue, sans-serif"
        }}
      >
        {this.state.date.toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit"
        })}
        <span style={{ fontSize: "32px" }} />
      </h2>
    );
  }
}
export default Clock;

/*
{new Date().toLocaleTimeString(navigator.language, {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        })}{" "}
*/
