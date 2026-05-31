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
    id: 5,
    title: "Computers",
    date: "2025-01-10",
    alt: "Why are computers the way that they are.",
    image: "comics/005-computers.png"
  },
  {
    id: 4,
    title: "Rain",
    date: "2025-01-10",
    alt: "You brought an umbrella today. It didn't rain. You did not bring it yesterday night.",
    image: "comics/004-rain.png"
  },
  {
    id: 3,
    title: "The Notification",
    date: "2025-01-09",
    alt: "You opened the app. Now there are seventeen more notifications. Congratulations.",
    image: "comics/003-the-notification.png"
  },
  {
    id: 2,
    title: "The Queue",
    date: "2025-01-07",
    alt: "The second person always acts like they were there first. They were not.",
    image: "comics/002-the-queue.png"
  },
  {
    id: 1,
    title: "Monday",
    date: "2025-01-06",
    alt: "Every week starts with a Monday. The universe has always been against us.",
    image: "comics/001-monday.png"
  },
];
