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
function fetchBookByQuery(queryType, queryValue) {
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

// fetchBookByQuery("isbn", 9789814561778);
// fetchBookByQuery("title", "How to Win Friends and Influence People");

//ex3
function fetchAllBookItems(queryType, queryValue) {
  // Fix for unsupported query types
  if (queryType === "title") {
    queryType = "intitle"; // Google Books API needs "intitle"
  }

  const encodedValue = encodeURIComponent(queryValue);

  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${encodedValue}`,
    success: function (data) {
      if (data.totalItems > 0) {
        let results = data.items;

        // If the original request was a title search, do exact title match
        if (queryType === "intitle") {
          results = results.filter((item) => {
            const actualTitle = item.volumeInfo.title?.toLowerCase().trim();
            return actualTitle === queryValue.toLowerCase().trim();
          });
        }

        if (results.length === 0) {
          console.log("No exact matches found.");
          return;
        }

        results.forEach((item) => {
          const info = item.volumeInfo;
          const title = info.title || "No Title";
          const authors = info.authors
            ? info.authors.join(", ")
            : "Unknown author";
          console.log(`Title: ${title}`);
          console.log(`Authors: ${authors}`);
        });
      } else {
        console.log("No books found.");
      }
    },
    error: function (xhr, text, error) {
      console.log("Error:", text);
    },
  });
}

// fetchAllBookItems("isbn", 9789814561778);
fetchAllBookItems("title", "How to Win Friends and Influence People");
