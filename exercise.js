/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    
    var i, j, result = [];
    
    //Since its not necessary to obtain EVERY permutation possible by the given array
    //a recursive solution its not needed

    //The function will iterate around one letter and keep adding them individually until gets the same size as the original
    //and ignoring the previous ones during the next iterations
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }

    return result;

}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;