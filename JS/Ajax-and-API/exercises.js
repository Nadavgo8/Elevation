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

// fetchBookISBN(9782806269171);
// fetchBookISBN(1440633908);
// fetchBookISBN(9781945048470);
// fetchBookISBN(9780307417138);

//ex2
function fetchBookISBN2(queryType, queryValue) {
  const encodedValue = encodeURIComponent(queryValue);

  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${encodedValue}`,
    success: function (data) {
      if (data.totalItems > 0 && data.items && data.items[0].volumeInfo) {
        const title = data.items[0].volumeInfo.title;
        console.log("Title:", title);
        console.log(data);
        console.log("Author(s):", data.items[0].volumeInfo.authors?.join(", "));
      } else {
        console.log("No results found for:", queryType, queryValue);
      }
    },
    error: function (xhr, text, error) {
      console.log("Error:", text);
    },
  });
}

fetchBookISBN2("isbn", 9789814561778);
fetchBookISBN2("intitle", "How to Win Friends and Influence People");
