import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

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

const WallClock = () => {
  const [timer, setTimer] = React.useState(getCurrentTime());
  const q = useQuery();
  const qColor = q.get("color") ?? "FFFFFF"
  const qBg = q.get("bg") ?? "FFC000"

  const color = setColorStyle(qColor);
  const bgColor = setBackgroundStyle(qBg);

  React.useEffect(() => {
    const change = () => {
      setTimer(() => getCurrentTime());
    };
    setInterval(change, 1000);
  }, [setTimer]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...bgColor
      }}
    >
      <h1
        style={{
          fontSize: "12vw",
          width: "520px",
          display: "block",
          transition: "all ease 1s",
          ...color
        }}
      >
        {timer}
      </h1>
    </div>
  );
};

const App = () => (
  <Router>
    <Route path="*">
      <WallClock />
    </Route>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
