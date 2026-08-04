// Seed data for The Contradiction Engine.
//
// The questions are real points of conflict in Gabriel García Márquez's
// "Chronicle of a Death Foretold." The quotes below are PLACEHOLDER
// paraphrases written for layout purposes — not the published translation.
// Replace each `quote` and `page` with your own citations.

export type Testimony = {
  witness: string; // "Victoria Guzmán"
  role: string; // "the Nasar family cook"
  quote: string; // exact text from the novella
  page: number;
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
        witness: "Victoria Guzmán",
        role: "the Nasar family cook",
        quote:
          "[Placeholder] She was emphatic that it had not rained that morning, nor at any point that whole March — the day was clear, with a breeze off the water.",
        page: 9,
        yearsAfter: 27,
      },
      {
        witness: "The greater part of those interviewed",
        role: "townspeople, in aggregate",
        quote:
          "[Placeholder] Most agreed the weather had been funereal: a low, overcast sky, the smell of still water, and a thin drizzle falling at the hour Santiago Nasar left his house.",
        page: 4,
        yearsAfter: 27,
      },
      {
        witness: "Plácida Linero",
        role: "Santiago Nasar's mother",
        quote:
          "[Placeholder] She remembered only the sound of him going down the stairs in the dark, and could not say what the sky had been doing; it had never occurred to her that it would matter.",
        page: 6,
        yearsAfter: 27,
      },
    ],
    note:
      "The chronicler cannot establish even the weather — the fact least touched by guilt or loyalty. If memory fails here, it warns the reader what the testimony on every harder question is worth.",
  },
  {
    id: "foreknowledge",
    question: "Did Santiago Nasar know he was being hunted?",
    testimonies: [
      {
        witness: "Cristo Bedoya",
        role: "Santiago Nasar's closest friend",
        quote:
          "[Placeholder] He searched the town to warn him and swore that when they had parted an hour earlier, Santiago showed no fear and no suspicion — he was doing sums for the wedding's cost.",
        page: 105,
        yearsAfter: 27,
      },
      {
        witness: "Victoria Guzmán",
        role: "the Nasar family cook",
        quote:
          "[Placeholder] At first she maintained that no one had told her anything before the fact. Years later she admitted she had known, and had said nothing, because in her heart she wanted him dead.",
        page: 13,
        yearsAfter: 27,
      },
      {
        witness: "Divina Flor",
        role: "Victoria Guzmán's daughter",
        quote:
          "[Placeholder] When he took her wrist in the kitchen that morning, she said, his hand felt frozen and stony, like the hand of a dead man — as if the body already knew what the man did not.",
        page: 14,
        yearsAfter: 27,
      },
    ],
    note:
      "A town full of people knew before the victim did. Whether Santiago died ignorant or died pretending decides whether the story is one of innocence or of fatalism — and the record supports both.",
  },
  {
    id: "twins",
    question: "Did the Vicario twins want to be stopped?",
    testimonies: [
      {
        witness: "Clotilde Armenta",
        role: "proprietor of the milk shop",
        quote:
          "[Placeholder] They announced the killing to anyone who came in, she said, and to her they did not look like men resolved on murder — they looked like men pleading for someone to prevent it.",
        page: 57,
        yearsAfter: 27,
      },
      {
        witness: "Colonel Lázaro Aponte",
        role: "mayor of the town",
        quote:
          "[Placeholder] He took their knives away, watched them go, and judged the matter finished — it was butchers' bravado, the kind of talk drunk men use up by saying it aloud.",
        page: 56,
        yearsAfter: 27,
      },
      {
        witness: "Pedro Vicario",
        role: "one of the twins, to the investigating magistrate",
        quote:
          "[Placeholder] There was no power on earth, he declared, that could have stopped them once the matter of honor was set; they killed him openly and would do it again.",
        page: 48,
      },
      {
        witness: "Prudencia Cotes",
        role: "Pablo Vicario's fiancée",
        quote:
          "[Placeholder] She knew what they were going to do and never thought of dissuading them. She would not have married a man who failed to do it.",
        page: 62,
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
        page: 47,
        yearsAfter: 23,
      },
      {
        witness: "The investigating magistrate",
        role: "author of the official brief",
        quote:
          "[Placeholder] He found not a single indication, however improbable, that the two had ever been seen together, and confessed his unease in the margin of the file.",
        page: 99,
      },
      {
        witness: "The chronicler",
        role: "narrator, friend of the dead man",
        quote:
          "[Placeholder] No one who knew them believed it. Santiago was vain, cautious with his prey, and never looked at her; she was the last person a man like him would have chosen.",
        page: 90,
        yearsAfter: 27,
      },
    ],
    note:
      "The entire machinery of the death rests on a single uncorroborated name. The one person who knows has repeated it for decades, and the record can neither convict nor clear the man it killed.",
  },
];
