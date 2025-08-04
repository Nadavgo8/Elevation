
//ex1
function fetchBookISBN(isbn) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    success: function (data) {
      const title = data.items[0].volumeInfo.title;
      console.log("Title:", title);
      console.log(data);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
}

fetchBookISBN(9782806269171);
fetchBookISBN(1440633908);
fetchBookISBN(9781945048470);
fetchBookISBN(9780307417138);