import React, { Component } from "react";
import { FaRedditAlien } from "react-icons/fa";
import RedditNews from "./RedditNews";
class JSreddit extends Component {
  state = {
    error: null,
    isLoading: false,
    redditPosts: []
  };

  componentDidMount() {
    this.fetchRedditPosts();
  }

  fetchRedditPosts = () => {
    this.setState({ isLoading: true });

    fetch("https://www.reddit.com/r/javascript.json")
      .then(response => response.json())
      .then(response => {
        const { children } = response.data;
        this.setState({ redditPosts: children });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { error, isLoading, redditPosts } = this.state;
    return (
      <div
        className="jsRedditList"
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "100%",
          margin: "0px",
          width: "25%",
          position: "relative"
        }}
      >
        <h4
          style={{
            color: "#8be9fd",
            textTransform: "uppercase",
            fontFamily: "Inconsolata, monospace",
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          <FaRedditAlien size="18" /> popular on r/javascript
        </h4>

        <ul
          className="newsList invisibleScrollbar"
          style={{
            overflow: "auto",
            flex: "1",
            marginTop: "40px"
          }}
        >
          {redditPosts.length > 0 &&
            redditPosts.map(post => (
              <RedditNews
                title={post.data.title}
                author={post.data.author}
                url={post.data.url}
                score={post.data.score}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default JSreddit;
