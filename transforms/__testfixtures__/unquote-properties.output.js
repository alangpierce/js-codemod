var x = {
  quotedProp: 1,
  unquotedProp: 2,
  'quoted-prop': 3,
  method() { return 4; },
  'quotedMethod'() { return 4; },
  _quotedProp: 5,
  $quotedProp: 6,
  ĦĔĽĻŎ: 7,
  'quoted prop': 8,
  class: 9,
  1: 10,
  2: 11,
  [Math.random()]() { return 'oh no'; },
  [Math.random()]: 13,
  ['quoted computed prop']: 14,
};