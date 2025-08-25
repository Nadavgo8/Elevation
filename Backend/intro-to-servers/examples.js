const http = require("http");

const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello, I'm Nadav");
  response.end();
});

const port = 3000;
server.listen(port, function () {
  console.log(`Node server created at port ${port}`);
});


const http = require("http");

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const server = http.createServer(async (req, res) => {
  const path = req.url.split("?")[0]; // ignore query string
  let status = 200;
  let body = null;

  try {
    if (req.method === "GET" && path === "/api/users") {
      body = users;
    } else if (req.method === "GET" && /^\/api\/users\/\d+$/.test(path)) {
      const id = Number(path.split("/").pop());
      const user = users.find((u) => u.id === id);
      if (user) {
        body = user;
      } else {
        status = 404;
        body = { error: `User ${id} not found` };
      }
    } else if (req.method === "POST" && path === "/api/users") {
      let newUser;
      try {
        newUser = await readBody(req); // keep your function
      } catch {
        status = 400;
        body = { error: "Invalid JSON" };
      }

      if (status === 200) {
        const { name, email } = newUser || {};
        if (!name || !email) {
          status = 400;
          body = { error: "Missing 'name' or 'email'" };
        } else {
          const id = (users[users.length - 1]?.id || 0) + 1;
          const created = { id, name, email };
          users.push(created);
          status = 201;
          body = created;
        }
      }
    } else {
      status = 404;
      body = { error: "Not Found" };
    }
  } catch (e) {
    console.error(e);
    status = 500;
    body = { error: "Internal Server Error" };
  }

  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
});

server.listen(3000, () => {
  console.log("server is listening...");
});

// leave this exactly as you had it
function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        resolve(JSON.parse(body));
      })
      .on("error", reject);
  });
}
