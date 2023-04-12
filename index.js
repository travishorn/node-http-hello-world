import { createServer } from "node:http";

const port = process.env.PORT || 3000;

createServer((req, res) => { res.end("Hello, World!"); }).listen(port);

console.log(
  `Node HTTP Hello World server listening at http://localhost:${port}`
);
