// js/data.js

export const VOWELS_DATA = [
  { id: 'v01', letter: 'অ', kar: '—', cls: null, word: 'অজগৰ', img: 'assets/illustrations/v1.svg' },
  { id: 'v02', letter: 'আ', kar: 'া', cls: null, word: 'আম', img: 'assets/illustrations/v2.svg' },
  { id: 'v03', letter: 'ই', kar: 'ি', cls: null, word: 'ইটা', img: 'assets/illustrations/v3.svg' },
  { id: 'v04', letter: 'ঈ', kar: 'ী', cls: null, word: 'ঈশ্বৰ', img: 'assets/illustrations/v4.svg' },
  { id: 'v05', letter: 'উ', kar: 'ু', cls: null, word: 'উট', img: 'assets/illustrations/v5.svg' },
  { id: 'v06', letter: 'ঊ', kar: 'ূ', cls: null, word: 'ঊণ', img: 'assets/illustrations/v6.svg' },
  { id: 'v07', letter: 'ঋ', kar: 'ৃ', cls: null, word: 'ঋষি', img: 'assets/illustrations/v7.svg' },
  { id: 'v08', letter: 'এ', kar: 'ে', cls: null, word: 'এৰা', img: 'assets/illustrations/v8.svg' },
  { id: 'v09', letter: 'ঐ', kar: 'ৈ', cls: null, word: 'ঐৰাৱত', img: 'assets/illustrations/v9.svg' },
  { id: 'v10', letter: 'ও', kar: 'ো', cls: null, word: 'ওলকপি', img: 'assets/illustrations/v10.svg' },
  { id: 'v11', letter: 'ঔ', kar: 'ৌ', cls: null, word: 'ঔষধি', img: 'assets/illustrations/v11.svg' }
];

export const CONSONANT_GROUPS = [
  { group: 'ক-বৰ্গ', cls: 'কণ্ঠ্য', title: 'কণ্ঠ্য ধ্বনি', letters: [
    { letter: 'ক', word: 'কলম' }, { letter: 'খ', word: 'খৰম' }, { letter: 'গ', word: 'গৰু' }, { letter: 'ঘ', word: 'ঘৰ' }, { letter: 'ঙ', word: 'আঙুৰ' }
  ]},
  { group: 'চ-বৰ্গ', cls: 'তালব্য', title: 'তালব্য ধ্বনি', letters: [
    { letter: 'চ', word: 'চৰাই' }, { letter: 'ছ', word: 'ছাতি' }, { letter: 'জ', word: 'জুই' }, { letter: 'ঝ', word: 'ঝাড়ু' }, { letter: 'ঞ', word: 'চিঞৰ' }
  ]},
  { group: 'ট-বৰ্গ', cls: 'মূৰ্ধন্য', title: 'মূৰ্ধন্য ধ্বনি', letters: [
    { letter: 'ট', word: 'টুপী' }, { letter: 'ঠ', word: 'ঠাকুৰ' }, { letter: 'ড', word: 'ডালিম' }, { letter: 'ঢ', word: 'ঢোল' }, { letter: 'ণ', word: 'হৰিণ' }
  ]},
  { group: 'ত-বৰ্গ', cls: 'দন্ত্য', title: 'দন্ত্য ধ্বনি', letters: [
    { letter: 'ত', word: 'তৰা' }, { letter: 'থ', word: 'থালি' }, { letter: 'দ', word: 'দৰ্জা' }, { letter: 'ধ', word: 'ধনু' }, { letter: 'ন', word: 'নদী' }
  ]},
  { group: 'প-বৰ্গ', cls: 'ওষ্ঠ্য', title: 'ওষ্ঠ্য ধ্বনি', letters: [
    { letter: 'প', word: 'পখিলা' }, { letter: 'ফ', word: 'ফুল' }, { letter: 'ব', word: 'বল' }, { letter: 'ভ', word: 'ভাত' }, { letter: 'ম', word: 'মাছ' }
  ]},
  { group: 'অন্তঃস্থ বৰ্গ', cls: 'অন্তঃস্থ', title: 'অন্তঃস্থ ধ্বনি', letters: [
    { letter: 'য', word: 'যঁতৰ' }, { letter: 'ৰ', word: 'ৰেল' }, { letter: 'ল', word: 'লতা' }, { letter: 'ৱ', word: 'ৱিকিপিডিয়া' }
  ]},
  { group: 'উষ্ম বৰ্গ', cls: 'উষ্ম', title: 'উষ্ম ধ্বনি', letters: [
    { letter: 'শ', word: 'শিয়াল' }, { letter: 'ষ', word: 'ষাড়' }, { letter: 'স', word: 'সিংহ' }, { letter: 'হ', word: 'হাঁহ' }
  ]},
  { group: 'অতিৰিক্ত বৰ্গ', cls: 'অন্যান্য', title: 'অন্যান্য ধ্বনি', letters: [
    { letter: 'ক্ষ', word: 'ক্ষমা' }, { letter: 'ড়', word: 'পাহাৰ' }, { letter: 'ঢ়', word: 'গাঢ়' }, { letter: 'য়', word: 'সময়' },
    { letter: 'ৎ', word: 'শৰৎ' }, { letter: 'ং', word: 'সিংহ' }, { letter: 'ঃ', word: 'দুঃখ' }, { letter: 'ঁ', word: 'বাঁহ' }
  ]}
];

