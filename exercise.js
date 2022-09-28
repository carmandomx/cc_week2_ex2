/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let resultArray = []; //created new array with substrings
    for(let i = 0; i < str.length; i++){
        resultArray.push(str[i]); 
// the for loop will go letter by letter and push each one since even each letter acts as asubstring
        for(let j = i + 1; j < str.length; j++){
            resultArray.push(resultArray[resultArray.length - 1] + str[j])
        // the previous loop will start from the first letter, this next one will create the subsequent substrings starting from the next character of the first loop
        // the -1 will make it so for the next iteration it will not loop at the same character and in fact add the substrings starting from the letter next to the previous iteration
    };
    }
    return resultArray;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;