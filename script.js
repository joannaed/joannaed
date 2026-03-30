function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateButtonLabel(isDark);
}

function updateButtonLabel(isDark) {
  const btn = document.querySelector(".toggle");
  if (btn) {
    btn.textContent = isDark ? "Tryb jasny" : "Tryb kontrastowy";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    updateButtonLabel(true);
  }
});
