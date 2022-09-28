/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */

    const arr = []; //Declare an array to add the substrings and return it.

    for(let i = 0; i < str.length; i++){ //Loop to go through the entire string.

       arr.push(str[i]); //I add the first character of the string as a substring, since each character is a substring.

        for(let j = i + 1; j < str.length; j++){ //Loop to go through string - 1 position.

            arr.push(arr[arr.length - 1] + str[j]); //I search for the last character and add it together with its previous position.
        }
    }

    return arr;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;