const { v4 } = require("uuid");

/* function formatDate(date) {
  return date.toLocaleDateString("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
} */
function sayHello() {
  return "Hello!";
}

function createDate() {
  return `2023-${randomNumber(12)}-${randomNumber(31)}`;
}

function randomNumber(max = 100) {
  return Math.floor(Math.random() * max + 1);
}

function randomBoolean() {
  return Math.random() >= 0.5;
}
/* 
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
} */

function createBeer(suffix = "") {
  return {
    id: v4(),
    name: "Пиво 1.5 литра" + suffix,
    identification_number: 30000000 + randomNumber(999999),
    unit: "шт",
    quantity: randomNumber(),
    price: 200,
    category: "alcohol",
    order_date: createDate(),
    return_date: createDate(),
    state: "Норма",
    //state: randomBoolean() ? "Норма" : "Брак",
  };
}

function createKvass(suffix = "") {
  return {
    id: v4(),
    name: "Квас 1 литр" + suffix,
    identification_number: 30000000 + randomNumber(999999),
    unit: "шт",
    quantity: randomNumber(),
    price: 100,
    category: "notAlcohol",
    order_date: createDate(),
    return_date: createDate(),
    state: "Норма",
    //state: randomBoolean() ? "Норма" : "Брак",
  };
}

function generateProducts(suffix = "", beerQuantity = 30, kvassQuantity = 20) {
  const result = [];
  for (let i = 1; i <= beerQuantity; i++) {
    result.push(createBeer(suffix));
  }
  for (let i = 1; i <= kvassQuantity; i++) {
    result.push(createKvass(suffix));
  }
  return result;
}

function randomizeCondition(data) {
  return data.map((item) => ({
    ...item,
    state: randomBoolean() ? "Норма" : "Брак",
  }));
}

const orders = generateProducts(" (заказ)");
const returns = generateProducts(" (возврат)");
const productos = randomizeCondition(generateProducts());

module.exports = { productos, orders, returns };

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
