/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */

    //Create an empty array to store all of the possible substrings from str.
     let str1 = [];
    //Create a loop to go through every character from the string(str).
     for (let i = 0; i < str.length; i++) {

        //Create a loop to go through every character from the string(str), starting from the index position 1 of the str. 
         for (let j = i + 1; j < str.length + 1; j++) {

             // this method extracts sections of the string and then add those sections to the new array str1.
             str1.push(str.slice(i, j));
         }
     }
    return str1;
     /* Only make changes below this comment */
}
   
console.log(substrGen('AZAZA'));



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;