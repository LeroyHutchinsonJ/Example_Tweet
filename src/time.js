import React from "react";
import moment from "moment";

const Time = ({ timeWrote }) => {
  const timestring = moment(timeWrote).fromNow();
  return <span className="time"> {timestring} </span>;
};

export default Time;
