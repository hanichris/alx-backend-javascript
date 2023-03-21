const fs = require('fs');

function countStudents(path) {
    let studentCount = 0;

    try {
        const content = fs.readFileSync(path, encoding='utf-8');
        console.log(content);
        
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
