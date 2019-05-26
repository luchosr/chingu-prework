import React from "react";

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
    let hour =
      parseInt(
        this.state.date.toLocaleTimeString(navigator.language, {
          hour: "2-digit"
        }),
        10
      ) - 12;
    let minutes = this.state.date.toLocaleTimeString(navigator.language, {
      minute: "2-digit"
    });
    let amPm = () =>
      parseInt(
        this.state.date.toLocaleTimeString(navigator.language, {
          hour: "2-digit"
        }),
        10
      ) > 12
        ? "PM"
        : "AM";
    return (
      <div>
        <h2
          className="hour"
          style={{
            fontSize: "120px",
            fontWeight: "normal",
            fontFamily: "Helvetica Neue, sans-serif"
          }}
        >
          {hour}:{parseInt(minutes) < 10 ? 0 + minutes : minutes}
          <span style={{ fontSize: "32px" }}>{amPm()}</span>
        </h2>
      </div>
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
