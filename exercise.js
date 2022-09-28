/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let finalStr = [] //An array for storage the substrings
    
    for (let i = 0; i < str.length; i++) { //A "for" to marked the firts position of the slice 'i'
        for (let j = i+1; j < str.length+1; j++) { //Another "for" to marked the end position of the slice 'j'
            //Push to storage the substring that with obtain with the function "slice" 
            //into the array finalStr
            finalStr.push(str.slice(i, j));
        }
    }
    return finalStr
    /* Only make changes below this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;