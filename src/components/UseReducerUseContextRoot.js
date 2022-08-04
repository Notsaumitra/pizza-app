import React, { createContext, useState } from "react";
import ComponentA from "./Hooks/ComponentA";
import ComponentB from "./Hooks/ComponentB";
import ComponentC from "./Hooks/ComponentC";
const CountContext = createContext();

const UseReducerUseContextRoot = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ countValue: count, dispatch: setCount }}>
        <div className="container-full flex pb-20">
          <div className="w-1/3 bg-red-200">
            <ComponentA />
          </div>
          <div className="w-1/3 bg-blue-200">
            <ComponentB />
          </div>
          <div className="w-1/3 bg-blue-200">
            <ComponentC />
          </div>
        </div>
      </CountContext.Provider>
    </div>
  );
};

export default UseReducerUseContextRoot;
export { CountContext };
