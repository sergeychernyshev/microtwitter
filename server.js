const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let autoincrement = 0;

const messages = [
  // {
  //   id: autoincrement++,
  //   text: "Hello World",
  // },
  // {
  //   id: autoincrement++,
  //   text: "Welcome to microtwitter",
  // },
];

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} ${req.ip}`);
  next();
};

app.use(logger);
app.use(bodyParser.json());

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages/new", async (req, res) => {
  messages.push({ id: autoincrement++, text: req.body.message });
  res.json(messages);
});

app.use(express.static("dist"));

if (process.env.NODE_ENV === "development") {
  app.listen(8081, () => {
    console.log("Development server is running on port 8081");
  });
} else {
  app.listen(process.env.PORT || 5000, () => {
    console.log(
      `Production server is running on port ${process.env.PORT || 5000}`
    );
  });
}
