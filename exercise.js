/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    
    let substr = []; // empty array to store the resulting substrings
    
    // a for to loop through each letter one by one
    for (let i = 0; i < str.length; i++) {
        // and a nested for loop to also get te following letters
        for (let j = i+1; j < str.length+1; j++) {
            // we slice the string in the range of i & j given by the for loops
            substr.push(str.slice(i,j)); // and we push each slice into the substrings array
        }
    }
    return substr;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;