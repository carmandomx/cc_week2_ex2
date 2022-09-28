/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
  /* Only make changes below this comment */

  /* Declaring my solution array */
  const solution = [];

  /* for loop that will go through the whole string */
  for (let i = 0; i < str.length; i++) {
    const e = str[i];

    /* Declaring substring. It is what will be pushed to solution */
    let substring = '';
    /* Concatenating the next character to substring and pushing it to solution[] */
    substring += e;
    solution.push(substring);

    /* for loop that will go through all characters to the right(starts at i + 1) */
    for (let j = i + 1; j < str.length; j++) {
      const e2 = str[j];

      /* Concatenating the next character to substring and pushing it to solution[] */
      substring += e2;
      solution.push(substring);
    }
  }

  /* return with solution[] containing all substrings */
  return solution;

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;
