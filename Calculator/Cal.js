const display = document.getElementById("display");
const themeBtn = document.getElementById("theme-btn");
let darkMode = false;

// Insert value into display
function insert(value) {
  display.value += value;
}

// Clear all
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Evaluate expression
function calculate() {
  try {
    let result = eval(display.value);
    display.value = Number.isFinite(result) ? result : "Error";
  } catch {
    display.value = "Error";
  }
}

// Toggle dark/light mode
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkMode = !darkMode;
  themeBtn.textContent = darkMode ? "☀️" : "🌙";
});

// Keyboard input support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (/[0-9+\-*/().]/.test(key)) {
    insert(key);
  } else if (key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
