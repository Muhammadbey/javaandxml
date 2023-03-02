import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleReallyh = () => {
    setCount((prevCount) => prevCount + 100);
  };
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count === 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };
  const handleRestart = () => {
    setCount((prevCount) => prevCount - prevCount);
  };

  return (
    <div className="part">
      <div className="wrapper">
        <button className="btn" onClick={handleReallyh}>
          Let's + 100
        </button>
        <button className="btn" onClick={handleIncrement}>
          +
        </button>
        <p className="p">{count}</p>
        <button
          className="btn"
          onClick={handleDecrement}
          disabled={count === 0}
        >
          -
        </button>
        <button className="btn" onClick={handleRestart} disabled={count === 0}>
          Reset this
        </button>
      </div>
    </div>
  );
};

export default Counter;
