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
const suggestions = document.getElementById("suggestions");
const results = document.getElementById("results");

// 📦 Создаём все квадратики один раз
for (const [key, { color, label }] of Object.entries(formulaBoxes)) {
  const box = document.createElement("div");
  box.className = "formula-box";
  box.id = key;
  box.style.backgroundColor = color;
  box.textContent = label;
  results.appendChild(box);
}

// 🔮 Автоподсказки
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase().trim();
  suggestions.innerHTML = "";

  if (query === "") return;

  const matches = Object.keys(formulaBoxes).filter(key => key.includes(query));

  matches.forEach(match => {
    const item = document.createElement("div");
    item.className = "suggestion-item";
    item.textContent = match;
    item.addEventListener("click", () => {
      searchBox.value = match;
      suggestions.innerHTML = "";
      highlightFormula(match);
    });
    suggestions.appendChild(item);
  });

  highlightFormula(query);
});

// ✨ Подсветка и перемещение
function highlightFormula(query) {
  for (const key of Object.keys(formulaBoxes)) {
    const box = document.getElementById(key);
    box.classList.remove("highlight");
    box.style.order = "0";
  }

  if (formulaBoxes[query]) {
    const box = document.getElementById(query);
    box.classList.add("highlight");
    box.style.order = "-1";
  }
}