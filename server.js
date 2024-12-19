// Підключаємо Express
const express = require("express");
const app = express();
const PORT = 3000;

// Дозволяємо обробку JSON-даних
app.use(express.json());

// "База даних" товарів
const availableItems = ["apple", "banana", "milk", "bread", "cheese"];

// Маршрут для перевірки наявності товарів
app.post("/check-items", (req, res) => {
  const { desiredItems } = req.body;

  if (!desiredItems || !Array.isArray(desiredItems)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const available = desiredItems.filter(item => availableItems.includes(item));
  res.json({ availableItems: available });
});

// Запускаємо сервер
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
