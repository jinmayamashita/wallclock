// @flow
import * as React from "react";
import { getCurrentTime } from "../utils"

export const useTime = () => {
  const [time, setTime] = React.useState(getCurrentTime());

  const callbackTime = React.useCallback(() => {
    const t = getCurrentTime();
    setTime(x => ({ ...x, ...t }));
  }, [setTime]);

  React.useEffect(() => {
    const change = () => callbackTime();
    setInterval(change, 1000);
  }, [callbackTime]);

  return time;
};