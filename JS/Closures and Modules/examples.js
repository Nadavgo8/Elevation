// const setCounter = function (num) {
//   let counter = 0;

//   const count = function () {
//     counter += num;
//     console.log(counter);
//   };

//   return count;
// };

// const increment = setCounter(2);
// increment();
// increment();

// const family = function(name){
//     const arr = [];
//     const birth = function(name){
//         arr.push(name);
//         console.log(arr);
//     }
//     return birth;
// }

// const giveBirth = family();
// giveBirth("Shlomo");
// giveBirth("Assa");
// const giveBirth = family("Shlomo");
// const giveBirth = family("Assa");





// const mathOperations = function () {
//   const add = function (x, y) {
//     return x + y;
//   };

//   const subtract = function (x, y) {
//     return x - y;
//   };

//   const multiply = function (x, y) {
//     return x * y;
//   };

//   const divide = function (x, y) {
//     return x / y;
//   };

//   return {
//     add: add,
//     sub: subtract,
//     mult: multiply,
//     div: divide,
//   };

// };
// //What is 13 + 29?

// // What is 1.75 x 24?

// // What is 7 x (36 / 6)? (do this in one line)
// let m = mathOperations()

// console.log(m.add(13, 29));
// console.log(m.mult(1.75, 24));
// console.log(m.mult(7, m.div(36,6)));



const UsersModule = function () {
  const _users = ["Aaron", "Avi"];

  const addUser = function (user) {
    _users.push(user);
  };

  const listUsers = function () {
    for (let user of _users) {
      console.log(user);
    }
  };

  return {
    addUser: addUser,
    listUsers: listUsers,
  };
};

const usersModule = UsersModule();

usersModule.addUser("Narkis");
usersModule.listUsers();
usersModule.addUser("Lebron");
usersModule.addUser("Kobe");
usersModule.listUsers();
console.log(usersModule.users);
// Add another two users
// Show the users
// Try to do console.log(userModule.users) - what do you see?