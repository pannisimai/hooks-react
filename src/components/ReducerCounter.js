// import eveeeerythiiiiiing hook useReducer
import React, { useReducer } from "react";

const initialState = { count: 0 };

// create a reducer

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// function that use the hook reducer and the reducer - here we dispatch actions

export default function ReduceCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Counter: {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}
