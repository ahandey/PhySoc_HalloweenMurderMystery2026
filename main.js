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
  `${matriarch} is dead!, Murder Weapon: Sword (with everyones finger prints)`
).then(executioner.story(
  "",
  `Don't dirty the crime scene, I just finished cleaning it up.`
))

const cupbearerMurderT = cupbearer.story(
  [
    `Where were you last night at murder time?`,
    `Were you playing chess/drinking last night with the ${general}?`
  ],
  `Yeah, I was listening to ${general}'s *sounds very rehearsed* strategic planning.. advice. Yeah, thats what its called. 
  [if they directly mention chess or drinks] Did ${general} tell you that? Well, yeah, but it was strictly professional. After dinner, ${general} was sharing *idolizing* amazing stories about his victories and I just wanted to know all of the details, but he didn't want ${executioner} listening, I don't remember why, maybe you could ask one of them. But anyways he said he'd map it all out in his war planning room, but then he made some really smart comparison to chess that I didn't understand and we ended up playing. For a while. Until he fell asleep. And I didn't know if I was supposed to leave or not so I just waited there for him to get up. But I think I ended up falling asleep. `
)
start.then(cupbearerMurderT, 0)

const queenMurderT = queen.story(
  [
    `Where were you last night at murder time?`
  ],
  `I was with ${wizard} in Wizard's tower until 1am working on our project. After that, I went straight to bed.`
)
start.then(queenMurderT)

const wizardMurderT = wizard.story(
  [
    `Where were you last night at murder time?`
  ],
  `${queen} and I were researching important magical properties until 2am. We both went to bed after that.`
)
start.then(wizardMurderT)

const stewardMurderT = steward.story(
  [
    `Where were you last night at murder time?`
  ],
  `*annoyed* Well I was supposed to be asleep. Unfortunately, one of ${jester} clogged the royal toilet and woke me up in their quest to find a plunger. By the time I got up, ${butler} seemed to have already provided them with the plunger but took off on his nightly rounds. I supervised the plunging, you never know when ${jester} is lying or truthing.`
)
start.then(stewardMurderT)

const executionerMurderT = executioner.story(
  [
    `Where were you last night at murder time?`
  ],
  `I was probably sleeping. The only time I got up was to see why ${general} got so quite and check up on ${cupbearer}, probably around midnight. I mean it's really suspicious when ${general} goes quite, he never shuts up about his war fairy tales. ${cupbearer} was just sitting there looking awkward and for a second I thought the same thing with the king happened again, but ${general} was just asleep. I know how much ${cupbearer} admires ${general}, *mumbles* although [general] doesn't deserve it, but I figured he'd probably prefer to go to sleep himself instead of watching ${general} sleep, so we both went to bed. Then, all of a sudden I was being woken up to go clean the murder scene. It's hard enough to get up and kill someone but to get up and clean something? Impossible.`
)
start.then(executionerMurderT)

const executionerBackstory = executioner.story(
  [
    `What thing with the King? [or anything about ${cupbearer} past]`
  ],
  `Oh, it's not really my place to say, it's ${cupbearer}'s past and he can share it if he wants. Although, it wasn't his fault; *reluctant* let's just say he's gotten pretty tolerant of his job.`
)
executionerMurderT.then(executionerBackstory)

const jesterMurderT = jester.story(
  [
    `Where were you last night at murder time?`
  ],
  `Either: *teasingly* [other person] clogged the royal toilet. I guess you could say [they] didn't have the "Royal Flush". [person] had to go get ${butler} to get the royal plunger!`
)
start.then(jesterMurderT)

// -- Candle Puzzle --
const butlerMurderT = butler.story(
  [
    `Where were you last night at murder time?`
  ],
  `Well actually, I think I saw it happen. Don't get too excited though, I wasn't wearing my glasses, it was late, and the only light was from my candle so I couldn't tell you who did it. I ran down there so fast, I dropped my candle and my only light source. I didn't want to run into the murderer in the dark so I fumbled my way back to my room to get another candle. To be honest, I was a little shaken and scared, well actually maybe a lot, and I just froze up sitting in my bed. *ashamed* I guess I eventually fell asleep because next thing I knew, the sun was rising and I woke up to the news of the murder. *frustrated* If there was a way to remember it clearer, maybe I could figure out who the murderer was, I'm sorry.`
)
start.then(butlerMurderT)

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

const steward2Sword = steward.story(
  [
    "Do you know anything about the sword?",
  ],
  `I did see ${cupbearer} swinging the sword around earlier, pretty suspicious now that I think about it…`
)
start.then(steward2Sword);

