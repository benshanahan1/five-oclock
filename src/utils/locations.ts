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
  Vietnamese,
}

const languagePhraseMapping = {
  [Language.Unknown]: ["Cheers!"],
  [Language.English]: ["Cheers!", "To health!", "Let's drink!"],
  [Language.French]: ["À votre santé !", "Santé !"],
  [Language.HaitianCreole]: ["Ochan!", "Sante!", "Onè Respè!"],
  [Language.Samoan]: ["Manuia!"],
  [Language.Spanish]: ["Salud!"],
  [Language.Vietnamese]: ["Một hai ba, dô!"],
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
    locations: [
      { location: "Antigua and Barbuda", language: Language.English },
      { location: "Barbados", language: Language.English },
      { location: "Bolivia", language: Language.Spanish },
      { location: "Grenada", language: Language.Spanish },
      { location: "Paraguay", language: Language.Spanish },
      { location: "Puerto Rico", language: Language.English },
      { location: "U.S. Virgin Islands", language: Language.English },
      { location: "Venezuela", language: Language.Spanish },
      { location: "Curaçao", language: Language.Unknown },
      { location: "New Brunswick", language: Language.English },
      { location: "Newfoundland", language: Language.English },
      { location: "Nova Scotia", language: Language.English },
      { location: "Prince Edward Island", language: Language.English },
      { location: "Dominica", language: Language.English },
      { location: "Dominican Republic", language: Language.English },
      { location: "Saint Barthélemy", language: Language.French },
      { location: "Guadeloupe", language: Language.French },
      { location: "Martinique", language: Language.French },
    ],
    offsetHours: -4,
  },
  {
    locations: [
      { location: "Argentina", language: Language.Unknown },
      { location: "French Guiana", language: Language.French },
      { location: "Saint Pierre and Miquelon", language: Language.French },
      { location: "Suriname", language: Language.Unknown },
      { location: "Falkland Islands", language: Language.Unknown },
      { location: "Uruguay", language: Language.Unknown },
    ],
    offsetHours: -3,
  },
  {
    locations: [
      { location: "Fernando de Noronha", language: Language.Unknown },
      {
        location: "South Georgia and the South Sandwich islands",
        language: Language.Unknown,
      },
    ],
    offsetHours: -2,
  },
  {
    locations: [
      { location: "Cape Verde", language: Language.Unknown },
      { location: "the Azores islands", language: Language.Unknown },
    ],
    offsetHours: -1,
  },
  {
    locations: [
      { location: "Burkina Faso", language: Language.Unknown },
      { location: "Gambia", language: Language.Unknown },
      { location: "Ghana", language: Language.Unknown },
      { location: "Guinea", language: Language.Unknown },
      { location: "Iceland", language: Language.Unknown },
      { location: "Ireland", language: Language.Unknown },
      { location: "Mali", language: Language.Unknown },
      { location: "Mauritania", language: Language.Unknown },
      { location: "Portugal", language: Language.Unknown },
      { location: "Senegal", language: Language.Unknown },
      { location: "Sierra Leone", language: Language.Unknown },
      { location: "United Kingdom", language: Language.Unknown },
    ],
    offsetHours: 0,
  },
  {
    locations: [
      { location: "Albania", language: Language.Unknown },
      { location: "Austria", language: Language.Unknown },
      { location: "Belgium", language: Language.Unknown },
      { location: "Chad", language: Language.Unknown },
      { location: "France", language: Language.Unknown },
      { location: "Germany", language: Language.Unknown },
      { location: "Hungary", language: Language.Unknown },
      { location: "Italy", language: Language.Unknown },
      { location: "Kosovo", language: Language.Unknown },
      { location: "Luxembourg", language: Language.Unknown },
      { location: "Malta", language: Language.Unknown },
      { location: "Monaco", language: Language.Unknown },
      { location: "Serbia", language: Language.Unknown },
      { location: "Poland", language: Language.Unknown },
      { location: "Vatican City", language: Language.Unknown },
      { location: "Sweden", language: Language.Unknown },
      { location: "Spain", language: Language.Unknown },
      { location: "Netherlands", language: Language.Unknown },
      { location: "Nigeria", language: Language.Unknown },
    ],
    offsetHours: 1,
  },
  {
    locations: [
      { location: "Botswana", language: Language.Unknown },
      { location: "Bulgaria", language: Language.Unknown },
      { location: "Cyprus", language: Language.Unknown },
      { location: "Egypt", language: Language.Unknown },
      { location: "Estonia", language: Language.Unknown },
      { location: "Finland", language: Language.Unknown },
      { location: "Greece", language: Language.Unknown },
      { location: "Israel", language: Language.Unknown },
      { location: "Latvia", language: Language.Unknown },
      { location: "Lebanon", language: Language.Unknown },
      { location: "Libya", language: Language.Unknown },
      { location: "Libya", language: Language.Unknown },
      { location: "Romania", language: Language.Unknown },
      { location: "Rwanda", language: Language.Unknown },
      { location: "Sudan", language: Language.Unknown },
      { location: "South Sudan", language: Language.Unknown },
      { location: "Syria", language: Language.Unknown },
      { location: "Zimbabwe", language: Language.Unknown },
    ],
    offsetHours: 2,
  },
  {
    locations: [
      { location: "Bahrain", language: Language.Unknown },
      { location: "Belarus", language: Language.Unknown },
      { location: "Comoros", language: Language.Unknown },
      { location: "Djibouti", language: Language.Unknown },
      { location: "Eritrea", language: Language.Unknown },
      { location: "Ethiopia", language: Language.Unknown },
      { location: "Iraq", language: Language.Unknown },
      { location: "Jordan", language: Language.Unknown },
      { location: "Kenya", language: Language.Unknown },
      { location: "Kuwait", language: Language.Unknown },
      { location: "Madagascar", language: Language.Unknown },
      { location: "Qatar", language: Language.Unknown },
      { location: "Ukraine", language: Language.Unknown },
      { location: "Turkey", language: Language.Unknown },
      { location: "Yemen", language: Language.Unknown },
    ],
    offsetHours: 3,
  },
  {
    locations: [
      { location: "Armenia", language: Language.Unknown },
      { location: "Azerbaijan", language: Language.Unknown },
      { location: "Mauritius", language: Language.Unknown },
      { location: "Oman", language: Language.Unknown },
      { location: "Seychelles", language: Language.Unknown },
      { location: "United Arab Emirates", language: Language.Unknown },
    ],
    offsetHours: 4,
  },
  {
    locations: [
      { location: "the Maldives", language: Language.Unknown },
      { location: "Pakistan", language: Language.Unknown },
      { location: "Ural Federal District, Russia", language: Language.Unknown },
      { location: "Tajikistan", language: Language.Unknown },
      { location: "Turkmenistan", language: Language.Unknown },
      { location: "Uzbekistan", language: Language.Unknown },
    ],
    offsetHours: 5,
  },
  {
    locations: [
      { location: "Bangladesh", language: Language.Unknown },
      { location: "Bhutan", language: Language.Unknown },
      { location: "Kyrgyzstan", language: Language.Unknown },
    ],
    offsetHours: 6,
  },
  {
    locations: [
      { location: "Christmas Island", language: Language.Unknown },
      { location: "Cambodia", language: Language.Unknown },
      { location: "Java", language: Language.Unknown },
      { location: "Sumatra", language: Language.Unknown },
      { location: "Laos", language: Language.Unknown },
      { location: "Thailand", language: Language.Unknown },
      { location: "Vietnam", language: Language.Vietnamese },
    ],
    offsetHours: 7,
  },
  {
    locations: [
      { location: "Brunei", language: Language.Unknown },
      { location: "China", language: Language.Unknown },
      { location: "Hong Kong", language: Language.Unknown },
      { location: "Macau", language: Language.Unknown },
      { location: "Malaysia", language: Language.Unknown },
      { location: "Phillipines", language: Language.Unknown },
      { location: "Singapore", language: Language.Unknown },
      { location: "Taiwan", language: Language.Unknown },
    ],
    offsetHours: 8,
  },
  {
    locations: [
      { location: "East Timor", language: Language.Unknown },
      { location: "Papua", language: Language.Unknown },
      { location: "Japan", language: Language.Unknown },
      { location: "North Korea", language: Language.Unknown },
      { location: "Palau", language: Language.Unknown },
      { location: "South Korea", language: Language.Unknown },
    ],
    offsetHours: 9,
  },
  {
    locations: [
      { location: "Undefined offset:10", language: Language.English },
    ],
    offsetHours: 10,
  },
  {
    locations: [
      { location: "Norfolk Island", language: Language.Unknown },
      { location: "New Caledonia", language: Language.Unknown },
      { location: "Solomon Islands", language: Language.Unknown },
      { location: "Vanuatu", language: Language.Unknown },
    ],
    offsetHours: 11,
  },
  {
    locations: [
      { location: "Fiji", language: Language.Unknown },
      { location: "the Gilbert Islands", language: Language.Unknown },
      { location: "the Marshall Islands", language: Language.Unknown },
      { location: "Nauru", language: Language.Unknown },
      { location: "Tuvalu", language: Language.Unknown },
    ],
    offsetHours: 12,
  },
  {
    locations: [
      { location: "the Phoenix Islands", language: Language.Unknown },
      { location: "Tokelau", language: Language.Unknown },
      { location: "Samoa", language: Language.Samoan },
      { location: "Tonga", language: Language.Unknown },
    ],
    offsetHours: 13,
  },
  {
    locations: [{ location: "the Line Islands", language: Language.Unknown }],
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
