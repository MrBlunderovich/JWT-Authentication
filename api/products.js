const { v4 } = require("uuid");
const { faker } = require("@faker-js/faker");
const moment = require("moment");

function randomNumber(max = 100) {
  return Math.floor(Math.random() * max + 1);
}

function randomBoolean() {
  return Math.random() >= 0.5;
}

function createProduct() {
  return {
    id: v4(),
    name: "Пиво 1.5 литра",
    identification_number: 30000000 + randomNumber(999999),
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
    category: randomBoolean() ? "alcohol" : "notAlcohol",
    order_date: faker.date.past().toLocaleDateString("rus"),
    return_date: faker.date.past().toLocaleDateString("rus"),
    state: randomBoolean() ? "Норма" : "Брак",
  };
}

function createBeer() {
  return {
    id: v4(),
    name: "Пиво 1.5 литра",
    identification_number: 30000000 + randomNumber(999999),
    unit: "шт",
    quantity: randomNumber(),
    price: 200,
    category: "alcohol",
    order_date: faker.date.past().toLocaleDateString("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    return_date: faker.date.past().toLocaleDateString("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    state: randomBoolean() ? "Норма" : "Брак",
  };
}

function createKvass() {
  return {
    id: v4(),
    name: "Квас 1 литр",
    identification_number: 30000000 + randomNumber(999999),
    unit: "шт",
    quantity: randomNumber(),
    price: 100,
    category: "notAlcohol",
    order_date: moment(faker.date.past()).format("YYYY-MM-DD"),
    return_date: moment(faker.date.past()).format("YYYY-MM-DD"),
    state: randomBoolean() ? "Норма" : "Брак",
  };
}

function generateProducts(beerQuantity = 20, kvassQuantity = 10) {
  const result = [];
  for (let i = 1; i <= beerQuantity; i++) {
    result.push(createBeer());
  }
  for (let i = 1; i <= kvassQuantity; i++) {
    result.push(createKvass());
  }
  return result;
}

const orders = generateProducts();
const returns = generateProducts();
const products = generateProducts();

module.exports = { products, orders, returns };

/* const products_ = [
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000001,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000002,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000003,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000004,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000005,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000006,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000007,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000001,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000002,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000003,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000004,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000005,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000006,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000007,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
  {
    id: v4(),
    name: "Кега 30 литров",
    num_id: 30000008,
    unit: "шт",
    quantity: randomNumber(),
    price: 3000,
  },
]; */
