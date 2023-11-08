const jwt = require("jsonwebtoken");
//
const express = require("express");
const app = express();
//const app = require("express")();
const { default: axios } = require("axios");
const { v4 } = require("uuid");
app.use(express.json());
//
const cors = require("cors");
app.use(cors({ credentials: true }));

app.get("/api", (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item1: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.get("/api/pb", (req, res) => {
  async function fetchRecords() {
    const response = await axios.get(
      "https://grumpy-elephant.pockethost.io/api/collections/tasks/records"
    );
    return response.data;
  }
  fetchRecords().then((data) => res.json(data));
  //res.end(`Item: ${slug}`);
});
///////////////////////////////////////////////////////////////////////////

app.post("/api/test-auth", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.get("/api/test-auth", (req, res) => {
  console.log(req.query);
  res.json(req.query);
  //res.end("query: ", JSON.stringify(req.query));
});

//////////////////////////////////////////////////////////////////////////

//const jwt = require("jsonwebtoken");

let refreshTokens = [];

app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
});

app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

app.post("/login", (req, res) => {
  // Authenticate User

  const username = req.body.username;
  const user = { name: username };

  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "180s" });
}

//app.listen(4000);

////////////////////////////////////////////////////////////////////////////

const { products } = require("./products.js");
const { warehouseOptions } = require("./warehouse-options.js");
const { allOptions } = require("./all-options.js");
const { distributors } = require("./distributors.js");
const { lorem } = require("./lorem.js");

function tenKdistributors() {
  const result = [];
  for (let j = 0; j < 10000; j++) {
    result.push({
      _id: v4(),
      name: "Болотбеков Алишер Калымович",
      region: "Г. Ош ул. Камчыбекова Дом 68 этаж 4",
    });
  }
  return result;
}

function getSearchOptions(query) {
  const regex = new RegExp(`\\s\\w*${query}\\w*\\s`, "ig");
  const result = lorem.match(regex);
  return result || [];
}

app.get("/api/warehouse", (req, res) => {
  res.json(products);
});

app.get("/api/distributor", (req, res) => {
  res.json(distributors);
});

app.get("/api/distributors", (req, res) => {
  res.json(distributors);
});

app.get("/api/tenKdistributors", (req, res) => {
  res.json(tenKdistributors());
});

app.get("/api/warehouse/options", (req, res) => {
  res.json(warehouseOptions);
});

app.get("/api/options", (req, res) => {
  res.json(allOptions);
});

app.post("/api/search-options", (req, res) => {
  const inputData = req.body; // JSON data from the request body
  console.log(inputData);

  if (!inputData || !inputData.search) {
    return res.status(400).json({ error: "Invalid or missing data" });
  }

  // Perform manipulation, for example, multiply by 2
  const options = getSearchOptions(inputData.search);

  // Send the result in the response
  res.json(options);
});

//nodemon ./api/index.js
////////////////////////////////////////////////////////////////////////////

app.listen(2000);

module.exports = app;
