/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    debugger;
    let resultArray = [];
    // outer loop to run 
    for (let i = 0; i < str.length; i++) {
        // pushing first char 
        resultArray.push(str[i]);
        // inner loop 
        for (let j = i + 1; j < str.length; j++) {
            // get last substring 
            resultArray.push(
                resultArray[resultArray.length - 1] + str[j]
            );
        }
    }

    return resultArray;

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;