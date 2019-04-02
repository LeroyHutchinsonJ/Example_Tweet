import React from "react";
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

export default Tweet;
