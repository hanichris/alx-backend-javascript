const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  
  const stream = fs.createReadStream(path);
  const rl = readline.createInterface({input: stream});
  const studentsByField = {};
  let count = 0;

  rl.on('line', (line) => {
    if (line !== "firstname,lastname,age,field" && line !== '') {
      count += 1;
      const row = line.split(',');
      const firstName = row[0];
      const field = row[row.length - 1];
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    }
  });

  rl.on('close', () => {
    console.log(`Number of students: ${count}`);
    for (const [key, value] of Object.entries(studentsByField)) {
      string_value = value.join(', ');
      console.log(`Number of students in ${key}: ${value.length}. List: ${string_value}`);
    }
  })

}

module.exports = countStudents;
