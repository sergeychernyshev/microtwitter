const express = require("express");

const app = express();

const messages = [
  {
    id: 1,
    text: "Hello World",
  },
  {
    id: 2,
    text: "Another message",
  },
];

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} ${req.ip}`);
  next();
};

app.use(logger);

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.use(express.static("dist"));

app.listen(80, () => {
  console.log("Production server is running on port 80");
});
