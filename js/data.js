// js/data.js

export const VOWELS_DATA = [
  { id:'v01', letter:'অ', kar:'—', cls:null, word:'অজগৰ', img:'assets/illustrations/v1.svg' },
  { id:'v02', letter:'আ', kar:'া', cls:null, word:'আম', img:'assets/illustrations/v2.svg' },
  // ... include all 11 from your original list
];

export const CONSONANT_GROUPS = [
  { group:'ক-বৰ্গ', cls:'কণ্ঠ্য', title:'কণ্ঠ্য ধ্বনি', letters:[
    {letter:'ক', word:'কলম'}, {letter:'খ', word:'খৰগোশ'}, {letter:'গ', word:'গৰু'}, {letter:'ঘ', word:'ঘৰ'}, {letter:'ঙ', word:'ঙনি'}
  ]},
  // ... include all 8 groups (41 letters)
];

// Your 1-100 Numbers Logic
const BN_DIGIT = {'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯'};
export function toAssameseNumeral(n) {
  return String(n).split('').map(d => BN_DIGIT[d] ?? d).join('');
}

export const NUMBERS_DATA = [
  {n:1, w:"এক", p:"ekh"}, {n:2, w:"দুই", p:"dui"}, {n:3, w:"তিন", p:"tini"},
  // ... include the full list of 100 numbers you provided
].map(x => ({...x, numeral: toAssameseNumeral(x.n)}));

export const ADMIN_CREDS = {
    user: 'Rumashree',
    pass: 'incompletejourney@k'
};
