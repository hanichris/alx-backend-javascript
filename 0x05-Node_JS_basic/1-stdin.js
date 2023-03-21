const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  process.stdout.write(`Your name is: ${answer}`);
  if (process.stdin.isTTY) {
    process.exit();
  }
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
