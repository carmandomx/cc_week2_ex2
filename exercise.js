/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
  /* Only make changes below this comment */
  let subArrStr = new Array(); //New string for new value of substring  that we will be create.
  let subEstring = new String(); //New array for storage our new subarrays.

  //first iteration for values of "str" string.
  for (let i = 0; i < str.length; i++) {
    //second iteration for values of "str" string.
    for (let j = i; j < str.length; j++) {
      //We iterate until last j but we need do add +1 for includes all elements of string and assign it a var called "lastJ"
      let lastJ = j + 1;
      //now for each new substring created re-assing the value for a substring of "str" using substring(). For using it we needs first and final position for count; i & lastJ (j + 1)
      subEstring = str.substring(i, lastJ);
      //We push our new string in array "subArrStr".
      subArrStr.push(subEstring);
    }
  }
  //Collect all substring and return them in "subArrStr".
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
