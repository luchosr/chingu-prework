import React from "react";

class JShistory extends React.Component {
  state = {
    jsHistory: [],
    date: new Date()
  };

  render() {
    return (
      <div style={{ color: "#6272a4", fontFamily: "Inconsolata, monospace" }}>
        <div className="linkPanel">
          <h4 className="title" style={{ textTransform: "uppercase" }}>
            relevant javascript history
          </h4>
          <ul className="jsLinkList">
            <li className="news">Noticia de JS</li>
            <li className="news">Noticia de JS</li>
            <li className="news">Noticia de JS</li>
            <li className="news">Noticia de JS</li>
            <li className="news">Noticia de JS</li>
          </ul>
        </div>{" "}
        <div className="hourPanel">
          <h2 className="hour">aca va la hora</h2>
          <h5 className="date">aca la fecha</h5>

          <p className="explText">
            Did you know you can add CUSTOM LINKS to display in this section?{" "}
            <br /> Open the SETTINGS panel and add the URLs of your favorites
            sites to the 'CUSTOM LINKS' textarea.
          </p>
        </div>
      </div>
    );
  }
}

export default JShistory;
