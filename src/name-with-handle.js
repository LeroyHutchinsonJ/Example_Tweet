import React from "react";

var NameWithHandle = ({ authorObject }) => {
  const { name, handle } = authorObject;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
};

export default NameWithHandle;
