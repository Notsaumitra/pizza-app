import React from "react";
import ComponentF from "./ComponentF";

const ComponentE = () => {
  console.log("ComponentE rendered");

  return (
    <div>
      <h1>ComponentE</h1>
      <ComponentF />
    </div>
  );
};

export default ComponentE;
