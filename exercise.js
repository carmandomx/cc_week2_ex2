/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */    
    const arr = [];

    // First for to iterate in the main string
    for (let i = 0; i < str.length; i++) {
        // The frist letter
        let combinations = str.charAt(i);
        arr.push(combinations);

        // second for to iterate in the substrings
        for (let j = i + 1; j < str.length; j++) {
            // Add combinations 
            combinations += str.charAt(j);
            // Push it to the new array
            arr.push(combinations);
        }
    }
    
    /* Only make changes below this comment */
    // Return array with all combinations
    return arr;
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;