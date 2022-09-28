/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    let finalArray=[];
    //Two for cycles are need to obtain the starting position and the final position of the substring
    for(let i=0;i<str.length;i++){
        for(let j=i; j<str.length;j++){
            finalArray.push(str.slice(i,(j+1)))
        }
    }

    return finalArray;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;