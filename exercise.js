/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let subStr = [];                                    //Create an array to store all possible substrings
    for (let i = 0; i < str.length; i++) {              //Create a loop to iterate through every character from the string
        for (let j = i + 1; j < str.length + 1; j++) {  //Create another loop to iterate through every character next to the character the first loop currently is
            subStr.push(str.substring(i, j));           //Create a substring that starts in the current initial character to the current final character, and make a push to the array
        }                                               //This way, the first substring would only be the first character since it ends before the next character
    }                                                   //And then it goes one character index up, so we would have two characters in the second substring, and so on
    return subStr;                                      //Return the array with all of the possible substrings
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;