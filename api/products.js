const { v4 } = require("uuid");
const { faker } = require("@faker-js/faker");

function randomNumber(max = 100) {
  return Math.floor(Math.random() * max + 1);
}

function randomBoolean() {
  return Math.random() >= 0.5;
}

function generateProducts(number) {
  const result = [];
  for (let i = 1; i <= number; i++) {
    const newItem = {
      id: v4(),
      name: "Пиво 1.5 литра",
      identification_number: 30000000 + randomNumber(999999),
      unit: "шт",
      quantity: randomNumber(),
      price: 3000,
      order_date: faker.date.past().toLocaleDateString("rus"),
      return_date: faker.date.past().toLocaleDateString("rus"),
      state: randomBoolean() ? "Норма" : "Брак",
    };
    result.push(newItem);
  }
  return result;
}

const orders = generateProducts(30);
const returns = generateProducts(30);

const products = [
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
];

module.exports = { products, orders, returns };
