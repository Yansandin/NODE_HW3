const express = require("express");
const fs = require("fs");

let counter = {};



const app = express();

app.get("/", (req, res) => {
  counter['/'] = (counter['/'] || 0) + 1;
  const fileData = JSON.stringify(counter, null, 2);
  fs.writeFileSync("counter.json", fileData);

  res.send(`<h1>Корневая страница</h1>
    <p>Просмотров: ${counter['/']}</p>
    <a href="/about">Ссылка на страницу /about</a>`);
});

app.get("/about", (req, res) => {
  counter['/about'] = (counter['/about'] || 0) + 1;
  const fileData = JSON.stringify(counter, null, 2);
  fs.writeFileSync("counter.json", fileData);

  res.send(`<h1>Страница about</h1>
    <p>Просмотров: ${counter['/about']}</p>
    <a href="/">Ссылка на страницу /</a>`);
});

const data = JSON.parse(fs.readFileSync("counter.json", "utf-8"));

app.listen(3000);
