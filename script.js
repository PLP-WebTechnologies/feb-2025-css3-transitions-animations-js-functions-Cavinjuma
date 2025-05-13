// Load user preference on startup
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme);
  document.getElementById("themeSelect").value = savedTheme;
});

// Store theme preference and apply
document.getElementById("themeSelect").addEventListener("change", (e) => {
  const theme = e.target.value;
  document.body.className = ""; // Remove existing classes
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
});

// Animate title when button is clicked
document.getElementById("animateBtn").addEventListener("click", () => {
  const title = document.getElementById("title");

  // Trigger CSS animation
  title.classList.remove("animate-title"); // reset animation
  void title.offsetWidth; // reflow trick
  title.classList.add("animate-title");
});
