const express = require("express");
const app = express();
app.use(express.json());

const timeRouter = require("./modules/time/routes");
const authRouter = require("./modules/authentication/routes");

app
  .use("/", (req, res) =>
    res.send("Welcome to Protected Api in a Docker Container")
  )
  .use("/auth", authRouter)
  .use("/time", timeRouter);

// Handle errors.
app.use(function (err, req, res, next) {
  console.log("app error", err);
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
