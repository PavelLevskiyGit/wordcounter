import React, { useState } from "react";
import ReactDom from "react-dom";
import "./Input.css";
import writeBase from "./writebase.js";

function Input(){
  const [data, setData] = useState([{},{},{}]);
  
  const conf = data => window.confirm(`all good? 
    ${[...data][0].word == undefined ? "word is empty" : [...data][0].word} 
    ${[...data][1].translation == undefined ? "translation is empty" : [...data][1].translation} 
    ${[...data][2].transcription == undefined ? "transcription is empty" : [...data][2].transcription}`);
    
  console.log("data", data);
  
  return(
    <div className = "inputDiv">
      <input onChange = {e => setData([{"word" : e.target.value},{},{}])} placeholder = "write some words"/>
      <input onChange = {e => setData([[...data][0],{"translate" : e.target.value},{}])} placeholder = "write transcription"/>
      <input onChange = {e => setData([[...data][0],[...data][1],{"transcription" : e.target.value}])} placeholder = "write translate"/>
      <button onClick = { data => {
        conf(data) ? writeBase(data) && setData([]) : alert("correct please") } 
        } >add</button>
    </div>
  );
};

export default Input;