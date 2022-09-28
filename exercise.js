/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let i, j, result = [];
// this lopp increases the index of the letter with which the substring begins
    for (i = 0; i < str.length; i++) {
// this second loop increases the index of the final letter of the substring
        for (j = i + 1; j < str.length + 1; j++) {
// this method extracts a section of a string and returns it as a new string
            result.push(str.slice(i, j));
        }
    }
    return result;

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;