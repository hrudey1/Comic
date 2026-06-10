// ============================================================
//  DAILY.DSI — COMIC DATA
//  Add a new entry to the TOP of this array each time you post.
//  Two posts a day: just add two objects, newest first.
//
//  Fields:
//    id      — sequential number (keep incrementing)
//    title   — comic title shown above the image
//    date    — "YYYY-MM-DD" shown in archive
//    alt     — flavor text / caption (shown on hover, like xkcd)
//    image   — filename of your PNG inside the /comics/ folder
// ============================================================

const COMICS = [
  {
    id: 3,
    title: "Lone Luminary Lingers Lonesomely",
    date: "2026-06-09",
    alt: "Ironically, it takes a true lone genius to admit their lonely",
    image: "comics/003-lone-luminary-lingers-lonesomely.png"
  },
  {
    id: 2,
    title: "Piece of Peace",
    date: "2025-06-08",
    alt: "The phone, quicker than a lobotomy and way cheaper",
    image: "comics/002-piece-of-peace.png"
  },
  {
    id: 1,
    title: "Start of Something Great",
    date: "2026-06-07",
    alt: "Time to check back in 1 year if things changed for the better",
    image: "comics/001-start-of-something-great.png"
  },
];
