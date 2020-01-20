import React from "react";
import { useLocation } from "react-router-dom";
import style from "./WallClock.scss";
import { WallClockNumber } from "./WallClockNumber";

const getCurrentTime = () => {
  const now = new Date();
  const hou = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  return {
    hou: hou.toString().padStart(2, "0"),
    min: min.toString().padStart(2, "0"),
    sec: sec.toString().padStart(2, "0")
  };
};

// TODO: colours are not the only hexadecimal colours
const setColorStyle = p => ({ color: `#${p}` });
const setBackgroundStyle = p => ({ backgroundColor: `#${p}` });

const useQuery = () => new URLSearchParams(useLocation().search);

export const WallClock = () => {
  const [time, setTime] = React.useState(getCurrentTime());
  const q = useQuery();

  const qColor = q.get("color") ?? "FFFFFF";
  const qBg = q.get("bg") ?? "FFC000";

  const color = setColorStyle(qColor);
  const backgroundColor = setBackgroundStyle(qBg);

  React.useEffect(() => {
    const change = () => {
      setTime(x => ({ ...x, ...getCurrentTime() }));
    };
    setInterval(change, 1000);
  }, [setTime]);

  return (
    <div
      className={style.clockBackground}
      style={{
        ...backgroundColor
      }}
    >
      <div className={style.clock}>
        <p
          className={style.clockText}
          style={{
            ...color
          }}
        >
          <WallClockNumber number={time.hou} />:
          <WallClockNumber number={time.min} />:
          <WallClockNumber number={time.sec} />
        </p>
      </div>
    </div>
  );
};
