/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    // Declare constant to store the length of received str
    const strLength = str.length;
    // Declare the const subStrings as an empty array
    const subStrings = [];
    /*
        Divide the received string in an array of letters.
        Evaluate ever letter of that array
    */
    str.split('').forEach((letter, idx) => {
        // Declare variable and asign it the next id
        let nextIdx = idx + 1;
        // push the letter evaluated in the foreach
        subStrings.push(letter);
        // Declare variable and initiliaze it to the letter evaluated
        let letterSubstring = letter;
        // Repeat the next process while the nextId is smaller than const "strLength"
        while (nextIdx < strLength) {
            // Assign to letter substring its lastvalue and add the letter with the id evaluated
            letterSubstring = letterSubstring + str[nextIdx];
            // push the new substring to the array of substrings
            subStrings.push(letterSubstring);
            // add 1 to the variable nextId to evaluate the next element of the received string
            nextIdx++;
        }
    });
    // Return the array of substrings
    return subStrings;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;