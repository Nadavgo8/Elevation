const http = require("http");

const server = http.createServer(function (request, response) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  if (request.method === "GET") {
    console.log(request.method);
    if (request.url === "/") {
      response.write("Welcome to my server");
      console.log(request.url);
    } else if (request.url === "/about") {
      response.write("This is the about page");
      console.log(request.url);
    } else if (request.url === "/contact") {
      response.write("0525381648");
      console.log(request.url);
    } else {
      response.statusCode = 404;
    }
  } else {
    response.statusCode = 404;
  }
  response.end();
});

const port = 3000;
server.listen(port, function () {
  console.log(`Node server created at port ${port}`);
});
