//Conditional Statements

//ex1

let age = 20;

if(age>=18){
    console.log("old enough");
}
else{
    console.log("too young");
}

//ex2
let score = 75;
if (score >= 60 && score < 70) {
  console.log("D");
} else if (score >= 70 && score < 80) {
  console.log("C");
} else if (score >= 80 && score < 90) {
  console.log("B");
} else if (score >= 90) {
  console.log("A");
}
else{
    console.log("F");
}

//ex3
let temperature = 20;
let weather = "sunny";
let activity = "";

if (weather === "sunny") {
  if (temperature > 24) {
    activity = "Go to the beach";
  } else if (temperature >= 15 && temperature <= 24) {
    activity = "Go for a walk";
  } else {
    activity = "Stay inside and read";
  }
} else if (weather === "rainy") {
  activity = "Watch a movie indoors";
} else if (weather === "cloudy") {
  if (temperature > 21) {
    activity = "Go hiking";
  } else {
    activity = "Visit a museum";
  }
}

console.log(activity);

//ex4
let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;
let valid = true;
// Your conditional code here
if(usernameLength < 5){
  console.log("Username must be at least 5 characters")
  valid = false;
}
if(passwordLength < 8){
  console.log("Password must be at least 8 characters")
  valid = false;
}
if (userAge < 8) {
  console.log("User must be 13 or older");
  valid = false;
}
if(valid){
  console.log("Welcome!");
}

//ex5
let customerType = "vip";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 6 = Saturday

let discount = 0;

if (customerType === "vip") {
  discount = 20;
} else if (customerType === "premium") {
  discount = dayOfWeek === 0 || dayOfWeek === 6 ? 15 : 10;
} else if (customerType === "regular") {
  discount = purchaseAmount > 100 ? 10 : purchaseAmount > 50 ? 5 : 0;
}
console.log(`Discount: ${discount}%`);

//ex6
let year = 1900;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

