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
      className="sidebar"
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div className="links">
        <NavLink />
      </div>

      <div className="sidebar__logo">
        <div style={{ marginLeft: "15px" }}>
          <InitabLogo />
        </div>
        <div className="sidebar__socialMedia">
          <a
            target="_blank"
            href="https://facebook.com"
            className="mediaIcon"
            style={{ backgroundColor: "#3C5A99", textDecoration: "none" }}
          >
            <FaFacebookF size={12} />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com"
            className="mediaIcon"
            style={{ backgroundColor: "#0077b5" }}
          >
            <FaLinkedinIn size={12} />
          </a>
          <a
            target="_blank"
            href="https://twitter.com"
            className="mediaIcon"
            style={{ backgroundColor: "#1DA1F2" }}
          >
            <FaTwitter size={12} />
          </a>
          <a target="_blank" href="https://reddit.com" className="mediaIcon">
            <FaRedditAlien
              size={14}
              style={{
                backgroundColor: "#5296dd",
                padding: "8px",
                borderRadius: "15px",
                margin: "-5"
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
