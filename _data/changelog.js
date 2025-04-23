const { DateTime } = require("luxon");

module.exports = () => {
  return [
    {
      date: DateTime.fromISO("2025-04-23"),
      text: "<ul><li>Finally added a real changelog (this one!)</li><li>General redesign and restructuring of the site and migration to Eleventy</li></ul>",
    },
    {
      date: DateTime.fromISO("2025-04-24"),
      text: '<p>Added a new link in the <a href="/links">links</a> page, and also a new button to link to this site.</p>',
    },
  ].sort((a, b) => b.date - a.date);
};
