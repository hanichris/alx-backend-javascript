const http = require('http');
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

const host = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/students':
      res.statusCode = 200;
      res.write('This is the list of our students\n');
      countStudents(process.argv[2]).then((data) => {
        res.end(data);
      }).catch((err) => {
        res.statusCode = 404;
        res.end(`${err}`);
      });
      break;

    default:
      res.writeHead(200);
      res.end('Hello Holberton School!');
      break;
  }
});

app.listen(port, host);
module.exports = app;
