process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    console.log(`Your name is: ${data.toString()}`);
  })
} else {
  
}