const stewardSword = steward.story(
  [
    "Did you move the sword from the wash basin?"
  ],
  `Ah, yes. I did move the sword from the wash basin, but I was only bringing it to ${general}. I figured he left it there after his training sessions; he can be quite… unaware of the topic of “decorum”. That must have been a couple hours after lunch.`
)
butlerSword.then(stewardSword);

const cupbearerSword = cupbearer.story(
  [
    "Did you move the sword from the wash basin?"
  ],
  `No, but I did see it there; (gushes about strangely specific details about the sword). I got to see it again at lunch but when I came back for dinner it was unfortunately gone.`
)
stewardSword.then(cupbearerSword);
butlerSword.then(cupbearerSword);

const cupbearer2Sword = cupbearer.story(
  [
    "Why were you suspiciously swinging the sword around?"
  ],
  `What? Did someone see me doing that…must have been ${butler} or ${steward}. This is kind of embarrassing… but I’ve always dreamed of being a knight. I admire all of ${general}’s stories and I just came from watching the troops training. Don’t tell the general please! I love my job as a cupbearer, I mean I live in the castle, but drinking the same thing every day gets a little boring. No one even puts in a little poison to make my job interesting. Even all the action at my last posting missed me. I would just love to go on one little adventure. One adventure and then I’d be content drinking all of the drinks for the rest of my life……..sorry what were we talking about again?`
)
steward2Sword.then(cupbearer2Sword);

const generalPuzzle = general.puzzle(
  "[If the players haven't completed the chess puzzle]",
  "You can't just walk up to me and bombard me with questions like that! At least show me the courtesy of playing me at a game of chess first!",
  "Chess Puzzle",
  `Wow, you are a great strategist! You know ${cupbearer} is actually quite a bright fellow. We were playing chess till late last night, strictly strategic business relalated, and having a few drinks, also strictly business, y'know that's ${cupbearer}'s job, and I was quite impressed by the fellow. The whole thing that happened with the other king, I don't think it was his fault, although some people are pointing fingers... ${steward}... ahem.... A good fellow, good fellow. Now what did you want to ask me?`
)
start.then(generalPuzzle)
generalPuzzle.then(cupbearerMurderT, 1)

const generalSword = general.story(
  [
    `Did ${steward} bring you the sword [after lunch]?`
  ],
  `${steward}? [Clarify time they're asking about]. After lunch? I had my meeting with ${matriarch} from 12-2pm and then my meeting with ${wizard} from 2-4pm. Maybe one of them remembers. ...Er I guess maybe ${wizard} remembers.`
)
generalPuzzle.then(generalSword)
stewardSword.then(generalSword)

const wizardSword = wizard.story(
  [
    `Did ${steward} bring the sword to the general during your meeting?`
  ],
  `Oh, yes! ${steward} did deliver the sword during the meeting, although it was ${executioner}'s sword, not ${general}'s. I offered to bring it down to the executioner after the meeting, which ended at 4pm.`
)
generalSword.then(wizardSword)

const executionerReturnSword = executioner.story(
  [
    `Did ${wizard} return your sword [at 4pm]?`
  ],
  `[When?] No, ${wizard} never brought me my sword. Did he say he did? After leaving it for the butler, I didn't see it until I had to clean up the crime scene. My poor sword, tainted with murder. Maybe ${wizard} stashed it away and used it; I wouldn't be surprised, he's always getting me to do his dirty work...`
)
wizardSword.then(executionerReturnSword)

const wizardSusSword = wizard.story(
  [
    `The ${executioner} said you never returned the sword. Where did you bring it?`
  ],
  `Huh? Oh, I guess I never did bring it down. Ah, yes, I remember now. I was bringing it down, but I ran into ${queen} and became immersed in our discussion. We ended up moving to my tower to work on our ideas. I'm not sure when or where I put the sword down, maybe ${queen} remembers.`
)
executionerReturnSword.then(wizardSusSword)

const queenSword = queen.story(
  [
    `Do you remember where the ${wizard} put the sword?`
  ],
  `Right now I'm focused on decoding ${matriarch}'s journal. Maybe there's some clue about what happened or some secret relationships (said suspiciously) that might provide a motivation. ${matriarch} must have had a key for this, would you go ask around to see if you can find it and then use it to decode this?`
)
wizardSusSword.then(queenSword)

const journalDecoding = butler.puzzle(
  "Do you know how to decipher this journal?",
  `Ah, ${matriarch}'s journal. It just so happens that I kept the key on hand for ${matriarch}. *gives key*`,
  "[Journal Puzzle]",
  `I suppose ${queen} wanted to see this?`
)
queenSword.then(journalDecoding)

