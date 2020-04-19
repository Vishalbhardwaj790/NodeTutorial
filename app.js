const express = require("express");

const path = require("path");

const app = express();

const port  = process.env.PORT || 8000
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index.hbs", { title: 'Template', message: 'Hello from Heroku' });
});


// app.get("/",(req,res)=>{
//   res.send("Hello")
// })

app.listen(port, () => {
  console.log("server is up and running on port"+ port);
});
