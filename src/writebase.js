const fs = require('fs');


const writeData = data => alert(data[0][0].word == undefined ? "no world" : data[0][0].word);

/* fs.writeFile(base.json, data, 'utf-8', err => {
  if (err) throw err;
  console.log('all done');
});*/

export default writeData;