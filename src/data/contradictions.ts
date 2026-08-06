// Seed data for The Contradiction Engine.
//
// The questions are real points of conflict in Gabriel García Márquez's
// "Chronicle of a Death Foretold." All quotes are verbatim excerpts
// selected and supplied by the site's author. Citations are by chapter.

export type Testimony = {
  witness: string; // "Victoria Guzmán"
  role: string; // "the Nasar family cook"
  quote: string; // exact text from the novella
  chapter: number;
  yearsAfter?: number; // when they gave this account; 0 means the same morning
  deceased?: boolean; // dead by the time the chronicle was assembled
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
          "Many people coincided in recalling that it was a radiant morning with a sea breeze coming in through the banana groves, as was to be expected in a fine February of that period. But most agreed that the weather was funereal, with a cloudy, low sky and the thick smell of still waters, and that at the moment of the misfortune a thin drizzle was falling like the one Santiago Nasar had seen in his dream grove.",
        chapter: 1,
        yearsAfter: 27,
      },
      {
        witness: "Victoria Guzmán",
        role: "the Nasar family cook",
        quote:
          "Victoria Guzman, the cook, was sure that it hadn't rained that day, or during the whole month of February. “On the contrary,” she told me when I came to see her, a short time before her death. “The sun warms things up earlier than in August.”",
        chapter: 1,
        yearsAfter: 27,
        deceased: true,
      },
      {
        witness: "Plácida Linero",
        role: "Santiago Nasar's mother, recalling the dream",
        quote:
          "He'd dreamed he was going through a grove of timber trees where a gentle drizzle was falling, and for an instant he was happy in his dream, but when he awoke he felt completely spattered with bird shit.",
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
        deceased: true,
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
          "“That's not why,” said Clotilde Armenta. “It's to spare those poor boys from the horrible duty that's fallen on them.”",
        chapter: 3,
        yearsAfter: 27,
      },
      {
        witness: "Colonel Lázaro Aponte",
        role: "mayor of the town, after confiscating the knives",
        quote: "“Now they haven't got anything to kill anybody with,” he said.",
        chapter: 3,
        yearsAfter: 0,
      },
      {
        witness: "Pablo Vicario",
        role: "one of the twins, to his wavering brother",
        quote:
          "“There's no way out of this,” he told him. “It's as if it had already happened.”",
        chapter: 3,
        yearsAfter: 0,
      },
      {
        witness: "Prudencia Cotes",
        role: "Pablo Vicario's fiancée",
        quote:
          "“I knew what they were up to,” she told me, “and I didn't only agree, I never would have married him if he hadn't done what a man should do.”",
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
        role: "the returned bride, to the investigating magistrate",
        quote:
          "When the investigating magistrate asked her with his oblique style if she knew who the decedent Santiago Nasar was, she answered him impassively: “He was my perpetrator.”",
        chapter: 5,
      },
      {
        witness: "The investigating magistrate",
        role: "author of the official brief",
        quote:
          "On folio 416, in his own handwriting and with the druggist's red ink, he wrote a marginal note: Give me a prejudice and I will move the world. Under that paraphrase of discouragement, in a merry sketch with the same blood ink, he drew a heart pierced by an arrow.",
        chapter: 5,
      },
      {
        witness: "Angela Vicario",
        role: "at her window, decades later",
        quote:
          "I tried to get that truth out of her myself when I visited her the second time, with all my arguments in order, but she barely lifted her eyes from the embroidery to knock them down. “Don't beat it to death, cousin,” she told me. “He was the one.”",
        chapter: 4,
        yearsAfter: 23,
      },
    ],
    note:
      "No one who knew them believed it; they belonged to different worlds, and the brief could not place them in the same room even once. Against all of that stands the one person who knows, giving the same name for the rest of her life.",
  },
];
