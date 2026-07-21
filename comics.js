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
    id: 43,
    title: "Wish Upon A Shooting Star",
    date: "2026-07-19",
    alt: "Oh shooting star, I wish more people would read the flavor text",
    image: "comics/043=wish-upon-a-shooting-star.png"
  },
  {
    id: 42,
    title: "Burnt and Frozen Cooking",
    date: "2026-07-18",
    alt: "Physicists call it a quantum superposition of thermal gradients, Mom calls it Tuesday night lasagna",
    image: "comics/042-burnt-and-frozen-cooking.png"
  },
  {
    id: 41,
    title: "The Wizard Dog",
    date: "2026-07-17",
    alt: "This is why there ano wizard dogs in Harry Potter, Voldemort would stand no chance",
    image: "comics/041-the-wizard-dog.png"
  },
  {
    id: 40,
    title: "Boredception",
    date: "2026-07-16",
    alt: "Christopher Nolan and Satoshi Kon, never heard of them",
    image: "comics/040-boredception.png"
  },
  {
    id: 39,
    title: "Butt Paper Already Exists",
    date: "2026-07-15",
    alt: "Invention is 99% perspiration and 1% inspiration my butt, not falling for that again",
    image: "comics/039-butt-paper-already-exists.png"
  },
  {
    id: 38,
    title: "Shock and Doughnial",
    date: "2026-07-14",
    alt: "Grass is always greener, the cookie is always sweeter",
    image: "comics/038-shock-and-doughnial.png"
  },
  {
    id: 37,
    title: "Daydreaming vs Knightdreaming",
    date: "2026-07-13",
    alt: "Better a daydream than a knightmare",
    image: "comics/037-daydreaming-vs-knightdreaming.png"
  },
  {
    id: 36,
    title: "Four Leaf Cardboard",
    date: "2026-07-12",
    alt: "You're only as lucky as you are delusional, just ask anyone who has moved to Los Angeles",
    image: "comics/036-four-leaf-cardboard.png"
  },
  {
    id: 35,
    title: "Newton's First Law",
    date: "2026-07-11",
    alt: "Good thing it was not Newton's third law or that tree would be in real trouble",
    image: "comics/035-newton's-first-law.png"
  },
  {
    id: 34,
    title: "Life Moves At A Snail's Pace",
    date: "2026-07-10",
    alt: "Insults move pretty fast. If you don't stop and look around once in a while you could miss it-Ferris Bueller",
    image: "comics/034-life-moves-at-a-snail's-pace.png"
  },
  {
    id: 33,
    title: "Light Limerick for Lepidopterists",
    date: "2026-07-09",
    alt: "Sadly, Mrs. Butterfly it was not Wednesday",
    image: "comics/033-light-limerick-for-lepidopterists.png"
  },
  {
    id: 32,
    title: "The Infamous Wallfish",
    date: "2026-07-08",
    alt: "It would be easier to find the infamous Smallfoot and Lock Key Monster, especially with a stick, string and a paper clip with no bait",
    image: "comics/032-the-infamous-wallfish.png"
  }, 
  {
    id: 31,
    title: "No Sleep For The Wicked",
    date: "2026-07-07",
    alt: "I think George Costanza would make a good teacher",
    image: "comics/031-no-sleep-for-the-wicked.png"
  },
  {
    id: 30,
    title: "Gauss The Artwork ",
    date: "2026-07-06",
    alt: "Paint by numbers was inspired by Da Vinci's fresco section numbering technique",
    image: "comics/030-gauss-the-artwork.png"
  },
  {
    id: 29,
    title: "Don't Take Snowmen For Granite",
    date: "2026-07-05",
    alt: "And they said you could make snowmen in July heat, guess they don't listen to rock n roll",
    image: "comics/029-don't-take-snowmen-for-granite.png"
  },
  {
    id: 28,
    title: "Lavender Scented Arson",
    date: "2026-07-04",
    alt: "A true pioneer in the world of aromatherapy",
    image: "comics/028-lavender-scented-arson.png"
  },   
  {
    id: 27,
    title: "A Photobombing Dog",
    date: "2026-07-03",
    alt: "Dogs are scientifically proven to improve 99% of pictures",
    image: "comics/027-a-photobombing-dog.png"
  }, 
  {
    id: 26,
    title: "True Slice Serve",
    date: "2026-07-02",
    alt: "Even Federer struggles to do a true slice serve",
    image: "comics/026-true-slice-serve.png"
  }, 
  {
    id: 25,
    title: "Thank God It's Wednesday",
    date: "2026-07-01",
    alt: "Tuesdays are more for angsty sonnets",
    image: "comics/025-thank-god-it's-wednesday.png"
  }, 
  {
    id: 24,
    title: "The God of Wind",
    date: "2026-06-30",
    alt: "Boreas, Zephryus, Notus, and Eurus all follow proper nutrition",
    image: "comics/024-the-god-of-wind.png"
  }, 
  {
    id: 23,
    title: "Opposites Attract Cookies Repel Dogs",
    date: "2026-06-29",
    alt: "Well magnets and also rampant anti-intellectualism, but also magnets",
    image: "comics/023-opposites-attract-cookies-repel-dogs.png"
  }, 
  {
    id: 22,
    title: "Ducks Demonstrate Discerning Dichotomies",
    date: "2026-06-28",
    alt: "And don't get ducks started on sourdough bread",
    image: "comics/022-ducks-demonstrate-discerning-dichotomies.png"
  }, 
  {
    id: 21,
    title: "Reflections of My Dog",
    date: "2026-06-27",
    alt: "Objects in mirror maybe more charming than they appear",
    image: "comics/021-reflections-of-my-dog.png"
  }, 
  {
    id: 20,
    title: "The Furst Talking Dog Ever",
    date: "2026-06-26",
    alt: "A man of few words, a dog of many",
    image: "comics/020-the-furst-talking-dog-ever.png"
  }, 
  {
    id: 19,
    title: "Pawsible Prediction Powers",
    date: "2026-06-25",
    alt: "What kind of dog is can win the lottery? A Golden Retriever",
    image: "comics/019-pawsible-prediction-powers.png"
  }, 
  {
    id: 18,
    title: "Faint Fireflies Fly Faithfully Forenight",
    date: "2026-06-24",
    alt: "How many fireflies does it take to replace the moon?",
    image: "comics/018-faint-fireflies-fly-faithfully-forenight.png"
  }, 
  {
    id: 17,
    title: "Stick to the Plan",
    date: "2026-06-23",
    alt: "Like sticks on a tree, we all grow in different directions",
    image: "comics/017-stick-to-the-plan.png"
  }, 
  {
    id: 16,
    title: "Beginning of the Cookie War",
    date: "2026-06-22",
    alt: "If you give a dog a cookie by Byron Verona",
    image: "comics/016-beginning-of-the-cookie-war.png"
  }, 
  {
    id: 15,
    title: "Answer to All Asks",
    date: "2026-06-21",
    alt: "Fun fact, Woof is a popular funk rock band",
    image: "comics/015-answer-to-all-asks.png"
  },
  {
    id: 14,
    title: "The Trials of Togetherness",
    date: "2026-06-20",
    alt: "This is how early humans befriended wolves",
    image: "comics/014-the-trials-of-togetherness.png"
  },
  {
    id: 13,
    title: "The Unemployment Bush",
    date: "2026-06-19",
    alt: "Three hours is a short time to wait for a friend",
    image: "comics/013-the-unemployment-bush.png"
  },
  {
    id: 12,
    title: "Happiness in a Box",
    date: "2026-06-18",
    alt: "A paw-fectly great dog abandoned",
    image: "comics/012-happiness-in-a-box.png"
  },
  {
    id: 11,
    title: "Lamer than Serial Killers",
    date: "2026-06-17",
    alt: "The documentary stabs a little too close to home",
    image: "comics/011-lamer-than-serial-killers.png"
  },
  {
    id: 10,
    title: "Trees a Crowd",
    date: "2026-06-16",
    alt: "This is how lumberjacks are created",
    image: "comics/010-trees-a-crowd.png"
  },
  {
    id: 9,
    title: "Serene Star Sounds of Silence",
    date: "2026-06-15",
    alt: "I wonder if Simon and Garfunkel went stargazing for inspiration ",
    image: "comics/009-serene-silence-of-stars.png"
  },
  {
    id: 8,
    title: "Solo Baseball Hurts",
    date: "2026-06-14",
    alt: "More than crushing solitude, a 5 oz baseball to face really hurts",
    image: "comics/008-solo-baseball-hurts.png"
  },
  {
    id: 7,
    title: "General Hate of School",
    date: "2026-06-13",
    alt: "As opposed to all those specific reason like no guava mango smoothies",
    image: "comics/007-general-hate-of-school.png"
  },
  {
    id: 6,
    title: "Mirror Mirror on A Wall",
    date: "2026-06-12",
    alt: "Sadly this isn't Snow White, a Mirror of Matsuyama, Lady of Shalott and Bloody Mary",
    image: "comics/006-mirror-mirror-on-a-wall.png"
  },
  {
    id: 5,
    title: "Cloud Nine",
    date: "2026-06-11",
    alt: "I guess you can't be on cloud nine forever, things eventually go back to normal",
    image: "comics/005-cloud-nine.png"
  },
  {
    id: 4,
    title: "We Will Rock You",
    date: "2026-06-10",
    alt: "Birds of a feather, hurt people together",
    image: "comics/004-we-will-rock-you.png"
  },
  {
    id: 3,
    title: "Lone Luminary Lingers Lonesomely",
    date: "2026-06-09",
    alt: "Ironically, it takes a true lone genius to admit they're lonely",
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
