const warehouseOptions = {
  category: [
    { value: "all", label: "Все товары" },
    { value: "alcohol", label: "Алкогольные" },
    { value: "nonalcohol", label: "Безалкогольные" },
    { value: "raw", label: "Сырье" },
  ],
  condition: [
    { value: "norm", label: "Норма" },
    { value: "defect", label: "Брак" },
  ],
};

module.exports = { warehouseOptions };
