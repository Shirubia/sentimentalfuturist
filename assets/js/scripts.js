// display current year
const yearElement = document.getElementById("year");
yearElement.textContent = " in " + new Date().getFullYear();

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

  var randomIndex = Math.floor(Math.random() * taglines.length);
  var randomTagline = taglines[randomIndex];

  var taglineElement = document.getElementById("tagline");
  if (taglineElement) {
    taglineElement.innerHTML = randomTagline;
  }
}

window.addEventListener("load", function () {
  displayRandomTagline();
});
