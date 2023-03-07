/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
  const substrings = [];
  /* Only make changes below this comment */

  // Iterate through each character of the string
  for (let i = 0; i < str.length; i++) {
    // Declare the substring variable inside the loop so that it gets reset on every iteration.
    let substring = "";

    // Iterate through each character, starting from the ith position
    for (let j = i; j < str.length; j++) {
      // Add the character to the substring and then push it to the substring array
      substring += str[j];
      substrings.push(substring);
    }
  }
  return substrings;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;
