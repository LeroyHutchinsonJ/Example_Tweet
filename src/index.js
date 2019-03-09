import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";

var Tweet = ({}) => (
  <div className="tweet">
    <Avatar hash={testTweet.gravatar} />
    <div className="content">
      <NameWithHandle authorObject={testTweet.author} />
      <Time timeWrote={testTweet.timestamp} />
      <Message words={testTweet.message} />
      <div className="buttons">
        <ReplyButton />
        <RetweetButton count={testTweet.retweets} />
        <LikeButton count={testTweet.likes} />
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
  retweets: 4,
  timestamp: "2019-1-15 "
};

var Avatar = ({ hash }) => {
  var url = `https://www.gravatar.com/userimage/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
};

var Message = ({ words }) => <div className="message">{words}</div>;
var NameWithHandle = ({ authorObject }) => {
  const { name, handle } = authorObject;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
};

const Time = ({ timeWrote }) => {
  const timestring = moment(timeWrote).fromNow();
  return <span className="time"> {timestring} </span>;
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = ({ count }) => (
  <i className="fa fa-retweet">
    {" "}
    <span className="style-font">{count > 0 ? count : null}</span>
  </i>
);

const LikeButton = ({ count }) => (
  <i className="fa fa-heart">
    <span className="style-font"> {count > 0 ? count : null}</span>
  </i>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet />, document.querySelector("#root"));
