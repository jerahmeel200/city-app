import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

const CustomWaypoint = ({ children }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  return <Waypoint onEnter={onVWEnter}>{viewPortEntered && children}</Waypoint>;
};

export default CustomWaypoint;
