import { pickRandom } from "./arrays";

interface ITimezoneOffset {
  locations: ILocation[];
  offsetHours: number;
}

interface ILocation {
  location: string;
  language: Language;
  link?: string;
}

interface ILocationPhrase {
  name: string;
  phrase: string;
  link?: string;
}

enum Language {
  Unknown,
  English,
  French,
  HaitianCreole,
  Samoan,
  Spanish,
}

const languagePhraseMapping = {
  [Language.Unknown]: ["Cheers!"],
  [Language.English]: ["Cheers!", "To Health!", "Let's Drink!"],
  [Language.French]: ["À votre santé !", "Santé !"],
  [Language.HaitianCreole]: ["Ochan!", "Sante!", "Onè Respè!"],
  [Language.Samoan]: ["Manuia!"],
  [Language.Spanish]: ["Salud!"],
};

/**
 * Link is optional. If not provided, a google search (?q=...) link will be generated.
 *
 * Offsets and locations are pulled from this article:
 *  https://en.wikipedia.org/wiki/List_of_UTC_offsets
 */
const offsetsAndLocations: ITimezoneOffset[] = [
  {
    locations: [
      { location: "Baker Island", language: Language.Unknown },
      { location: "Howland Island", language: Language.Unknown },
    ],
    offsetHours: -12,
  },
  {
    locations: [
      { location: "American Samoa", language: Language.Samoan },
      { location: "Jarvis Island", language: Language.English },
      { location: "Kingman Reef", language: Language.English },
      { location: "the Midway Atoll", language: Language.English },
      {
        location: "the Palmyra Atoll",
        language: Language.English,
        link: "https://en.wikipedia.org/wiki/Palmyra_Atoll",
      },
    ],
    offsetHours: -11,
  },
  {
    locations: [
      { location: "French Polynesia", language: Language.French },
      { location: "the Cook Islands", language: Language.English },
      { location: "the Aleutian Islands", language: Language.English },
      { location: "Hawaii", language: Language.English },
      { location: "the Johnston Atoll", language: Language.English },
    ],
    offsetHours: -10,
  },
  {
    locations: [
      { location: "the Gambier Islands", language: Language.French },
      { location: "Alaska", language: Language.English },
    ],
    offsetHours: -9,
  },
  {
    locations: [
      { location: "Los Angeles", language: Language.English },
      { location: "San Francisco", language: Language.English },
      { location: "Portland", language: Language.English },
      { location: "Tijuana", language: Language.Spanish },
    ],
    offsetHours: -8,
  },
  {
    locations: [
      { location: "Alberta", language: Language.English },
      { location: "the Northwest Territories", language: Language.English },
      { location: "Yukon", language: Language.English },
      { location: "Baja California Sur", language: Language.Spanish },
      { location: "Chihuahua", language: Language.Spanish },
      { location: "Nayarit", language: Language.Spanish },
      { location: "Arizona", language: Language.English },
      { location: "Colorado", language: Language.English },
      { location: "Montana", language: Language.English },
      { location: "New Mexico", language: Language.English },
      { location: "Utah", language: Language.English },
      { location: "Wyoming", language: Language.English },
    ],
    offsetHours: -7,
  },
  {
    locations: [
      { location: "Belize", language: Language.English },
      { location: "Manitoba", language: Language.English },
      { location: "Easter Island", language: Language.Unknown },
      { location: "Costa Rica", language: Language.Spanish },
      { location: "Galápagos Islands", language: Language.Spanish },
      { location: "El Salvador", language: Language.Spanish },
      { location: "Guatemala", language: Language.Spanish },
      { location: "Honduras", language: Language.Spanish },
      { location: "Nicaragua", language: Language.Spanish },
      { location: "Alabama", language: Language.English },
      { location: "Arkansas", language: Language.English },
      { location: "Illinois", language: Language.English },
      { location: "Iowa", language: Language.English },
      { location: "Louisiana", language: Language.English },
      { location: "Minnesota", language: Language.English },
      { location: "Mississippi", language: Language.English },
      { location: "Oklahoma", language: Language.English },
      { location: "Wisconsin", language: Language.English },
    ],
    offsetHours: -6,
  },
  {
    locations: [
      { location: "Bahamas", language: Language.English },
      { location: "Colombia", language: Language.Spanish },
      { location: "Cuba", language: Language.Spanish },
      { location: "Quito", language: Language.Spanish },
      { location: "Haiti", language: Language.HaitianCreole },
    ],
    offsetHours: -5,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: -4,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: -3,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: -2,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: -1,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 0,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 1,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 2,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 3,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 4,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 5,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 6,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 7,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 8,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 9,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 10,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 11,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 12,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 13,
  },
  {
    locations: [{ location: "Los Angeles", language: Language.English }],
    offsetHours: 14,
  },
];

export default function getLocationAndPhrase(): ILocationPhrase {
  const utcHours = new Date().getUTCHours();
  const offsets = offsetsAndLocations.filter(
    (o) => utcHours + o.offsetHours === 17 || utcHours + o.offsetHours === -7
  );

  // On the off-chance that we cannot find a timezone where it's 5pm, return something.
  if (offsets.length === 0) {
    return {
      name: "???",
      phrase: pickRandom(languagePhraseMapping[Language.Unknown]),
    };
  }

  // Flatten list of timezone offset city names.
  const locations: ILocation[] = offsets.flatMap(
    (element) => element.locations
  );
  const selectedLocation: ILocation = pickRandom(locations);

  return {
    name: selectedLocation.location,
    phrase: pickRandom(languagePhraseMapping[selectedLocation.language]),
    link: selectedLocation.link,
  };
}
