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

function getFaviconCandidates(host) {
  return [
    `https://favicone.com/${host}?s=32`,
    `https://favicone.com/${host}?s=16`,
    `https://icons.duckduckgo.com/ip3/${host}.ico`,
    `https://www.google.com/s2/favicons?domain=${host}`,
  ];
}

function tryFaviconFallback(img) {
  const host = img.dataset.faviconHost;
  if (!host) return;

  const candidates = getFaviconCandidates(host);
  let index = 0;

  function cleanup() {
    img.removeEventListener("load", handleLoad);
    img.removeEventListener("error", handleError);
  }

  function setNextSrc() {
    if (index >= candidates.length) {
      cleanup();
      return;
    }
    img.src = candidates[index++];
  }

  function handleLoad() {
    if (img.naturalWidth === 0 || img.naturalHeight === 0) {
      setNextSrc();
    } else {
      cleanup();
    }
  }

  function handleError() {
    setNextSrc();
  }

  img.addEventListener("load", handleLoad);
  img.addEventListener("error", handleError);

  // If the image has already finished loading (cache or early load), evaluate it immediately.
  if (img.complete) {
    handleLoad();
  } else {
    setNextSrc();
  }
}

function initFaviconFallbacks() {
  document.querySelectorAll("img.favicon-fallback").forEach((img) => {
    tryFaviconFallback(img);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initTheme();

  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleTheme);
  }

  initFaviconFallbacks();
});
