const express = require("express");

const path = require("path");

const app = express();

const port  = process.env.port || 8000

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", { title: 'Template', message: 'Hello from Heroku' });
});

app.listen(port, () => {
  console.log("server is up and running on port"+ port);
});
