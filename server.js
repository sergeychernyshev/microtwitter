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

// app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.listen(80, () => {
    console.log("Production server is running on port 80");
  });
} else {
  app.listen(8081, () => {
    console.log("Development server is running on port 8081");
  });
}
