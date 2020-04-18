const express = require("express");

const path = require("path");

const app = express();

const ViewsPath = path.join(__dirname, './templates')
app.set('views', ViewsPath)

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", { title: 'Template', message: 'Hello' });
});

app.listen(8000, () => {
  console.log("server is up and running at 8000 port");
});
