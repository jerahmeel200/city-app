import React from "react";
import CountUp from "react-countup";
import CustomWaypoint from "./CustomWaypoint";

const CustomTicker = ({ end, suffix, prefix }) => {
  return (
    <CustomWaypoint>
      <div>
        <CountUp
          end={end}
          suffix={suffix}
          prefix={prefix}
          start={0}
          duration={6}
        />
      </div>
    </CustomWaypoint>
  );
};

export default CustomTicker;
