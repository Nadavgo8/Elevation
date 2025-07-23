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



const myInput = document.getElementById("item-input");
const addButton = document.getElementById("add-btn");
const list = document.getElementById("shopping-list");

addButton.addEventListener("click", addToList);

function addToList() {
  const value = myInput.value;
  if (value) {
    const newItem = document.createElement("li");
    newItem.textContent = value;
    list.appendChild(newItem);
    myInput.value = "";
  }
}