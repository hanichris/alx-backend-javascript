const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const studentsByField = {};
        let resData = '';
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
        resData += `Number of students: ${studentCount}\n`;
        for (const [key, value] of Object.entries(studentsByField)) {
          const sValue = value.join(', ');
          resData += `Number of students in ${key}: ${value.length}. List: ${sValue}\n`;
        }
        resolve(resData.trimEnd());
      }
    });
  });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  countStudents(process.argv[2]).then((data) => {
    res.status(200).send(`This is the list of our students\n${data}`);
  }).catch(() => {
    res.status(404).send('This is the list of our students\nCannot load the database');
  });
})

app.listen(port);
module.exports = app;
