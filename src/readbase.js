const fs = require("fs");
const base = null
fs.readFile('base.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    base = JSON.parse(data.toString());
});

export default base;