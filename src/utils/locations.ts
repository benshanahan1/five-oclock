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
  Afrikaans,
  Arabic,
  Czech,
  Dutch,
  English,
  French,
  German,
  Greek,
  HaitianCreole,
  Hawaiian,
  Hungarian,
  Icelandic,
  IrishGaelic,
  Italian,
  Japanese,
  Korean,
  Lithuanian,
  Mandarin,
  Moldovan,
  Polish,
  Portugese,
  Russian,
  Samoan,
  Shqip,
  Spanish,
  Swedish,
  Vietnamese,
  Welsh,
  Yiddish,
}

/** Some references:
 *    - https://www.todaytranslations.com/news/20-ways-to-say-cheers/
 */
const languagePhraseMapping = {
  [Language.Unknown]: ["Cheers", "To health", "Let's drink"],
  [Language.Afrikaans]: ["Gesondheid"],
  [Language.Arabic]: ["في صحتك"],
  [Language.Czech]: ["Na zdravi"],
  [Language.Dutch]: ["Proost"],
  [Language.English]: ["Cheers", "To health", "Let's drink"],
  [Language.French]: ["À votre santé", "Santé"],
  [Language.German]: ["Prost", "Zum wohl"],
  [Language.Greek]: ["ΥΓΕΙΑ"],
  [Language.HaitianCreole]: ["Ochan", "Sante", "Onè Respè"],
  [Language.Hawaiian]: ["Okole maluna"],
  [Language.Hungarian]: ["Egészségedre"],
  [Language.Icelandic]: ["Skál"],
  [Language.IrishGaelic]: ["Sláinte"],
  [Language.Italian]: ["Salute", "Cin cin"],
  [Language.Japanese]: ["乾杯", "Kanpai"],
  [Language.Korean]: ["건배"],
  [Language.Lithuanian]: ["į sveikatą"],
  [Language.Mandarin]: ["干杯"],
  [Language.Moldovan]: ["Noroc"],
  [Language.Polish]: ["Na zdrowie"],
  [Language.Portugese]: ["Saúde"],
  [Language.Russian]: ["Будем здоровы", "Ha здоровье"],
  [Language.Samoan]: ["Manuia"],
  [Language.Shqip]: ["Gëzuar", "Brohoritje", "Per shendetin tend"],
  [Language.Spanish]: ["Salud"],
  [Language.Swedish]: ["Skål"],
  [Language.Vietnamese]: ["Một hai ba, dô"],
  [Language.Welsh]: ["Iechyd da"],
  [Language.Yiddish]: ["Sei gesund"],
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
      { location: "Hawaii", language: Language.Hawaiian },
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
      { location: "Seattle", language: Language.English },
      { location: "Vancouver", language: Language.English },
      { location: "Portland", language: Language.English },
      { location: "Tijuana", language: Language.Spanish },
      { location: "Baja California", language: Language.Spanish },
      { location: "the Pitcairn Islands", language: Language.English },
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
      { location: "Curaçao", language: Language.Dutch },
      { location: "New Brunswick", language: Language.English },
      { location: "Newfoundland", language: Language.English },
      { location: "Nova Scotia", language: Language.English },
      { location: "Prince Edward Island", language: Language.English },
      { location: "Dominica", language: Language.English },
      { location: "Dominican Republic", language: Language.Spanish },
      { location: "Saint Barthélemy", language: Language.French },
      { location: "Guadeloupe", language: Language.French },
      { location: "Martinique", language: Language.French },
    ],
    offsetHours: -4,
  },
  {
    locations: [
      { location: "Argentina", language: Language.Spanish },
      { location: "French Guiana", language: Language.French },
      { location: "Saint Pierre and Miquelon", language: Language.French },
      { location: "Suriname", language: Language.Dutch },
      { location: "Falkland Islands", language: Language.English },
      { location: "Uruguay", language: Language.Spanish },
    ],
    offsetHours: -3,
  },
  {
    locations: [
      { location: "Fernando de Noronha", language: Language.Portugese },
      {
        location: "South Georgia and the South Sandwich islands",
        language: Language.English,
      },
    ],
    offsetHours: -2,
  },
  {
    locations: [
      { location: "Cape Verde", language: Language.Portugese },
      { location: "the Azores islands", language: Language.Portugese },
    ],
    offsetHours: -1,
  },
  {
    locations: [
      { location: "Burkina Faso", language: Language.French },
      { location: "Gambia", language: Language.English },
      { location: "Ghana", language: Language.English },
      { location: "Guinea", language: Language.French },
      { location: "Iceland", language: Language.Icelandic },
      { location: "Ireland", language: Language.IrishGaelic },
      { location: "Mali", language: Language.Unknown },
      { location: "Mauritania", language: Language.Arabic },
      { location: "Portugal", language: Language.Portugese },
      { location: "Senegal", language: Language.French },
      { location: "Sierra Leone", language: Language.English },
      { location: "United Kingdom", language: Language.English },
    ],
    offsetHours: 0,
  },
  {
    locations: [
      { location: "Albania", language: Language.Shqip },
      { location: "Austria", language: Language.German },
      { location: "Belgium", language: Language.Dutch },
      { location: "Chad", language: Language.French },
      { location: "France", language: Language.French },
      { location: "Germany", language: Language.German },
      { location: "Hungary", language: Language.Hungarian },
      { location: "Italy", language: Language.Italian },
      { location: "Kosovo", language: Language.Unknown },
      { location: "Luxembourg", language: Language.Unknown },
      { location: "Malta", language: Language.Unknown },
      { location: "Monaco", language: Language.Unknown },
      { location: "Serbia", language: Language.Unknown },
      { location: "Poland", language: Language.Polish },
      { location: "Vatican City", language: Language.Unknown },
      { location: "Sweden", language: Language.Swedish },
      { location: "Spain", language: Language.Spanish },
      { location: "Netherlands", language: Language.Unknown },
      { location: "Nigeria", language: Language.Unknown },
    ],
    offsetHours: 1,
  },
  {
    locations: [
      { location: "Botswana", language: Language.Afrikaans },
      { location: "Bulgaria", language: Language.Unknown },
      { location: "Cyprus", language: Language.Unknown },
      { location: "Egypt", language: Language.Arabic },
      { location: "Estonia", language: Language.Unknown },
      { location: "Finland", language: Language.Unknown },
      { location: "Greece", language: Language.Greek },
      { location: "Israel", language: Language.Unknown },
      { location: "Latvia", language: Language.Unknown },
      { location: "Lebanon", language: Language.Arabic },
      { location: "Libya", language: Language.Unknown },
      { location: "Romania", language: Language.Unknown },
      { location: "Rwanda", language: Language.Unknown },
      { location: "Sudan", language: Language.Unknown },
      { location: "South Sudan", language: Language.Unknown },
      { location: "Syria", language: Language.Arabic },
      { location: "Zimbabwe", language: Language.Afrikaans },
    ],
    offsetHours: 2,
  },
  {
    locations: [
      { location: "Bahrain", language: Language.Arabic },
      { location: "Belarus", language: Language.Unknown },
      { location: "Comoros", language: Language.Unknown },
      { location: "Djibouti", language: Language.Arabic },
      { location: "Eritrea", language: Language.Unknown },
      { location: "Ethiopia", language: Language.Unknown },
      { location: "Iraq", language: Language.Unknown },
      { location: "Jordan", language: Language.Arabic },
      { location: "Kenya", language: Language.Unknown },
      { location: "Kuwait", language: Language.Arabic },
      { location: "Madagascar", language: Language.Unknown },
      { location: "Qatar", language: Language.Arabic },
      { location: "Ukraine", language: Language.Unknown },
      { location: "Turkey", language: Language.Unknown },
      { location: "Yemen", language: Language.Arabic },
    ],
    offsetHours: 3,
  },
  {
    locations: [
      { location: "Armenia", language: Language.Unknown },
      { location: "Azerbaijan", language: Language.Unknown },
      { location: "Mauritius", language: Language.English },
      { location: "Oman", language: Language.Arabic },
      { location: "Seychelles", language: Language.Unknown },
      { location: "United Arab Emirates", language: Language.Arabic },
    ],
    offsetHours: 4,
  },
  {
    locations: [
      { location: "the Maldives", language: Language.Unknown },
      { location: "Pakistan", language: Language.Unknown },
      { location: "Ural Federal District, Russia", language: Language.Russian },
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
      { location: "Japan", language: Language.Japanese },
      { location: "North Korea", language: Language.Korean },
      { location: "Palau", language: Language.Unknown },
      { location: "South Korea", language: Language.Korean },
    ],
    offsetHours: 9,
  },
  {
    locations: [
      { location: "Queensland", language: Language.English },
      { location: "Tasmania", language: Language.English },
      { location: "Victoria", language: Language.English },
      { location: "Guam", language: Language.English },
      { location: "Northern Mariana Islands", language: Language.English },
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
      name: "Whoops 😅",
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
