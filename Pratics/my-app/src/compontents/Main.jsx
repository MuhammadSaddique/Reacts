import React from "react";

const Main = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>age: {props.age}</h1>
    </div>
  );
};

export default Main;
