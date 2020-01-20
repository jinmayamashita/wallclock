import React from "react";
import style from "./WallClockNumber.scss";

export const WallClockNumber = ({ number }) => {
  const [className, setClassName] = React.useState("");
  const preClockNumber = React.useRef(number);

  React.useEffect(() => {
    if (preClockNumber.current !== number) {
      setClassName(t => (t === "o" ? "" : "o"));
    }
    preClockNumber.current = number;
  }, [number]);

  return <i className={style[className]}>{number}</i>;
};
