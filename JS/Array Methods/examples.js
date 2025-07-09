let vegetables = [
  { name: "Eggplant", color: "purple" },
  { name: "Carrot", color: "orange" },
  { name: "Squash", color: "orange" },
  { name: "Tomatoe", color: "red" },
  { name: "Onion", color: "white" },
  { name: "Sweet Potato", color: "orange" },
];

let orangeVegetables = vegetables.filter((v) => v.color === "orange");
console.log(orangeVegetables);
orangeVegetables.forEach((ov) => console.log(ov.name));

let people = [
  { salary: 1300, goodPerformance: false },
  { salary: 1500, goodPerformance: true },
  { salary: 1200, goodPerformance: true },
  { salary: 1700, goodPerformance: false },
  { salary: 1600, goodPerformance: true },
];

people.forEach(
  (p) => (p.salary = p.goodPerformance ? p.salary + 300 : p.salary)
);

// const updateSalary = function(person){
//     if(person.goodPerformance){
//         person.salary += 300
//     }
// }

// people.forEach(updateSalary) //using the named function!
people.forEach((p) => console.log(p.salary)); //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)

let messagesFromDad = [
  "HI HONEY",
  "HOW WAS SCHOOL??",
  "DID YOU EAT TODAY?",
  "I CAN'T FIND THE REMOTE CONTROL",
];

let lc = messagesFromDad.map((m) => m.toLowerCase());
console.log(lc);

let posts = [
  {
    id: 0,
    text: "I'm not here",
    comments: [{ id: 0, text: "support that" }],
  },
  {
    id: 1,
    text: "Find me",
    comments: [
      { id: 0, text: "here I am" },
      { id: 1, text: "rock you like a hurricane" },
      { id: 2, text: "dum dum" },
    ],
  },
  {
    id: 2,
    text: "Where's waldo anyway",
    comments: [
      { id: 0, text: "who's waldo" },
      { id: 1, text: "he's called Effi" },
    ],
  },
  {
    id: 3,
    text: "Poof",
    comments: [{ id: 0, text: "like magic" }],
  },
];

const findById = (id) => posts.find((p) => p.id === id);
console.log(findById(1)); // prints {id: 1, text: "Find me", comments: Array(3)}

const findCommentByID = (post, comment) =>
  findById(post).comments.find((c) => c.id === comment);
console.log(findCommentByID(1, 0));

let movies = [
  { title: "Dareangel", studio: "Marvel", year: 2023 },
  { title: "Batterfly", studio: "Fox", year: 2021 },
  { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
  { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
];

if (movies.some((m) => m.studio === "Marvel")) {
  console.log("Let's go watch some movies");
} else {
  console.log("Let's stay home");
}

if (movies.every((m) => m.year > 2020)) {
  console.log("Futuristic stuff");
} else {
  console.log("Yawn");
}

let prices = [12.99, 8.5, 23.75, 4.25, 16.0];

let total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // prints 65.49

let scores = [87, 92, 78, 95, 88, 91];
let max = scores.reduce((max, score) => (max < score ? score : max), 0);
console.log(max);

let votes = ["pizza", "tacos", "pizza", "burgers", "pizza", "tacos", "salad"];
let voteCounts = votes.reduce((counts, vote) => {
  counts[vote] = (counts[vote] || 0) + 1;
  return counts;
}, {});
// Result: { pizza: 3, tacos: 2, burgers: 1, salad: 1 }
