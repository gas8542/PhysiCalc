// 🎨 Словарь формул: ключевое слово → цвет и название
const formulaBoxes = {
  "скорость": { color: "#e74c3c", label: "Скорость" },
  "ускорение": { color: "#3498db", label: "Ускорение" },
  "сила": { color: "#2ecc71", label: "Сила" },
  "энергия": { color: "#f1c40f", label: "Энергия" },
  "мощность": { color: "#9b59b6", label: "Мощность" },
  "давление": { color: "#1abc9c", label: "Давление" },
  "импульс": { color: "#e67e22", label: "Импульс" }
};

const searchBox = document.getElementById("searchBox");
const results = document.getElementById("results");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase().trim();
  results.innerHTML = ""; // Очистить предыдущие результаты

  for (const [key, { color, label }] of Object.entries(formulaBoxes)) {
    if (key.includes(query) && query !== "") {
      const box = document.createElement("div");
      box.className = "formula-box";
      box.style.backgroundColor = color;
      box.textContent = label;
      results.appendChild(box);
    }
  }
});