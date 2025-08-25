const http = require("http");

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const server = http.createServer(async (req, res) => {
  const path = req.url.split("?")[0]; 
  if (path === "/api/users") {
    if (req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(users));
      res.end();
      return;
    } else if (req.method === "POST") {
      const body = await readBody(req); 
      const { name, email } = body || {};
      if (!name || !email) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({ error: "Missing 'name' or 'email'" }));
        res.end();
        return;
      }
      const id = (users[users.length - 1]?.id || 0) + 1;
      const created = { id, name, email };
      users.push(created);

      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(created));
      res.end();
      return;
    } else {
      res.statusCode = 405;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Allow", "GET, POST");
      res.write(JSON.stringify({ error: "Method Not Allowed" }));
      res.end();
      return;
    }
  }

  if (/^\/api\/users\/\d+$/.test(path)) {
    const id = Number(path.split("/").pop());
    if (req.method === "GET") {
      const user = users.find((u) => u.id === id);
      res.setHeader("Content-Type", "application/json");
      if (user) {
        res.statusCode = 200;
        res.write(JSON.stringify(user));
      } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ error: `User ${id} not found` }));
      }
      res.end();
      return;
    } else {
      res.statusCode = 405;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Allow", "GET");
      res.write(JSON.stringify({ error: "Method Not Allowed" }));
      res.end();
      return;
    }
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify({ error: "Not Found" }));
  res.end();
});

server.listen(3000, () => {
  console.log("server is listening on http://localhost:3000");
});

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
