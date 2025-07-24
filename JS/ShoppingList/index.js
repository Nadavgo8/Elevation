// const myInput = document.getElementById("item-input");
// const form = document.getElementById("item-form");
// const list = document.getElementById("shopping-list");

// form.addEventListener("submit", addToList);

// function addToList(e) {
//   e.preventDefault();
//   const value = myInput.value;

//   if (value) {
//     const newItem = document.createElement("li");
//     newItem.textContent = value;
//     list.appendChild(newItem);
//     myInput.value = "";
//   }
// }


// var frontEnd = ["HTML", "CSS", "Javascript"];

// const myInput = document.getElementById("item-input");
// const addButton = document.getElementById("add-btn");
// const list = document.getElementById("shopping-list");

// addButton.addEventListener("click", addToList);

// function addToList() {
//   const value = myInput.value;
//   if (value) {
//     const newItem = document.createElement("li");
//     newItem.textContent = value;
//     list.appendChild(newItem);
//     myInput.value = "";
//   }
// }




function foo() {
  let sum = 0;
  for (let i = 1000; i < 2000; i++) {
    if (i % 203 === 0) {
      sum += getSecondDigit(i);
    } else if (i % 497 === 0) {
      sum += getLastDigit(i);
    } else if (i % 293 === 0) {
      sum += getLastDigit(i * 13);
    }
  }
  return sum;
}

function getSecondDigit(number) {
  return parseInt(number.toString().split("")[0]);
}

function getLastDigit(number) {
  return parseInt(number.toString().split("")[number.length - 1]);
}

foo();
