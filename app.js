const express = require("express");

const bodyparse = require("body-parser");

const path = require("path");
const fs = require("fs");
const app = express();

app.use(bodyparse.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use('/images',express.static(path.join(__dirname,'public','image')))
app.get("/products", (req, res, next) => {
  fs.createReadStream(path.join(__dirname, "views", "addproduct.html")).pipe(
    res
  );
});

app.post("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect('/')
});

app.get("/", (req, res, next) => {
  fs.createReadStream(path.join(__dirname, "views", "homepage.html")).pipe(res);
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'views','404.html'))
});
app.listen(3000, function() {
  console.log("server running 3000");
});
