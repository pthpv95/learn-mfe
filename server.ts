const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const root = path.join(__dirname, "packages/container/dist");

// Serve static files from the dist folder
app.use(express.static(root));

// Serve index.html for the root path
app.get("/", (req, res) => {
  express.static(path.join(root, "index.html"));
});

app.get("/marketing/:filename", (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, "packages/marketing/dist", filename));
});

// other paths go here

// Start the server
const server = app.listen(port, () => {
  console.log(
    `HTTP webserver running. Access it at: http://localhost:${port}/`
  );
});
