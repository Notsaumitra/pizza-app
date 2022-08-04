import React, { useContext, useReducer } from "react";
import { FirstName, LastName } from "../App";

const About = () => {
  const initialState = {
    countValue: 0,
  };

  //useContext way
  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, countValue: state.countValue + 1 };
      case "decrement":
        return { ...state, countValue: state.countValue - 1 };
      case "reset":
        return { ...state, countValue: 0 };
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="text-center mb-5">
      <em>
        {fname}, {lname}
      </em>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    {fname} {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
      <h1>About page</h1>
      <p>Use Reducer</p>
      <h2>{count.countValue}</h2>
      <button
        className="button rounded-full bg-yellow-300 ml-2 px-2 pb-1"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increase
      </button>
      <button
        className="button rounded-full bg-yellow-300 ml-2 px-2 pb-1"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrease
      </button>
      <button
        className="button rounded-full bg-yellow-300 ml-2 px-2 pb-1"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default About;
