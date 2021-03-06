const fs = require('browserify-fs');
const base = require('./base')

const writeData = data => [...base, data];

fs.writeFile('./base.json', writeData(), 'utf-8', err => {
  if (err) throw err;
  console.log(base);
});

export default writeData;