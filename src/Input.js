import React, { useState } from "react";
import ReactDom from "react-dom";
import "./Input.css";
import writeBase from "./writebase.js";

function Input(){
  const [data, setData] = useState([]);
  const confirm = data => confirm("all good", data[0], data[1], data[2])
  return(
    <div className = "inputDiv">
      <input onChange = {e => setData([...data][0] = e.target.value)} placeholder = "write some words"/>
      <input onChange = {e => setData([...data][1] = e.target.value)} placeholder = "write transcription"/>
      <input onChange = {e => setData([...data][2] = e.target.value)} placeholder = "write translate"/>
      <button onClick = { data => {
        confirm(data) ? writeBase(data) && setState([]) : alert("correct please") } 
        } >add</button>
    </div>
  );
};

export default Input;