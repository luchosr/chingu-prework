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
        className=" invisibleScrollbar"
        style={{ overflow: "auto", flex: 1 }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4 className="title">
            <FaRedditAlien size="18" /> popular on r/javascript
          </h4>

          <ul className="redditContainer__itemsList invisibleScrollbar ">
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
      </div>
    );
  }
}

export default JSreddit;
