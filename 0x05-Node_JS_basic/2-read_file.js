const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const filelines = fs.readFileSync(path, 'utf8').trim().split('\n');
  const studentsByField = {};
  let studentCount = 0;

  for (const line of filelines.slice(1)) {
    studentCount += 1;
    const row = line.split(',');
    const firstName = row[0];
    const field = row[row.length - 1];
    if (!studentsByField[field]) {
      studentsByField[field] = [];
    }
    studentsByField[field].push(firstName);
  }

  console.log(`Number of students: ${studentCount}`);
  for (const [key, value] of Object.entries(studentsByField)) {
    const stringValue = value.join(', ');
    console.log(`Number of students in ${key}: ${value.length}. List: ${stringValue}`);
  }
}

module.exports = countStudents;
