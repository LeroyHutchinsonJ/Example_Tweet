import React from "react";

const LikeButton = ({ count }) => (
  <i className="fa fa-heart">
    <span className="style-font"> {count > 0 ? count : null}</span>
  </i>
);

export default LikeButton;
