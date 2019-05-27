import React from "react";
import { FaQuestionCircle, FaTimesCircle } from "react-icons/fa";
import Paragraph from "./Paragraph";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

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
        {}
        <Paragraph />
      </div>
    );
  }
}

/* <p className="explText" style={{ fontSize: "14px", marginTop: "15px" }}>
          <span style={{ color: "#ffb86c", margin: "5px" }}>
            <FaQuestionCircle size={18} />
          </span>
          Did you know you can add CUSTOM LINKS to display in this section?
          <br /> Open the SETTINGS panel and add the URLs of your favorites
          sites to the 'CUSTOM LINKS' textarea.
        </p>
        <a href="" style={{ color: "#ffb86c" }} >
          <FaTimesCircle /> Got it! Don's show me this again.
        </a> */
export default Clock;
