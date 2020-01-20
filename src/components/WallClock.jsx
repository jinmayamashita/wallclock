import React from "react";
import { useLocation } from "react-router-dom";
import style from "./WallClock.scss";

const getCurrentTime = () => {
  const tt = new Date();
  const h = tt.getHours();
  const m = tt.getMinutes();
  const s = tt.getSeconds();
  return [h, m, s].join(":");
};

// TODO: colours are not the only hexadecimal colours
const setColorStyle = p => ({ color: `#${p}` });
const setBackgroundStyle = p => ({ backgroundColor: `#${p}` });

const useQuery = () => new URLSearchParams(useLocation().search);

export const WallClock = () => {
  const [timer, setTimer] = React.useState(getCurrentTime());
  const q = useQuery();
  const qColor = q.get("color") ?? "FFFFFF";
  const qBg = q.get("bg") ?? "FFC000";

  const color = setColorStyle(qColor);
  const bgColor = setBackgroundStyle(qBg);

  React.useEffect(() => {
    const change = () => {
      setTimer(() => getCurrentTime());
    };
    setInterval(change, 1000);
  }, [setTimer]);

  return (
    <div className={style.clockBackground}>
      <h1 className={style.clockText}>{timer}</h1>
    </div>
  );
};
