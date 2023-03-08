/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    const subString = []

    for (let i = 0; i < str.length; i++) {//Iterate all over the elements
        let sub = "";//Storage the elements
        for (let j = i; j < str.length; j++) {//Iterate all over again in the i position
            sub += str[j]//add the elements
            subString.push(sub)//add the elements to the array
        }
    }
    return subString
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;