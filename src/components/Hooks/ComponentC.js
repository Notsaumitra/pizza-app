import React from "react";
import ComponentE from "./ComponentE";

const ComponentC = () => {
  console.log("ComponentC rendered");

  return (
    <div className="text-center bg-red-200">
      <h1>ComponentC</h1>
      <ComponentE />
    </div>
  );
};

export default ComponentC;
