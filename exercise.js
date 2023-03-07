/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
  /* Only make changes below this comment */
  
  let newArr=str.split('');
  let answer = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j <= newArr.length; j++) {
      answer.push(str.slice(i, j));
    }
  }
  return answer;

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;
