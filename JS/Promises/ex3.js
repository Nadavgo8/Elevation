// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 }, // Out of stock
  monitor: { price: 299, stock: 3 },
};

function checkInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 500ms (simulating database check)
  // 2. Checks if all items are in stock
  // 3. Resolves with items if all available
  // 4. Rejects with specific item that's out of stock
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const item of items) {
        if (inventory[item].stock <= 0) {
          reject(new Error(`${item} is out of stock`));
        }
      }
      resolve(items);
    }, 500);
  });
}

function calculateTotal(items) {
  // TODO: Return a promise that:
  // 1. Waits 200ms
  // 2. Calculates total price including 8% tax
  // 3. Resolves with { subtotal, tax, total }
  return new Promise((resolve) => {
    setTimeout(() => {
      const subtotal = items.reduce(
        (sum, item) => sum + inventory[item].price,
        0
      );
      const tax = subtotal * 0.08;
      const total = subtotal + tax;
      resolve({ subtotal, tax, total });
    }, 200);
  });
}

function processPayment(amount) {
  // TODO: Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.9;
      if (success) {
        resolve({
          transactionId: Math.floor(Math.random() * 1000000),
          amount,
          status: "success",
        });
      } else {
        reject(new Error("Payment failed. Please try again."));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status

  return new Promise((resolve) => {
    setTimeout(() => {
      for (const item of items) {
        inventory[item].stock -= 1;
      }
      resolve(`Inventory updated for: ${items.join(", ")}`);
    }, 300);
  });
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
  // TODO: Implement the complete checkout flow

  return checkInventory(itemNames)
    .then((validItems) => calculateTotal(validItems))
    .then((priceInfo) => {
      return processPayment(priceInfo.total).then((paymentResult) => {
        return updateInventory(itemNames).then((updateMsg) => {
          return {
            payment: paymentResult,
            inventory: updateMsg,
          };
        });
      });
    });
}

// Test cases:
checkout(["laptop", "mouse"]) // Should succeed
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["laptop", "keyboard"]) // Should fail - keyboard out of stock
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["monitor", "mouse", "laptop"]) // Might fail at payment (10% chance)
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));
