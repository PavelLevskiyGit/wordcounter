import React from "react";
import ReactDOM from "react-dom";
import "./showcounter.css";
import base from "./base";


function ShowCounter() {

  return(
    <div>
      {base?base.[0][0].word:"no connect to base"}
    </div>
  );
}

export default ShowCounter;