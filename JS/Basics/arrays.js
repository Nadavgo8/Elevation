// let companies = ["Tesla", "Amazon", "Google", "Microsoft"];
// const firstCompany = companies[0]
// console.log(firstCompany) // prints "Tesla"
// companies.push("Blizzard Entertainment");
// let employees = [];
// employees.push(...companies);


//ex1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.splice(1,2);
console.log(numbers);
numbers[3] = 1;
console.log(numbers);
numbers.splice(4,4);
console.log(numbers);
numbers.splice(0,0,0)
console.log(numbers);
