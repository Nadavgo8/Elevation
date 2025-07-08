//ex1
let p1 = {
  name: "Alice",
  age: 30,
  city: "New York",
};

let p2 = {
  name: "Bob",
  age: 25,
  city: "Los Angeles",
};

if (p1.age === p2.age && p1.city === p2.city) {
  console.log(`${p1.name} wanted to date ${p2.name}`);
} else if (p1.city !== p2.city) {
  console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`);
}

//ex2
let library = {
  books: [
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
  ],
};

console.log(library);
  
//ex3
// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }
  
//   const name = "Bob";//'Bob' or 'Ted';
//   if(!name in reservations){
//     console.log("You have no reservation");
//   }

//   else if(reservations.name.claimed === false){
//     console.log(`Welcome, ${reservations.name}!` )
//   }
//   else{
//     console.log("Hmm, someone already claimed this reservation");
//   }
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const customer = "Bob"; // Try with 'Ted' or any other name
const normalizedName = customer.toLowerCase();
let matchedKey = null;

// Manually loop through keys to find a case-insensitive match
for (let key in reservations) {
  if (key.toLowerCase() === normalizedName) {
    matchedKey = key;
    break;
  }
}
if (matchedKey !== null) {
  if (reservations[matchedKey].claimed) {
    console.log("Hmm, someone already claimed this reservation");
  } else {
    console.log(`Welcome, ${matchedKey}`);
  }
} else {
  reservations[customer] = { claimed: true };
}
console.log(reservations);
  

//ex4
const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true / false, // choose one
  fridge: {
    price: 500,
    works: true / false, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

let radish = null;
for (let i = 0; i < kitchen.fridge.items.length; i++) {
  if (kitchen.fridge.items[i].name === "radish") {
    radish = kitchen.fridge.items[i];
    break;
  }
}

const daysExpired = date - radish.expiryDate;
 
const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;
const repairCost = kitchen.fridge.price / 2;

let message = `Geraldine's radish expired ${daysExpired} day ago.`;

if (fridgeWorks && hasOven) {
  message += " Weird, considering her fridge works. Luckily, she has an oven to cook the radish in.";
} else if (fridgeWorks && !hasOven) {
  message += " Weird, considering her fridge works. Too bad she doesn't have an oven to cook the radish in.";
} else if (!fridgeWorks && hasOven) {
  message += ` Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in. And she'll have to pay ${repairCost} to fix the fridge.`;
} else {
  message += ` Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the radish in. And she'll have to pay ${repairCost} to fix the fridge.`;
}

console.log(message);