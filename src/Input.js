import React, { useState } from "react";
import ReactDom from "react-dom";
import "./Input.css";
import writeBase from "./writebase.js";

function Input(){
  const [data, setData] = useState([]);
  return(
    <div className = "inputDiv">
      <input onChange = {e => setData(e.target.value)} placeholder = "write some words"/>
      <input placeholder = "write transcription"/>
      <input placeholder = "write translate"/>
      <button onClick = { data => writeBase(data) } >add</button>
    </div>
  );
};

export default Input;