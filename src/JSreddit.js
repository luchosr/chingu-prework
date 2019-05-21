import React, { Component } from "react";
import { FaRedditAlien } from "react-icons/fa";
import RedditNews from "./RedditNews";
import { thisTypeAnnotation } from "@babel/types";

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
      <div className="jsRedditList">
        <div className="listTitle">
          <h4>
            <FaRedditAlien /> popular on r/javascript
          </h4>
        </div>
        <ul className="newsList">
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

// .then(response => console.log(response.data.children))
// .then(response =>  {postComponent = response.data.children.
//   map(post => (
//     <RedditNews
//       title={post.data.title}
//       author={post.data.author}
//       url={post.data.url}
//     />
//   )
//   )

export default JSreddit;
