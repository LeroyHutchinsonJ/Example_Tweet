import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var Tweet = () => (
  <div className="tweet">
    <Avatar />
    Tweet
  </div>
);

var Avatar = () => (
  <img
    src="https://www.gravatar.com/avatar/nothing"
    className="avatar"
    alt="avatar"
  />
);

ReactDOM.render(<Tweet />, document.querySelector("#root"));
