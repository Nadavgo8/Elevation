import promptSync from "prompt-sync";
const prompt = promptSync();

let balance = 100;

function showMenu() {
  console.log("\n=== Banking System ===");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit");
}

function isValidPositiveNumber(input) {
  const num = Number(input);
  return !isNaN(num) && num > 0;
}

let running = true;
showMenu();

while (running) {
  const choice = prompt("Choose option (1-4): ");

  switch (choice) {
    case "1":
      console.log(`Your balance is: $${balance}`);
      break;

    case "2":
      const deposit = prompt("Enter amount to deposit: $");
      if (isValidPositiveNumber(deposit)) {
        balance += Number(deposit);
        console.log(`New balance: $${balance}`);
      } else {
        console.log("Invalid deposit amount. Please enter a positive number.");
      }
      break;

    case "3":
      const withdraw = prompt("Enter amount to withdraw: $");
      if (isValidPositiveNumber(withdraw)) {
        if (Number(withdraw) > balance) {
          console.log("Insufficient funds.");
        } else {
          balance -= Number(withdraw);
          console.log(`New balance: $${balance}`);
        }
      } else {
        console.log(
          "Invalid withdrawal amount. Please enter a positive number."
        );
      }
      break;

    case "4":
      console.log("Thank you. Goodbye!");
      running = false;
      break;

    default:
      console.log("Invalid choice. Please enter 1, 2, 3, or 4.");
  }
}
