import React from "react";

var Avatar = ({ hash }) => {
  var url = `https://www.gravatar.com/userimage/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
};

export default Avatar;
