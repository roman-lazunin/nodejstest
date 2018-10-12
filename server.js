const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("view engine", "hbs");

app.use(express.static(__dirname + "/views"));

app.get("/", (req, res)=> {
    res.render("index.hbs");
});

app.get("/page1", (req, res)=> {
    res.render("page1.hbs");
}); 

 app.get("/page2", (req, res)=> {
    res.render("page2.hbs");
}); 
 

app.listen(3000);
