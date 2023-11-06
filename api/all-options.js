const allOptions = {
  category: [
    { value: "", label: "Все товары" },
    { value: "alcohol", label: "Алкогольные" },
    { value: "notAlcohol", label: "Безалкогольные" },
  ],
  region: [
    { value: "Баткен", label: "Баткен" },
    { value: "Джалал-Абад", label: "Джалал-Абад" },
    { value: "Иссык-Куль", label: "Иссык-Куль" },
    { value: "Нарын", label: "Нарын" },
    { value: "Ош", label: "Ош" },
    { value: "Талас", label: "Талас" },
    { value: "Чуй", label: "Чуй" },
  ],
  unit: [
    { value: "item", label: "Штука" },
    { value: "kilogram", label: "Килограмм" },
    { value: "liter", label: "Литр" },
    { value: "m", label: "Метр" },
  ],
};

module.exports = { allOptions };
