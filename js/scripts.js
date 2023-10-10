// moonphases
const moonPhases = new Map([
  [0, "&#127761;"],
  [1, "&#127762;"],
  [2, "&#127763;"],
  [3, "&#127764;"],
  [4, "&#127765;"],
  [5, "&#127766;"],
  [6, "&#127767;"],
  [7, "&#127768;"],
]);

const getMoonPhase = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  if (month < 3) {
    year--;
    month += 12;
  }

  month++;

  let jd = 365.25 * year + 30.6 * month + day - 694039.09;
  jd /= 29.5306;
  let phase = Math.ceil(jd * 8) & 7;
  return moonPhases.get(phase);
};

Array.from(document.getElementsByClassName("moonphase")).forEach((e) => {
  e.innerHTML = getMoonPhase(new Date());
});

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
  ];

  var randomIndex = Math.floor(Math.random() * taglines.length);
  var randomTagline = taglines[randomIndex];

  var taglineElement = document.getElementById("tagline");
  taglineElement.innerHTML = randomTagline;
}

// masonry thing
function resizeGridItem(item) {
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );
  rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );
  rowSpan = Math.ceil(
    (item.querySelector(".content").getBoundingClientRect().height +
      rowGap +
      10) /
      (rowHeight + rowGap)
  );
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  allItems = document.getElementsByClassName("item");
  for (x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

window.addEventListener("resize", resizeAllGridItems);
allItems = document.getElementsByClassName("item");
for (x = 0; x < allItems.length; x++) {
  imagesLoaded(allItems[x], resizeInstance);
}

function resizeInstance(instance) {
  item = instance.elements[0];
  resizeGridItem(item);
}
window.addEventListener("load", function () {
  resizeAllGridItems(), displayRandomTagline();
});

// display the last updated date
function getLastModified() {
  var lastModifiedDate = new Date(document.lastModified);
  var day = lastModifiedDate.getDate();
  var month = lastModifiedDate.getMonth() + 1; // month index is 0-based
  var year = lastModifiedDate.getFullYear();

  // day and month should have two digits
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  return day + "/" + month + "/" + year;
}

function updateLastModifiedDate() {
  var updateDateElement = document.getElementById("update-date");
  if (updateDateElement) {
    updateDateElement.textContent = getLastModified();
  }
}

updateLastModifiedDate();

// displaycurrent year
const yearElement = document.getElementById("year");
yearElement.textContent = " in " + new Date().getFullYear();
