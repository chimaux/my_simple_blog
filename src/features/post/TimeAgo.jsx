import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";

  const date = timestamp && typeof timestamp === "string" ? parseISO(timestamp) : null;
  timeAgo = date ? `${formatDistanceToNow(date)} ago` : 'Unknown';

  return (
    <div >
      <span 
      title={timestamp}>
         <i>{timeAgo}</i>
      </span>
    </div>
  );
};

export default TimeAgo;
