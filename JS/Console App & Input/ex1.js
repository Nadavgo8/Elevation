const [, , num1, operator, num2] = process.argv;
let result = 0;
if (operator === "+") {
  result = Number(num1) + Number(num2);
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "/") {
  result = num1 / num2;
} else if (operator === "*") {
  result = num1 * num2;
} else {
  console.log("Please input a valid operator");
}

console.log(`${num1} ${operator} ${num2} = ${result}`);



import promptSync from "prompt-sync";
const prompt = promptSync();

const fname = prompt("What is your name? ");
const age = prompt("What is your age? ");

console.log(`Hello ${fname}, you are ${age} years old`);

// Hi - I checked the \n issue in prompt-sync... and strangley still didn't find a solution for it... 

// But here is a nice workaround I can offer:
// Instead of the following code the doesn't work well

// const name = prompt("What is your name?\n");

// You can use the following code (and if it is more than once you should wrap it with a function):

// console.log("What is your name?");
// const name = prompt("> ");
