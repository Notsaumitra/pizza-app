import React, { useContext } from "react";
import { CountContext } from "../UseReducerUseContextRoot";

const ComponentA = () => {
  console.log("ComponentA rendered");

  const countContext = useContext(CountContext);

  return (
    <div className="text-center bg-red-200">
      <h1>ComponentA</h1>
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

export default ComponentA;
