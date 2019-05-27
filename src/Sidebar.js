import React from "react";
import NavLink from "./NavLink";
import InitabLogo from "./InitabLogo";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaRedditAlien,
  FaTicketAlt
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className="sideBar"
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div className="links">
        <NavLink />
      </div>

      <div
        className="logos"
        style={{
          height: "700px",
          display: "flex",
          flexDirection: "column-reverse",
          margin: "0 auto"
        }}
      >
        <div
          className="socialMedia"
          style={{ color: "#f8f8f2", height: "40px", margin: "10px auto" }}
        >
          <span className="mediaIcon" style={{ backgroundColor: "#3C5A99" }}>
            <FaFacebookF size={12} />
          </span>
          <span className="mediaIcon" style={{ backgroundColor: "#0077b5" }}>
            <FaLinkedinIn size={12} />
          </span>
          <span className="mediaIcon" style={{ backgroundColor: "#1DA1F2" }}>
            <FaTwitter size={12} />
          </span>
          <span className="mediaIcon">
            <FaRedditAlien
              size={12}
              style={{
                backgroundColor: "#5296dd",
                padding: "6px",
                borderRadius: "15px",
                margin: "-5"
              }}
            />
          </span>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <InitabLogo />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
