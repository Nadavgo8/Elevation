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
