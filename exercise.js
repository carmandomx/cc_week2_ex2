/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    var i, j, result = []; //added the vars that we're gonna use ofor the counter and the new array

    for (i = 0; i < str.length; i++) { //first counter to go through the length of the string
        for (j = i + 1; j < str.length + 1; j++) { //a nested counter that goes alongside the main one
            result.push(str.slice(i, j)); //we slice the array and add it to the result while pushing the length
        }
    }
    return result; //we print the result
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;