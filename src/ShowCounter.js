import React from "react";
import ReactDOM from "react-dom";
import "./showcounter.css";
import base from "./base";


function ShowCounter() {

const state = [
  "hi",
];

  return(
    <div>
      {base?base.test.[0].word:state}
    </div>
  );
}

export default ShowCounter;