import React, { useContext } from "react";
import { CountContext } from "../UseReducerUseContextRoot";

const ComponentF = () => {
  console.log("ComponentF rendered");
  const { countValue: count, dispatch } = useContext(CountContext);
  return (
    <div className="text-center">
      <h1>ComponentF</h1>
      <p>{count}</p>
      <button
        className="rounded-full bg-red-300 px-2 ml-2"
        onClick={() => dispatch(count + 1)}
      >
        Increase
      </button>
      <button
        className="rounded-full bg-red-300 px-2 ml-2"
        onClick={() => dispatch(count - 1)}
      >
        Decrease
      </button>
      <button
        className="rounded-full bg-red-300 px-2 ml-2"
        onClick={() => dispatch(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default ComponentF;
