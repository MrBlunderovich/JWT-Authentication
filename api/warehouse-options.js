const warehouseOptions = {
  category: [
    { value: "", label: "Все товары" },
    { value: "alcohol", label: "Алкогольные" },
    { value: "notAlcohol", label: "Безалкогольные" },
  ],
  condition: [
    { value: "Normal", label: "Норма" },
    { value: "Invalid", label: "Брак" },
  ],
};

module.exports = { warehouseOptions };
