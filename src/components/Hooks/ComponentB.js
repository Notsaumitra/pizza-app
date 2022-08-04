import React from "react";
import ComponentD from "./ComponentD";

const ComponentB = () => {
  console.log("ComponentB rendered");
  return (
    <div className="text-center">
      <h1>ComponentB</h1>
      <ComponentD />
    </div>
  );
};

export default ComponentB;
