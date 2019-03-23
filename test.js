const fs = require('fs');

const localStorage = JSON.parse(fs.readFileSync('./local_storage'));

console.log(typeof localStorage);

localStorage.name = "trungkien";

console.log(JSON.stringify(localStorage));

fs.writeFileSync('./local_storage', JSON.stringify(localStorage));