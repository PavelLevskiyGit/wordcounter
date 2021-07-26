const fs = require('fs');
const base = require('./base')

const writeData = data => [...base, data];

fs.writeFile('./base.json', writeData(), 'utf-8', err => {
  if (err) throw err;
  console.log('all done');
});

export default writeData;