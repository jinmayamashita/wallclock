// @flow
import * as React from "react";
import style from "./WallClock.scss";
import { WallClockNumber } from "./WallClockNumber";
import { useTime, useQuery } from "../hooks"
import { isHex, setColor, setBackground } from "../utils"

export const WallClock: React.ComponentType<{}> = () => {
  const q = useQuery();
  const { hou, min, sec } = useTime();

  // Default colors
  const qColor = q.get("color") ?? "fffcf5";
  const qBg = q.get("bg") ?? "e74960";

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
          <WallClockNumber number={hou} />:
          <WallClockNumber number={min} />:
          <WallClockNumber number={sec} />
        </p>
      </div>
    </div>
  );
};
