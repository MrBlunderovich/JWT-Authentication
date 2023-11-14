const express = require("express");
const app = express();
const { default: axios } = require("axios");
const { v4 } = require("uuid");
const cors = require("cors");
/////////////////////////////////////////
const { productos, orders, returns } = require("./products_data.js");
const { warehouseOptions } = require("./warehouse-options.js");
const { allOptions } = require("./all-options.js");
const { distributores } = require("./distributors_data.js");
const { lorem } = require("./lorem.js");
////////////////////////////////////////////

app.use(express.json());
app.use(cors({ credentials: true }));

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

////////////////////////////////////////////////////////////////////////////

function getSearchOptions(query) {
  const regex = new RegExp(`\\s\\w*${query}\\w*\\s`, "ig");
  const results = lorem.match(regex) || [];
  const uniqueResults = [...new Set(results)];
  return uniqueResults;
}

app.get("/api/warehouse", (req, res) => {
  const { category: categoryParam, condition: conditionParam } = req.query;
  //
  const results = productos.filter((item) => {
    return (
      (!categoryParam || item.category === categoryParam) &&
      (!conditionParam || item.state === conditionParam)
    );
  });
  //
  //res.json(result);

  res.json({ results, queryParams: req.query });
});

app.get("/api/products", (req, res) => {
  res.json(productos);
});

app.get("/api/distributor", (req, res) => {
  res.json(distributores);
});

app.get("/api/distributors", (req, res) => {
  res.json(distributores);
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

  if (inputData.search === "") {
    return res.json([]);
  }

  if (!inputData || !inputData.search) {
    return res.status(400).json({ error: "Invalid or missing data" });
  }

  // Perform manipulation, for example, multiply by 2
  const options = getSearchOptions(inputData.search);

  // Send the result in the response
  res.json(options);
});

app.get("/api/distributor/orders/:id", (req, res) => {
  //console.log(req.params.id);
  const {
    category: categoryParam,
    start_date: startDateParam,
    end_date: endDateParam,
  } = req.query;
  //
  const result = orders.filter((item) => {
    return (
      (!categoryParam || item.category === categoryParam) &&
      (!startDateParam ||
        new Date(item.order_date) > new Date(startDateParam)) &&
      (!endDateParam || new Date(item.order_date) < new Date(endDateParam))
    );
  });
  //
  res.json(result);

  //////////////////////////////////////////////
  /* const catResult = categoryParam
    ? orders.filter((item) => item.category === categoryParam)
    : orders;
  console.log(catResult.length);
  const startResult = startDateParam
    ? catResult.filter(
        (item) => new Date(item.order_date) > new Date(startDateParam)
      )
    : catResult;
  console.log(startResult.length);
  const endResult = endDateParam
    ? startResult.filter(
        (item) => new Date(item.order_date) < new Date(endDateParam)
      )
    : startResult;
  console.log(endResult.length); */

  //res.json(endResult);
});

app.get("/api/distributor/returns/:id", (req, res) => {
  //console.log(req.params.id);
  const {
    category: categoryParam,
    start_date: startDateParam,
    end_date: endDateParam,
  } = req.query;
  //
  const result = returns.filter((item) => {
    return (
      (!categoryParam || item.category === categoryParam) &&
      (!startDateParam ||
        new Date(item.return_date) > new Date(startDateParam)) &&
      (!endDateParam || new Date(item.return_date) < new Date(endDateParam))
    );
  });
  //
  res.json(result);
});
//nodemon ./api/index.js
////////////////////////////////////////////////////////////////////////////

app.listen(2000);

module.exports = app;
