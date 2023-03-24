const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const studentsByField = {};
    let studentCount = 0;
    console.log(`data before pre-processing: ${data}`);
    data = data.trim().split('/n');
    console.log(`data after pre-processing: ${data}`);
  })
}

module.exports = countStudents;
