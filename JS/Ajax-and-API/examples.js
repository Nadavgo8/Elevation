document.getElementById("btnDog").addEventListener("click", () => {
  // Call API - get the image URL
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error in fetching random dog");
      }
      return response.json();
    })
    .then((data) => {
      // Update image URL in DOM
      console.log(data);
      document.getElementById("imgDog").src = data.message;
    })
    .catch((err) => console.log(err));
  console.log("hello");
});
    





document.getElementById("btnDog").addEventListener("click", () => {
  // Call API - get the image URL
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      document.getElementById("imgDog").src = response.data.message;
    })
    .catch((err) => console.log(err));
  console.log("hello");
});

$.get(
  "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  function (result) {
    console.log(result);
  }
);
$.get(
  "https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind",
  function (result) {
    console.log(result.items[0].volumeInfo.description); //prints A lot of description Text
  }
);
$.ajax({
  method: "GET",
  url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
  success: function (data) {
    console.log(data);
  },
  error: function (xhr, text, error) {
    console.log(text);
  },
}); 

