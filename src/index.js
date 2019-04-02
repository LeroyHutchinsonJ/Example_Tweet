import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";

import Tweet from "./tweet";

var RenderArray = ({ array }) => {
  return (
    <>
      {array.map(arrayObj => (
        <span key={arrayObj.id}>
          <Tweet Tweet={arrayObj} />
        </span>
      ))}
    </>
  );
};

var tweetArray = [
  {
    id: 1,
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
  },
  {
    id: 2,
    message: "Check me out mom, no hands",
    gravatar: "140890051/559c8bc4b179b6e93d01eec3c2f5e835?size=120",
    author: {
      handle: "Lightning Mc Dean",
      name: "Tommy Mutchinson"
    },
    likes: 3,
    retweets: 1,
    timestamp: "2019-01-25"
  },

  {
    id: 3,
    message: "Bubble Gum Chicken Nugget",
    gravatar: "140890051/559c8bc4b179b6e93d01eec3c2f5e835?size=120",
    author: {
      handle: "TotallyNotLeroy",
      name: "Elroy ChinSonHutch"
    },
    likes: 4,
    retweets: 7,
    timestamp: "2019-01-25"
  }
];
ReactDOM.render(
  <RenderArray array={tweetArray} />,
  document.querySelector("#root")
);
