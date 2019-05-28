import React from "react";
import { FaQuestionCircle, FaTimesCircle } from "react-icons/fa";
import Paragraph from "./Paragraph";
class Clock extends React.Component {
  state = {
    date: new Date(),
    hideParagraph: localStorage.getItem("hideParagraph")
  };
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 60000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  hideParagraph = () => {
    this.setState({ hideParagraph: true });
    localStorage.setItem("hideParagraph", "true");
  };

  render() {
    const setHour = () => {
      let hour = parseInt(
        this.state.date.toLocaleTimeString(navigator.language, {
          hour: "2-digit"
        }),
        10
      );
      return hour <= 12 ? hour : hour - 12;
    };

    let minutes = this.state.date.toLocaleTimeString(navigator.language, {
      minute: "2-digit"
    });
    let amPm = () =>
      parseInt(
        this.state.date.toLocaleTimeString(navigator.language, {
          hour: "2-digit"
        }),
        10
      ) >= 12
        ? "PM"
        : "AM";
    return (
      <div style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
        <h2
          className="hour"
          style={{
            fontSize: "120px",
            fontWeight: "normal"
          }}
        >
          {setHour()}:{parseInt(minutes) < 10 ? 0 + minutes : minutes}
          <span style={{ fontSize: "32px" }}>{amPm()}</span>
        </h2>
        <h5 style={{ fontSize: "20px", fontWeight: "200" }}>
          {this.state.date.toDateString()}
        </h5>
        {!this.state.hideParagraph && (
          <Paragraph onClose={this.hideParagraph} />
        )}
      </div>
    );
  }
}

export default Clock;
