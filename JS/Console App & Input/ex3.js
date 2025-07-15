import promptSync from "prompt-sync";
const prompt = promptSync();

import readline from "readline"; // ES Modules - mjs || "type": "module"

// const readline = require('readline');  // CommonJS - NodeJS

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name?\n", (fname) => {
  rl.question("What is your Email?\n", (email) => {
    rl.question("What is your age?\n", (age) => {
      rl.question("What is your favorite color?\n", (color) => {
        console.log(`Registration Summary:
            Name: ${fname}
            Email: ${email}
            Age: ${age}
            Favorite Color: ${color}`);
        rl.close();
      });
    });
  });
});
