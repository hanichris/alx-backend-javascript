const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  
  const stream = fs.createReadStream(path);
  const rl = readline.createInterface({input: stream});

  rl.on('line', (line) => {
    console.log(`Received: ${line}`);
  });

}

module.exports = countStudents;
