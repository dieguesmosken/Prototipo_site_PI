const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/sobre", (req, res) => {
    res.render("sobre");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
