import React, { useContext } from "react";

const NumberContext = React.createContext();

export default function Context() {
  return (
    <NumberContext.Provider value={42}>
      <Display />
    </NumberContext.Provider>
  );
}

function Display() {
  const value = useContext(NumberContext);
  return <div> the answer is {value} to everything </div>;
}
