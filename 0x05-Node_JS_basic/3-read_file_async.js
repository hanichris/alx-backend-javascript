const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const studentsByField = {};
        let studentCount = 0;
        const preProcessedData = data.trim().split('\n');
        for (const line of preProcessedData.slice(1)) {
          studentCount += 1;
          const row = line.split(',');
          const [firstName, field] = [row[0], row[row.length - 1]];
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstName);
        }
        console.log(`Number of students: ${studentCount}`);
        for (const [key, value] of Object.entries(studentsByField)) {
          const sValue = value.join(', ');
          console.log(`Number of students in ${key}: ${value.length}. List: ${sValue}`);
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
