function rollDice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("The dice fell off the table!");
      } else {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        resolve(diceValue);
      }
    }, 500);
  });
}
rollDice()
  .then((result) => {
    console.log("Dice rolled:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
