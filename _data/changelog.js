const { DateTime } = require("luxon");

module.exports = () => {
  return [
    {
      date: DateTime.fromISO("2025-04-23"),
      text: "<ul><li>Finally added a real changelog (this one!)</li><li>General redesign and restructuring of the site and migration to Eleventy</li></ul>",
    },
    {
      date: DateTime.fromISO("2025-04-24"),
      text: '<ul><li>There are new links in the <a href="/links">links</a> page, and also a new button to link to this site</li><li>Added cache busting</li></ul>',
    },
    {
      date: DateTime.fromISO("2025-04-25"),
      text: "<ul><li>Added dark mode!</li></ul>",
    },
    {
      date: DateTime.fromISO("2025-04-26"),
      text: '<p>I\'m taking advantage of the fact that I have a few days off to work on the website as much as I can. As you can see 🤭</p><ul><li>Added <a href="/guestbook">a guestbook</a>!</li><li>Updated the <a href="/links">links</a> page with a new link</li></ul>',
    },
    {
      date: DateTime.fromISO("2025-05-03"),
      text: '<p>Added new links to the <a href="/links">links</a> page.</p>',
    },
    {
      date: DateTime.fromISO("2025-05-18"),
      text: '<p>Another small update to add new <a href="/links">links</a>.</p>',
    },
    {
      date: DateTime.fromISO("2025-05-24"),
      text: '<p>Finally migrated the <a href="/memes">meme gallery</a> to Eleventy and refactored the template to use global data, making it easier to manage. Also added a couple of new memes.</p>',
    },
        {
      date: DateTime.fromISO("2025-06-01"),
      text: '<p>Added quite a few <a href="/links">links</a>, the list is growing!</p>',
    },
  ].sort((a, b) => b.date - a.date);
};
