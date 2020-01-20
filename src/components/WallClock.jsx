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

const isHex = t => RegExp("^#", "g").test(t);
const setColor = p => ({ color: isHex(p) ? p : `#${p}` });
const setBackground = p => ({ backgroundColor: isHex(p) ? `${p}` : `#${p}` });

const useQuery = () => new URLSearchParams(useLocation().search);

export const WallClock = () => {
  const [time, setTime] = React.useState(getCurrentTime());
  const q = useQuery();

  // default colors
  const qColor = q.get("color") ?? "fffcf5";
  const qBg = q.get("bg") ?? "e74960";

  const callbackTime = React.useCallback(() => {
    const t = getCurrentTime();
    setTime(x => ({ ...x, ...t }));
  }, [setTime]);

  React.useEffect(() => {
    const change = () => {
      callbackTime();
    };
    setInterval(change, 1000);
  }, [callbackTime]);

  const color = setColor(qColor);
  const backgroundColor = setBackground(qBg);

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