// Your 1-100 Numbers Logic
const BN_DIGIT = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };
export function toAssameseNumeral(n) {
  return String(n).split('').map(d => BN_DIGIT[d] ?? d).join('');
}

export const NUMBERS_DATA = [
  { n: 1, w: "এক", p: "ek" }, { n: 2, w: "দুই", p: "dui" }, { n: 3, w: "তিনি", p: "tini" }, { n: 4, w: "চাৰি", p: "sari" }, { n: 5, w: "পাঁচ", p: "pas" },
  { n: 6, w: "ছয়", p: "soy" }, { n: 7, w: "সাত", p: "xat" }, { n: 8, w: "আঠ", p: "ath" }, { n: 9, w: "ন", p: "no" }, { n: 10, w: "দহ", p: "doh" },
  { n: 11, w: "এঘাৰ", p: "eghar" }, { n: 12, w: "বাৰ", p: "bar" }, { n: 13, w: "তেৰ", p: "ter" }, { n: 14, w: "চৈধ্য", p: "soiddho" }, { n: 15, w: "পোন্ধৰ", p: "pundhor" },
  { n: 16, w: "ষোল্ল", p: "xollo" }, { n: 17, w: "সোতৰ", p: "xotor" }, { n: 18, w: "ওঠৰ", p: "othor" }, { n: 19, w: "উনৈশ", p: "unoi" }, { n: 20, w: "বিছ", p: "bis" },
  { n: 21, w: "একৈশ", p: "ekoi" }, { n: 22, w: "বাইশ", p: "bai" }, { n: 23, w: "তেইশ", p: "tei" }, { n: 24, w: "চৌবিশ", p: "soubi" }, { n: 25, w: "পঁচিছ", p: "posi" },
  { n: 26, w: "ছাব্বিশ", p: "sabbi" }, { n: 27, w: "সাতাইশ", p: "xatai" }, { n: 28, w: "আঠাইশ", p: "athai" }, { n: 29, w: "উনত্ৰিশ", p: "untri" }, { n: 30, w: "ত্ৰিশ", p: "tri" },
  { n: 31, w: "একত্ৰিশ", p: "ektri" }, { n: 32, w: "বত্ৰিশ", p: "botri" }, { n: 33, w: "তেন্ত্ৰিশ", p: "tentri" }, { n: 34, w: "চৌত্ৰিশ", p: "soutri" }, { n: 35, w: "পঁয়ত্ৰিশ", p: "poytri" },
  { n: 36, w: "ছাত্ৰিশ", p: "satri" }, { n: 37, w: "সাতত্ৰিশ", p: "xattri" }, { n: 38, w: "আঠত্ৰিশ", p: "athtri" }, { n: 39, w: "উনচল্লিশ", p: "unsolli" }, { n: 40, w: "চল্লিশ", p: "solli" },
  { n: 41, w: "একচল্লিশ", p: "eksolli" }, { n: 42, w: "বিয়াল্লিশ", p: "biyalli" }, { n: 43, w: "তেন্তাল্লিশ", p: "tentalli" }, { n: 44, w: "চৌৱাল্লিশ", p: "souwalli" }, { n: 45, w: "পঞ্চাল্লিশ", p: "ponsalli" },
  { n: 46, w: "ছিয়াল্লিশ", p: "siyalli" }, { n: 47, w: "সাতচল্লিশ", p: "xatsolli" }, { n: 48, w: "আঠচল্লিশ", p: "athsolli" }, { n: 49, w: "উনপঞ্চাশ", p: "unponsax" }, { n: 50, w: "পঞ্চাশ", p: "ponsax" },
  { n: 51, w: "একপন্ন", p: "ekponno" }, { n: 52, w: "বাৱন্ন", p: "bawonno" }, { n: 53, w: "তিপন্ন", p: "tiponno" }, { n: 54, w: "চৌৱন্ন", p: "souwonno" }, { n: 55, w: "পঞ্চপন্ন", p: "ponsoponno" },
  { n: 56, w: "ছাপ্পন্ন", p: "sapponno" }, { n: 57, w: "সাতপন্ন", p: "xatponno" }, { n: 58, w: "আঠপন্ন", p: "athponno" }, { n: 59, w: "উনষাঠ", p: "unxath" }, { n: 60, w: "ষাট", p: "xath" },
  { n: 61, w: "একষট্টি", p: "ekxotti" }, { n: 62, w: "বাষট্টি", p: "baxotti" }, { n: 63, w: "তেষট্টি", p: "texotti" }, { n: 64, w: "চৌষট্টি", p: "souxotti" }, { n: 65, w: "পঁয়ষট্টি", p: "poyxotti" },
  { n: 66, w: "ছেষট্টি", p: "sexotti" }, { n: 67, w: "সাতষট্টি", p: "xatxotti" }, { n: 68, w: "আঠষট্টি", p: "athxotti" }, { n: 69, w: "উনসত্তৰ", p: "unxottor" }, { n: 70, w: "সত্তৰ", p: "xottor" },
  { n: 71, w: "একাতৰ", p: "ekator" }, { n: 72, w: "বাসত্তৰ", p: "bahator" }, { n: 73, w: "তেসত্তৰ", p: "tehator" }, { n: 74, w: "চৌসত্তৰ", p: "souhator" }, { n: 75, w: "পসত্তৰ", p: "poxator" },
  { n: 76, w: "ছিয়াতৰ", p: "siyator" }, { n: 77, w: "সাতাতৰ", p: "xatator" }, { n: 78, w: "আঠাতৰ", p: "athator" }, { n: 79, w: "উনআশী", p: "unaxi" }, { n: 80, w: "আশী", p: "axi" },
  { n: 81, w: "একাশী", p: "ekaxi" }, { n: 82, w: "বিৰাশী", p: "biraxi" }, { n: 83, w: "তিৰাশী", p: "tiraxi" }, { n: 84, w: "চৌৰাশী", p: "souraxi" }, { n: 85, w: "পঁচাশী", p: "poxaxi" },
  { n: 86, w: "ছিয়াশী", p: "siyaxi" }, { n: 87, w: "সাতাশী", p: "xataxi" }, { n: 88, w: "আঠাশী", p: "athaxi" }, { n: 89, w: "উননব্বৈ", p: "unnobboi" }, { n: 90, w: "নব্বৈ", p: "nobboi" },
  { n: 91, w: "একানব্বৈ", p: "ekanobboi" }, { n: 92, w: "বাৰানব্বৈ", p: "baranobboi" }, { n: 93, w: "তেৰানব্বৈ", p: "teranobboi" }, { n: 94, w: "চৌৰানব্বৈ", p: "souranobboi" }, { n: 95, w: "পঁচানব্বৈ", p: "poxanobboi" },
  { n: 96, w: "ছিয়ানব্বৈ", p: "siyanobboi" }, { n: 97, w: "সাতানব্বৈ", p: "xatanobboi" }, { n: 98, w: "আঠানব্বৈ", p: "athanobboi" }, { n: 99, w: "নিৰানব্বৈ", p: "niranobboi" }, { n: 100, w: "এশ", p: "ex" }
].map(x => ({ ...x, numeral: toAssameseNumeral(x.n) }));

export const ADMIN_CREDS = {
  user: 'Rumashree',
  pass: 'incompletejourney@k'
};
