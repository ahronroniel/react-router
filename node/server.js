const http = require("http");


const hostName = "127.0.0.1";

const port = 3000;
let text;
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/ ":
      text = "index.html";
      break;
    case "/about":
      tex = "about.html";
      break;
      default:
      tex = " 404 not found "
  }

  res.setHeader("content-Type", "text/html");
  res.write("<h1>hello user 8</h1>");
  res.end();
});

server.listen(port, hostName, () => {
  console.log(`server running at http://${hostName}:${port}`);
});
