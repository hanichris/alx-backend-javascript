const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  
  const stream = fs.createReadStream(path);
  const rl = readline.createInterface({input: stream});
  const studentsByField = {};

  rl.on('line', (line) => {
    if (line === "firstname,lastname,age,field") {
      const headers = line;
    } else {
      const row = line.split(',');
      const firstName = row[0];
      const field = row[row.length - 1];
      if (field in Object.keys(studentsByField) === false) {
        studentsByField[field] = [];
      } else {
        studentsByField[field].push(firstName);
      }
    }
  });

  rl.on('close', () => {
    console.log(studentsByField);
  })

}

module.exports = countStudents;
