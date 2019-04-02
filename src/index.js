import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";
import MoreOptionsButton from "./more-options-button";
import LikeButton from "./like-button";
import RetweetButton from "./retweet-button";
import ReplyButton from "./reply-button";
import Time from "./time";
import NameWithHandle from "./name-with-handle";
import Message from "./message";
import Avatar from "./avatar";

var Tweet = ({ Tweet }) => (
  <div className="tweet">
    <Avatar hash={Tweet.gravatar} />
    <div className="content">
      <NameWithHandle authorObject={Tweet.author} />
      <Time timeWrote={Tweet.timestamp} />
      <Message words={Tweet.message} />
      <div className="buttons">
        <ReplyButton />
        <RetweetButton count={Tweet.retweets} />
        <LikeButton count={Tweet.likes} />
        <MoreOptionsButton />
      </div>
    </div>
  </div>
);

var testTweet = {
  message:
    "Hello World, This is my example of a tweet, lala land like dreams in a basket?",
  gravatar: "140890051/559c8bc4b179b6e93d01eec3c2f5e835?size=120",
  author: {
    handle: "Ebony Programmer",
    name: "Leroy Hutchinson"
  },
  likes: 2,
  retweets: 5,
  timestamp: "2019-01-25"
};

Tweet.propTypes = {
  Tweetname: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    message: PropTypes.string,
    timeWrote: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired
    }).isRequired,
    gravatar: PropTypes.string
  })
};
ReactDOM.render(<Tweet Tweet={testTweet} />, document.querySelector("#root"));
