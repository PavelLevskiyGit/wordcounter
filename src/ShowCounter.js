import React from "reacr";
import ReactDOM from "react-dom";
import "./showcounter.css";

const fs = require("fs");


function ShowCounter () {

fs.readFile('base.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    const base = JSON.parse(data.toString());
});

  return(
    <div>
      {base}
    </div>
  );
}

export default ShowCounter;