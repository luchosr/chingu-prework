import React from "react";
import { FaQuestionCircle, FaTimesCircle } from "react-icons/fa";

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      linkShow: true
    };
  }

  handleClick() {
    this.setState({ linkShow: false });
  }
  render() {
    let linkShow = this.state.linkShow;
    return (
      <div>
        {linkShow && (
          <div>
            {" "}
            <p
              className="explText"
              style={{ fontSize: "14px", marginTop: "15px" }}
            >
              <span style={{ color: "#ffb86c", margin: "5px" }}>
                <FaQuestionCircle size={18} />
              </span>
              Did you know you can add CUSTOM LINKS to display in this section?
              <br /> Open the SETTINGS panel and add the URLs of your favorites
              sites to the 'CUSTOM LINKS' textarea.
            </p>
            <a href="" style={{ color: "#ffb86c" }} onClick={this.handleClick}>
              <FaTimesCircle /> Got it! Don's show me this again.
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Paragraph;
