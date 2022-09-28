/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */

    let substr = []; // Result string
    let temp = []; // Temporal string to save the subtrings

            // Starting point
            for (let i = 0; i < str.length; i++) {

                // Ending point
                for (let j = i; j < str.length; j++) {
                    
                    // starting point to ending point
                    for (let k = i; k <= j; k++) { // Gets the elements in the str one by one
                        temp += str[k]; // Concats them in a temp variable
                    }

                    // The concat() method is used to merge two or more arrays
                    substr = substr.concat(temp); // Saves the subtrings in the result variable
                    temp = []; // cleans the temp variable to get a new string
                }
            }

            return substr; // Returns te awnser
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;