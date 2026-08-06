// Seed data for The Contradiction Engine.
//
// The questions are real points of conflict in Gabriel García Márquez's
// "Chronicle of a Death Foretold." Foreknowledge quotes are verbatim
// excerpts selected and supplied by the site's author; weather accounts are
// close paraphrase. Entries still marked [Placeholder] are layout filler
// awaiting real citations. Citations are by chapter.

export type Testimony = {
  witness: string; // "Victoria Guzmán"
  role: string; // "the Nasar family cook"
  quote: string; // exact text from the novella
  chapter: number;
  yearsAfter?: number; // when they gave this account
};

export type Contradiction = {
  id: string;
  question: string; // "Was it raining that morning?"
  testimonies: Testimony[];
  note: string; // 1-2 sentences on why the gap matters
};

export const contradictions: Contradiction[] = [
  {
    id: "weather",
    question: "Was it raining on the morning of the murder?",
    testimonies: [
      {
        witness: "Many people",
        role: "as counted by the narrator",
        quote:
          "A number of witnesses recalled a radiant morning, with a breeze coming in off the banana groves. But most remembered funereal weather: a low sky, the smell of still water, and a thin drizzle falling at the moment of the killing.",
        chapter: 1,
        yearsAfter: 27,
      },
      {
        witness: "Victoria Guzmán",
        role: "the Nasar family cook",
        quote:
          "Quartering rabbits at the kitchen table, she contradicted both camps without hedging: it had not rained that day, and it had not rained in all of February.",
        chapter: 1,
        yearsAfter: 27,
      },
      {
        witness: "Plácida Linero",
        role: "Santiago Nasar's mother",
        quote:
          "She never testified to the sky at all. What she carried from that morning was the dream: her son walking through a grove of timber trees while a soft drizzle fell, rain that existed only inside the omen.",
        chapter: 1,
        yearsAfter: 27,
      },
    ],
    note:
      "The majority remembers the sky that suits the ending: memory arranging itself around the outcome. And with the dream's drizzle in the record, there is no way to tell whether the town remembers weather or remembers the omen.",
  },
  {
    id: "foreknowledge",
    question: "Did Santiago Nasar know he was being hunted?",
    testimonies: [
      {
        witness: "Victoria Guzmán",
        role: "the Nasar family cook",
        quote:
          "“I didn't warn him because I thought it was drunkards' talk,” she told me.",
        chapter: 1,
        yearsAfter: 27,
      },
      {
        witness: "Divina Flor",
        role: "her daughter",
        quote:
          "She, on the other hand, didn't warn him because she was nothing but a frightened child at the time, incapable of a decision of her own, and she'd been all the more frightened when he grabbed her by the wrist with a hand that felt frozen and stony, like the hand of a dead man.",
        chapter: 1,
        yearsAfter: 27,
      },
      {
        witness: "Margot",
        role: "the narrator's sister, with him on the docks",
        quote:
          "“He didn't seem to be chilly and was only thinking about what the wedding must have cost,” she told me.",
        chapter: 1,
        yearsAfter: 27,
      },
      {
        witness: "Nahir Miguel",
        role: "Flora Miguel's father, the one who finally told him",
        quote:
          "“He turned pale and lost control in such a way that it was impossible to think that he was pretending,” he told me.",
        chapter: 5,
        yearsAfter: 27,
      },
    ],
    note:
      "A written warning lay under his door the whole time, unread. His calm on the docks argues he never knew; how long Victoria Guzmán took to admit what she knew argues how badly the town needed him to have known.",
  },
  {
    id: "twins",
    question: "Did the Vicario twins want to be stopped?",
    testimonies: [
      {
        witness: "Clotilde Armenta",
        role: "proprietor of the milk shop",
        quote:
          "[Placeholder] They announced the killing to anyone who came in, she said, and to her they did not look like men resolved on murder. They looked like men pleading for someone to prevent it.",
        chapter: 3,
        yearsAfter: 27,
      },
      {
        witness: "Colonel Lázaro Aponte",
        role: "mayor of the town",
        quote:
          "[Placeholder] He took their knives away, watched them go, and judged the matter finished: it was butchers' bravado, the kind of talk drunk men use up by saying it aloud.",
        chapter: 3,
        yearsAfter: 27,
      },
      {
        witness: "Pedro Vicario",
        role: "one of the twins, to the investigating magistrate",
        quote:
          "[Placeholder] There was no power on earth, he declared, that could have stopped them once the matter of honor was set; they killed him openly and would do it again.",
        chapter: 3,
      },
      {
        witness: "Prudencia Cotes",
        role: "Pablo Vicario's fiancée",
        quote:
          "[Placeholder] She knew what they were going to do and never thought of dissuading them. She would not have married a man who failed to do it.",
        chapter: 3,
        yearsAfter: 27,
      },
    ],
    note:
      "The twins told everyone, which reads either as a plea for rescue or as the advertisement honor required. The town's failure to stop them is a different crime depending on which it was.",
  },
  {
    id: "guilt",
    question: "Was Santiago Nasar actually the man?",
    testimonies: [
      {
        witness: "Angela Vicario",
        role: "the returned bride",
        quote:
          "[Placeholder] She produced the name without hesitation, as if she had found it waiting in the dark, and in every retelling across the years she never once varied it.",
        chapter: 2,
        yearsAfter: 23,
      },
      {
        witness: "The investigating magistrate",
        role: "author of the official brief",
        quote:
          "[Placeholder] He found not a single indication, however improbable, that the two had ever been seen together, and confessed his unease in the margin of the file.",
        chapter: 5,
      },
      {
        witness: "The chronicler",
        role: "narrator, friend of the dead man",
        quote:
          "[Placeholder] No one who knew them believed it. Santiago was vain, cautious with his prey, and never looked at her; she was the last person a man like him would have chosen.",
        chapter: 4,
        yearsAfter: 27,
      },
    ],
    note:
      "The entire machinery of the death rests on a single uncorroborated name. The one person who knows has repeated it for decades, and the record can neither convict nor clear the man it killed.",
  },
];
