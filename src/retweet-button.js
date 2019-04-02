import React from "react";

const RetweetButton = ({ count }) => (
  <i className="fa fa-retweet">
    {" "}
    <span className="style-font">{count > 0 ? count : null}</span>
  </i>
);

export default RetweetButton;
