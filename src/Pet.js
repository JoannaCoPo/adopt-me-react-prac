import React from "react";

const Pet = (props) => {
  //"pet stamp"
  return React.createElement("div", {}, [
    // array - I have a div and within that div there's going to be 3 other elms
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

export default Pet;