const queenJournal = queen.story(
  "[If players decoded journal]",
  `Thanks. *Reads the journal*. I knew it! That damn perfect ${steward}! I just needed the proof, now she's over. [angry things (say things about ending her career but make it sound like youre ending her life)] What was your question earlier? Oh, the sword! Yes, I was being entertained by ${jester} when ${wizard} walked through the throne room carrying the sword. We started talking about our recent project and then moved to the Wizard's Tower to work on it. We definitely did not bring the sword to the tower so he must have left it in the Throne Room. Maybe ${jester} can confirm it, well I guess only if you know which one tells the truth.`
)
journalDecoding.then(queenJournal)

const cupbearerNewsclipping = cupbearer.puzzle(
  `What happened with the other king?`,
  `Oh... yeah. I got fired from my other position after the king died. They blamed me, since he died of poison, but I drank the wine and I was fine. Either way, they blamed me. I was so worried I'd lose my job. My family relies on me for the income y'know. But at least I still have them... poor jesters... Oh! I wasn't supposed to say that. You didn't hear anything. But..., I can give you this [hands over newspaper pieces]. It's a little torn though, not sure why...`,
  "Newspaper Puzzle",
  ``
)
generalPuzzle.then(cupbearerNewsclipping)

const jesterBackstory = jester.story(
  [
    `Questions about family/shown newspaper clipping`
  ],
  `Jack: *serious* Who gave you that?
  [To each other]
  Allison: Must have been ${cupbearer}
  Jack: How do you know that?
  Allison: He's the only one who cares about it
  Jack: Well he shouldn't, we don't go around talking about his past. [To asker] I have gone around talking about his past, the ${general} and ${executioner} are willing to share.
  [To asker]
  Allison: Yes, it's better if we ALL just forget about this
  [Won't talk about family anymore]`
)
cupbearerNewsclipping.then(jesterBackstory);
jesterBackstory.then(executionerBackstory)

const jesterSword = jester.story(
  [
    `Do you know anything about the sword?`,
    `Do you know if the sword was left in the throne room?`
  ],
  `Allison: yes
  Jack: no
  I thought we agreed only one of us would answer!
  Yeah, and I said I would.
  No, that's not fair!
  [bickering ensues, won't answer anything else]`
)
start.then(jesterSword, 0)
queenJournal.then(jesterSword, 1)

// -- Poison --
const stewardAffair = steward.story(
  [
    `Were you in a relationship with ${matriarch}? [anything but must bring decoded journal]`
  ],
  `Where'd you get this?
  From ${queen}?!?
  So she knows. *stressed*. Okay, yes, ${matriarch} and I did have a little something going on... *calculating* But now ${matriarch} is dead, and it doesn't matter anymore. I know ${queen} has been looking for something to get rid of me *slices throat motion* and now she has it. *Pause*. I need to get rid of the evidence *takes notebook*. Look, there's this potion I know ${wizard} has, a potion that would sweep this whole thing under the rug. If you can get ${queen} to drink it, she'll never think about the affair again. Will you give it to her? My life is on the line.`
)
queenJournal.then(stewardAffair)

const wizardPotion = wizard.puzzle(
  `Can we borrow your [forget] potion for ${steward}?`,
  "Uhh..., I'm a little busy at the moment, but I know I have that potion (Blackout Brew) around here somewhere. If you can find it, you're welcome to borrow it",
  "Potion Cup Puzzle",
  ""
)
stewardAffair.then(wizardPotion)

const queenPotion = queen.story(
  "We brought you a drink",
  `Oh! Thank you, Lord knows I could use one. Can you bring it over to ${cupbearer} so they can test it for me?`
)
wizardPotion.then(queenPotion)
wizardPotion.then(steward.story(
  "What should we do with the potion?",
  `Oh! You have the potion! Perfect. Now bring it to the ${queen} and make sure she drinks it, so I don't have to worry anymore.`
)).then(queenPotion)

const poisonCrossroads = cupbearer.story(
  `Can you test this drink we brought for the ${queen}?`,
  "Yeah, of course! *Sips drink*. Hmm... this tastes strangely familiar. Reminds me of my previous posting... Ah well, I'm not dead so I'm sure it's fine"
)
queenPotion.then(poisonCrossroads)

const queenDies = queen.story(
  `The ${cupbearer} says it "seems fine"`,
  `Cool, thanks. *Sips Drink*. Hmm... this tastes kinda funny... *passes out, dead*`
)
poisonCrossroads.then(queenDies)

queenDies.then(executioner.story(
  "[queen dies]",
  "*sighs* Well, I guess I have more cleaning to do. *Throws cup away* *mumbles* I thought killing was my job."
))

const stewardWins = steward.story(
  `${queen} Died!!`,
  `Hahaha! Finally! That good-for-nothing was probably the murderer anyway, and who can blame her? Trapped in a loveless marriage, I couldn't imagine how hard it was for her. But now she's at peace. I am a little worried about ${wizard} though, I still don't know what they were up to together. Do you think he knows? ${jester} was sneaking around the Wizard's tower, maybe you could ask them if they found anything...`
)
queenDies.then(stewardWins)

