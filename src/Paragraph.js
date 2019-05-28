import React from "react";
import { FaQuestionCircle, FaTimesCircle } from "react-icons/fa";

const Paragraph = ({ onClose }) => (
  <div>
    <p className="explText" style={{ fontSize: "14px", marginTop: "15px" }}>
      <span style={{ color: "#ffb86c", margin: "5px" }}>
        <FaQuestionCircle size={18} />
      </span>
      Did you know you can add CUSTOM LINKS to display in this section?
      <br /> Open the SETTINGS panel and add the URLs of your favorites sites to
      the 'CUSTOM LINKS' textarea.
    </p>
    <a role="button" style={{ color: "#ffb86c" }} onClick={onClose}>
      <FaTimesCircle /> Got it! Don't show me this again.
    </a>
  </div>
);

export default Paragraph;
