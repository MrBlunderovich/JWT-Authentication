const allOptions = {
  category: [
    { value: "", label: "Все товары" },
    { value: "alcohol", label: "Алкогольные" },
    { value: "notAlcohol", label: "Безалкогольные" },
  ],
  condition: [
    { value: "Normal", label: "Норма" },
    { value: "Invalid", label: "Брак" },
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
};

module.exports = { allOptions };