const stewardLoses = steward.story(
  "The potion was poison!",
  `Did she drink it?? No??? Dammit!! Now what am I gonna do... I really needed her to die! Now she's gonna fire me!! Argh!`
)
poisonCrossroads.then(stewardLoses)

// -- Memory --
const wizardProject = wizard.story(
  [
    `What were you working on with ${queen}?`
  ],
  `Important magical business. Very advanced magical stuff too, you wouldn't be able to understand it unless you were a master wizard.`
)
queenJournal.then(wizardProject)
wizardSusSword.then(wizardProject)

const queenProject = queen.story(
  [
    `What were you working on with ${wizard}?`
  ],
  `You'd have to ask ${wizard}. Although, he probably won't tell you anything unless if you can find a way to prove to him you are a master in the magical arts.`
)
queenJournal.then(queenProject)
wizardSusSword.then(queenProject)

const wizardProof = wizard.puzzle(
  [
    `How can I prove that I'm a master wizard?`
  ],
  `*laughs* You? A master wizard? You're the most muggle looking muggle I've ever seen. Well actually, it's a little suspicious, maybe even magical, that you look so unmagical. Okay, fine.`,
  "Wizard Puzzle",
  `Wow, you really do know magic. And to look that unmagical? You must have mastered the magical arts. Alright, then you can help me on my project. I'm developing a magical process to retrieve forgotten or unclear memories, ${queen} believes we could use this to resolve disputes and get evidence of certain hidden affairs. I believe I have it figured out, I just need a willing memory and an object tied specifically to the memory, like a crown for a coronation or a ring for a proposal.`
)
queenProject.then(wizardProof)

const jesterWeed = jester.story(
  [
    `Did you find anything in the Wizard's tower?`
  ],
  `Allison: yes
  Jack: no
  We said I would go first!
  I thought that counted last time.
  No, and it doesn't count this time either. What 'thing' are you looking for in the tower?
  We do have something... *looks at each other*.
  But we'll only give it to you if you dance to a song in the Throne Room.
  [Set up music in Throne Room and ensure completion, then hand over bag of drugs]
  Here's something from ${wizard}'s stash to [if good] reward you for your performance [if bad] loosen up those stiff joints.`
)
stewardWins.then(jesterWeed)

jesterWeed.then(steward.story(
  `[Show drug bag]`,
  `What is this? *inspects* *tastes* *nods* That's what they were hiding? That's, ...disappointing. I guess they were never really a threat then, huh...`
))

const wizardBlackmail = wizard.story(
  `[Show drug bag]`,
  `*snatches* Where'd you get that? Were you snooping in my tower? Don't tell anyone, that's a strict magical secret. I guess you also know about ${queen} and my little memory project. If you promise to keep all this quiet, I'll retrieve one memory for you, from anyone. All I need is an object tied specifically to the memory, like a crown for a coronation or a ring for a proposal.`
)
jesterWeed.then(wizardBlackmail)

const wizardConvinced = events.story("", `${wizard} agrees to retrieve the memory`)
wizardProof.then(wizardConvinced)
wizardBlackmail.then(wizardConvinced)

const executionerCandle = executioner.story(
  `Did you see ${butler}'s candle at the crime scene while cleaning?`,
  `Oh, yeah. Might be critical evidence. Do you want it?`
)
butlerMurderT.then(executionerCandle)
wizardConvinced.then(executionerCandle)
executionerMurderT.then(executionerCandle)

const getMemory = wizard.story(
  "Here are all the things for the memory",
  `Ok, I'll work on retrieving the memory, could you go tell ${queen} I'm testing our project for me?`
)
wizardConvinced.then(getMemory)
executionerCandle.then(getMemory)

const wizardQueenDead = wizard.story(
  `${queen} is dead.`,
  `No, the other one, Loki. [] No, ${matriarch} was killed, ${queen} is in the Throne Room by her body. WDYM SHE ALSO DIED? Did you check?`
)
getMemory.then(wizardQueenDead)

const tellQueen = queen.story(
  `${wizard} is testing your project.`,
  "Oh cool. Can I see it when you're done?"
)
getMemory.then(tellQueen)

const memoryRetrieved = wizard.story(
  [
    `${queen} wants to see it when it's done`,
    "[After learning queen is dead]"
  ],
  `Here's the memory`
)
tellQueen.then(memoryRetrieved, 0)
wizardQueenDead.then(memoryRetrieved, 1)

memoryRetrieved.then(
  jester.story(
    "The murderer is one of you",
    `[At the end, in the starting room] ___`
  )
)