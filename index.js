const express = require("express");
const app = express();
const PORT = process.env.PORT || 6400;
app.use(express.static("public"));
app.set("view engine","ejs");
app.listen(PORT, function () {
    console.log("Server is running on PORT localhost:"+PORT+" ...");
});
const fs = require("fs");

app.get('/',function (req,res) {
    let title = "TDT | Home";
    res.render("home",
        {
            title: title
        });
});

app.get('/shop',function (req,res) {
    let title = "TDT | Shop";
    res.render("pages/shop",
        {
            title: title
        });
});

app.get('/blog',function (req,res) {
    let title = "TDT | Blog";
    res.render("pages/blog",
        {
            title: title
        });
});

app.get('/categories',function (req,res) {
    let title = "TDT | Categories";
    res.render("pages/categories",
        {
            title: title
        });
});

app.get('/categories/calendar',function (req,res) {
    let title = "TDT | Categories | Calendar";
    res.render("pages/calendar",
        {
            title: title
        });
});

app.get('/categories/diary',function (req,res) {
    let title = "TDT | Categories | Diary";
    res.render("pages/diary",
        {
            title: title
        });
});