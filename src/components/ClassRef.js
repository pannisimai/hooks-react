import React from "react";
import { thisTypeAnnotation } from "@babel/types";

export default class ClassRef extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  giveMeRefs = () => {
    const theRef = this.myRef.current.value;
    console.log(theRef);
  };

  render() {
    return (
      <React.Fragment>
        <input type="text" defaultValue="panni" ref={this.myRef} />
        <button onClick={this.giveMeRefs}>plug me iiin</button>
      </React.Fragment>
    );
  }
}
