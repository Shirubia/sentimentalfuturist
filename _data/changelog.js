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
    {
      date: DateTime.fromISO("2025-08-07"),
      text: '<p>Updated the code of the <a href="https://safonts.club">Safonts</a> webring, and added more <a href="/links">links</a>.</p>',
    },
    {
      date: DateTime.fromISO("2025-12-14"),
      text: '<p>It\'s not much, but it\'s honest work: updated the <a href="/wish">wishlist</a> and the <a href="/memes">meme gallery</a>.</p>',
    },
    {
      date: DateTime.fromISO("2026-02-17"),
      text: '<p>First update of 2026! Updated a few things here and there, including these pages:</p><ul><li><a href="/now">now</a> page</li><li><a href="/wish">wishlist</a></li><li><a href="/links">links</a> page</li></ul>',
    },
    {
      date: DateTime.fromISO("2026-03-01"),
      text: '<p>Did some refactoring, and added a <a href="/linklog">linklog</a> to collect interesting links there.</p>',
    },
    {
      date: DateTime.fromISO("2026-03-22"),
      text: '<p>Added a silly thing to the <a href="/memes">meme gallery</a>, and updated some styles around the joined/webrings section and the <a href="/linklog">linklog</a>.</p>',
    },
    {
      date: DateTime.fromISO("2026-05-01"),
      text: '<p>Boring, but necessary update: Added a long-due <a href="/privacy">privacy policy</a> page.</p>',
    },
    {
      date: DateTime.fromISO("2026-09-19"),
      text: '<p>Hey! I haven\'t forgotten about this place, I swear; it\'s just that the Real World™ keeps me busy (but... in a good way, I guess? Can\'t complain).</p><p>Today, in total goblin mode (I love September, SUMMER IS FINALLY ENDING), I\'ve set aside some time to tend to this <s>salad</s> garden:</p><ul><li>Updated the <a href="/now">now</a> page to confirm I\'m still alive.</li><li>Added a bunch of stuff to the good old <a href="/memes">memes</a> page.</li><li>Dusted the <a href="/wish">wishlist</a>; seems that my interest in videogames is making a comeback.</li><li>Updated the <a href="/links">links</a> page with a couple of new links.</li><li>I\'ve been managing to keep the <a href="/linklog">linklog</a> alive. Kind of. And, of course, the <a href="https://thoughts.sentimentalfuturist.net/">thoughts</a> page (but that one is easy to update).</li></ul><p>That\'s it for now. I\'ve actually been working on a new section for the website but, as always, I\'m terribly slow, so... I will finish someday ☺</p>',
    },
  ].sort((a, b) => b.date - a.date);
};
