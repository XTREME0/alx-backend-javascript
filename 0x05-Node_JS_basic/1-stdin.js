process.stdout.write('Welcome to Holberton School, what is your name?\n');

function goodBye() {
  process.stdout.write('This important software is now closing\n');
}

process.stdin.on('readable', () => {
  const n = process.stdin.read();

  if (n) {
    process.stdout.write(`Your name is: ${n}`);
  }
});

process.stdin.on('end', goodBye);
