/* ============================================================
   BD Pig Roast — all site wording in one place
   Edit this file to change any text on the site.
   Keys map to data-copy="key" attributes in index.html
   Use data-copy-html="key" when the string includes HTML.
   ============================================================ */

window.SITE_COPY = {
  /* ---- Meta / SEO ---- */
  meta: {
    title: "Taranowski's Epic Pig Roast | Black Diamond, WA",
    description:
      "Taranowski's Epic Pig Roast — Saturday, September 5, 2026. Noon until after dark at the Black Diamond homestead. Whole hog late afternoon, campfire & camping welcome.",
    ogTitle: "Taranowski's Epic Pig Roast",
    ogDescription:
      "Saturday, September 5, 2026 · Noon until after dark. Whole hog late afternoon. Campfire and camping welcome. Black Diamond, WA.",
  },

  /* ---- Chrome ---- */
  skipLink: "Skip to content",
  logoPrefix: "BD",
  logoAccent: "Pig",
  logoSuffix: "Roast",
  nav: {
    table: "Table",
    tradition: "Tradition",
    day: "The Day",
    details: "Details",
    rsvp: "RSVP",
  },

  /* ---- Hero ---- */
  hero: {
    eyebrow: "Saturday, September 5, 2026 · Black Diamond Homestead",
    titleLine: "Taranowski's",
    titleEpic: "Epic Pig Roast",
    sub: "Noon until after dark. Whole hog late afternoon. Campfire & camping welcome.",
    ctaPrimary: "Save the Date",
    ctaSecondary: "The tradition",
    scroll: "Scroll",
  },

  /* ---- Highlights (table photos) ---- */
  highlights: {
    label: "From past years",
    title: "Long tables & good light",
    desc: "A few favorites from past roasts — nothing fancy, just a nice table in the woods.",
    captions: {
      farmDinner: "Farm dinner table",
      gathering: "Gathering at the Table",
      goodTimes: "Good Times & Good Food",
      piggingOut: "Pigging Out",
      placemats: "Paper Placemats",
    },
  },

  /* ---- Tradition ---- */
  tradition: {
    label: "The Tradition",
    title: "A fire that brings people together",
    lead:
      "For years now, the homestead in Black Diamond has hosted an annual whole-hog roast. Smoke rises through the firs, the spit turns, and friends gather around the firepit with plates that never stay empty for long.",
    body:
      "It's not a formal event. It's the best kind of day: casual, a little wild, full of good food and better company. Tractor in the background. Drink station stocked. Potluck tables overflowing. Kids and dogs and stories that get better every year.",
    signature: "— The Taranowski Homestead",
  },

  /* ---- Editorial / around the place ---- */
  editorial: {
    label: "Around the place",
    title: "Same place, easy evenings",
    desc: "Potluck light, a drink station under the trees, and room to linger. Low key — with a few nice touches.",
  },

  /* ---- Cinema strip ---- */
  cinema: {
    captionHtml:
      "<em>Pigging Out</em> — plates, friends, done cooking",
  },

  /* ---- Scatter quote ---- */
  scatter: {
    quote:
      "Smoke, spit, and good company — the kind of afternoon that lingers long after the last plate is cleared.",
  },

  /* ---- The Day ---- */
  day: {
    label: "What to Expect",
    title: "The shape of the day",
    cards: [
      {
        title: "Noon start",
        body: "Official start is noon. Settle in, claim a spot, load up a plate of sides, and hang around the fire while the hog cooks.",
      },
      {
        title: "Late afternoon pig",
        body: "The whole hog is usually ready late afternoon — crackling, pulled pork, sauces. Potluck sides fill out the table.",
      },
      {
        title: "After dark",
        body: "Campfire after dark. Stories, kids and dogs. The day runs until the fire is done talking.",
      },
      {
        title: "Camping welcome",
        body: "Bring a tent if you want to stay overnight. Private Black Diamond homestead — address with the invite.",
      },
    ],
  },

  /* ---- Photo band note ---- */
  bandNoteHtml:
    'Photos from past years of <strong>#epicpigroast</strong> · <a href="https://www.flickr.com/photos/heathashli/albums/72157634185358075/" target="_blank" rel="noopener">Full album on Flickr →</a>',

  /* ---- Details ---- */
  details: {
    label: "Next Gathering",
    title: "Details",
    items: [
      {
        label: "When",
        valueHtml:
          "Saturday, September 5, 2026<br>Official start: noon · Goes until after dark",
      },
      {
        label: "The pig",
        value:
          "Whole hog on the fire — usually ready late afternoon. Plan to be hungry around then.",
      },
      {
        label: "Where",
        valueHtml:
          "Private homestead · Black Diamond, WA<br>Exact address sent with the invite.",
      },
      {
        label: "Camping",
        value: "Camping welcome. Campfire after dark. Stay as late as you like.",
      },
      {
        label: "What to bring",
        value:
          "Yourself, appetite, maybe a side or drink to share. Lawn chairs if you have them. Sleeping gear if you're camping overnight.",
      },
      {
        label: "Vibe",
        value:
          "Casual. Come as you are. Leave when the fire is still talking — or set up a tent and stay.",
      },
    ],
  },

  /* ---- RSVP ---- */
  rsvp: {
    title: "Want in?",
    intro:
      "This is a private annual gathering. If you've been before or want to be on the list, drop a note.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    peopleLabel: "Number of people",
    submit: "Request Invite",
    noteHtml:
      'Opens your email app to <a href="mailto:tom@blackdiamond.farm">tom@blackdiamond.farm</a> — nothing is sent through this website.',
    fallbackStatus:
      "If your email app did not open, write tom@blackdiamond.farm with your name, email, and headcount.",
    mailtoTo: "tom@blackdiamond.farm",
    mailtoSubject: "Epic Pig Roast RSVP — {name}",
    mailtoBody:
      "Name: {name}\nEmail: {email}\nNumber of people: {people}",
  },

  /* ---- Footer ---- */
  footer: {
    brandHtml: "Taranowski's Epic Pig Roast<br>Black Diamond, Washington",
    meta: "Homestead tradition · #epicpigroast",
    copySuffix: " · Built for the fire",
  },
};
