const express = require("express");
const app = express();

const users = {
  tilda: "You've done a wonderful job",
  riva: "You need to improve your form, but good perseverance",
  jeremy: "You're incredible",
};

const port = 3000;
app.get("/", function (request, response) {
  console.log("Someone has come into the server. Brace yourselves.");
  response.send("Ending the cycle, thanks for visiting");
});


app.get("/landing/:username", function (request, response) {
  response.send(`Hi there, ${request.params.username}`);
});
app.get("/users/:userID", function (request, response) {
  response.send(users[request.params.userID]);
});
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});

 
app.get("/routeWithOptionalParameters", (request, response) => {
  let params = request.query;
  response.send(params);
});

app.get("/details", (request, response) => {
  let params = request.query;
  response.send(params);
});
