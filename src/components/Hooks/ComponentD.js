import React, { useContext } from "react";
import { CountContext } from "../UseReducerUseContextRoot";

const ComponentD = () => {
  const countContext = useContext(CountContext);
  console.log("ComponentD rendered");
  console.log(countContext);
  return (
    <div className="text-center">
      <h1>ComponentD</h1>
      <p>{countContext.countValue}</p>
      <button
        className="rounded-full bg-red-300 px-2 ml-2"
        onClick={() => countContext.dispatch(countContext.countValue + 1)}
      >
        Increase
      </button>
      <button
        className="rounded-full bg-red-300 px-2 ml-2"
        onClick={() => countContext.dispatch(countContext.countValue - 1)}
      >
        Decrease
      </button>
      <button
        className="rounded-full bg-red-300 px-2 ml-2"
        onClick={() => countContext.dispatch(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default ComponentD;
