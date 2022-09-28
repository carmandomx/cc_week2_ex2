/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
  /* Only make changes below this comment */
  //Create a new variable for storage the operations and for return it as a result
  let result = [];

  //Create two for loops for iterate the string with two pointers
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      //Use slice method for cut a part of the string and the push method for add that part to the variable result
      result.push(str.slice(i, j));
    }
  }
  return result;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;
