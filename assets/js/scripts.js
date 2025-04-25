// tagline
function displayRandomTagline() {
  var taglines = [
    "i have no idea of what i'm doing",
    "prefiero ser antisocial y taciturna",
    "new website, who dis",
    "0% skill, 100% luck",
    "now with more millennial ennui",
    "i'm just a cosmic potato 🌌",
    "i'm not the best at anything, but i can improve at everything!",
    "✨ don't be insecure if your heart is pure ✨",
    "i support women's rights, but also women's wrongs",
    "come for the content, stay for the self-deprecating humor",
    "beam me up, 'cause i can't breathe 🛸🎶",
    "\"getting old isn't a curse, it's an achievement\" &mdash;a philosopher",
  ];

  const taglineElement = document.getElementById("tagline");
  if (taglineElement) {
    const randomIndex = Math.floor(Math.random() * taglines.length);
    taglineElement.innerHTML = taglines[randomIndex];
    taglineElement.classList.remove("hidden");
  }
}

window.addEventListener("load", displayRandomTagline);

// theme toggle
function setTheme(theme) {
  const toggleButton = document.getElementById("theme-toggle");
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  toggleButton.textContent = theme === "dark" ? "🌝" :"🌚" ;
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // no saved preference = follow system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initTheme();

  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleTheme);
  }
});
