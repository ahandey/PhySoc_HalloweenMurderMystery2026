// -- Format --
// person.story(
//   [
//     "What the player asks",
//     "Something else they could ask"
//   ],
//   "What the person says"
// )

// -- Start --
const start = queen.story(
  "", // in the room
  `${matriarch} is dead!, Murder Weapon: Sword`
);

// -- Sword Puzzle --
const executionerSword = executioner.story(
  "Do you know anything about the sword?",
  `Yeah, that's my sword. I used it for the execution yeterday at 6 am. I left it in the courtyard for the butler to clean it.`
);
start.then(executionerSword);

const butlerSword = butler.story(
  [
    "Do you know anything about the sword?",
    "Did you get the sword from the courtyard?"
  ],
  `Yes, after the execution, I got the sword from the courtyard and cleaned it in the washbasin. I left it there to attend to ${matriarch}'s breakfast at 8. Only me, ${cupbearer}, and ${steward} use the washbasin.`
)
start.then(butlerSword, 0);
executionerSword.then(butlerSword, 1);

// -- Memory --
let end = wizard.story(
  "Here are all the things for the memory",
  `Ok, I'll retrieve the memory, come back in __ mins`
).then(
  wizard.story(
    "It's been __ mins",
    `Here's the memory`
  )
).then(
  jester.story(
    "The murderer is one of you",
    `[At the end, in the starting room] ___`
  )
);