import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var Tweet = ({ tweet }) => (
  <div className="tweet">
    <Avatar hash={tweet.gravatar} />
    <div className="content">
      <NameWithHandle />
      <Message words={tweet.message} />
      <div className="buttons">
        <ReplyButton />
        <RetweetButton />
        <LikeButton />
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
    handle: "Catperson",
    name: "I am a cat person"
  },
  likes: 2,
  retweets: 4,
  timestamp: "2016-07-30 21:24:37"
};

var Avatar = ({ hash }) => {
  var url = `https://www.gravatar.com/userimage/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
};

var Message = ({ words }) => <div className="message">{words}</div>;
var NameWithHandle = () => (
  <span className="name-with-handle">
    <span className="name">Leroy Hutchinson</span>
    <span className="handle">@EbonyProgrammer</span>
    <span>
      <Time />
    </span>
  </span>
);

const Time = () => <span className="time"> 3h ago </span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart like-button" />;

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
