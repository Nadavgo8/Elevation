const posts = [
  { name: "Alice", text: "Hello everyone!" },
  { name: "Bob", text: "Nice to be here." },
];

const nameInput = document.getElementById("name-input");
const textInput = document.getElementById("text-input");
const submitBtn = document.getElementById("submit-btn");
const postsContainer = document.getElementById("posts-container");

// Renders all posts to the DOM
function render() {
  postsContainer.innerHTML = ""; // Clear existing posts
  for (let post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<strong>${post.name}</strong>: ${post.text}`;
    postsContainer.appendChild(postDiv);
  }
}

// Add new post on button click
submitBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const text = textInput.value.trim();

  if (name && text) {
    posts.push({ name, text });
    render(); // re-render after updating data
    nameInput.value = "";
    textInput.value = "";
  }
});

// Initial render
render();


