/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
  /* Only make changes below this comment */
  let subArrStr = new Array(); //String donde almacenaremos los subarrays.
  let subEstring = new String(); //
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let lastJ = j + 1;
      subEstring = str.substring(i, lastJ);
      subArrStr.push(subEstring);
    }
  }
  return subArrStr;
  /* Only make changes below this comment */
};

console.log(substrGen("abc")); //[ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]
console.log(substrGen("lagann"));
/*       ['l',    'la',    'lag',
        'laga', 'lagan', 'lagann',
        'a',    'ag',    'aga',
        'agan', 'agann', 'g',
        'ga',   'gan',   'gann',
        'a',    'an',    'ann',
        'n',    'nn',    'n'
      ]*/
console.log(substrGen("abcabcbb"));
/*    [ 'a',      'ab',     'abc',     'abca',
        'abcab',  'abcabc', 'abcabcb', 'abcabcbb',
        'b',      'bc',     'bca',     'bcab',
        'bcabc',  'bcabcb', 'bcabcbb', 'c',
        'ca',     'cab',    'cabc',    'cabcb',
        'cabcbb', 'a',      'ab',      'abc',
        'abcb',   'abcbb',  'b',       'bc',
        'bcb',    'bcbb',   'c',       'cb',
        'cbb',    'b',      'bb',      'b'
      ] */

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;
