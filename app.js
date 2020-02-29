const express = require("express");
const adminrouter = require('./routes/admin')
const bodyparse = require("body-parser");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(bodyparse.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use('/images',express.static(path.join(__dirname,'public','image')))



app.use(adminrouter)
app.use((req, res, next) => {
  res.status(404).render('404')
})
app.listen(3000, function() {
  console.log("server running 3000");
});
