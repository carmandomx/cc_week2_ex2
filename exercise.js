/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
  /* Only make changes below this comment */
  const substring = [];  //An array is created where our substrings will go
  for (let i = 0; i < str.length; i++) { //I have two iterators, i will advance each time j loops through the entire array
    for (let j = i + 1; j <= str.length; j++) {
      substring.push(str.slice(i, j)); //I push to the array that i initially created a slice that will grow as j progresses.
      //The first iteration will be str.slice(0,1) which is equal to ["a"], for example, the second iteration will be str.slice(0,2) which is equal to ["ab"], and so on until get to the end of the array.
    }
  }
  return substring; //return of the array that we created filled with the values of the iterations.
/* Only make changes below this comment */

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;
