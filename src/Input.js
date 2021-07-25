import React from "react";
import ReactDom from "react-dom";
import "./Input.css";

function Input(){
  return(
    <div className = "inputDiv">
      <input value = "write some words"/>
      <input value = "write transcription"/>
      <input value = "write translate"/>
      <button>add</button>
    </div>
  );
};

export default Input;