/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let result = []; //result
    let len = str.length; //the lenght of the str, to use just one variable in the future

    for(i=0; i<len; i++){ //2 loops to iterate with 2 elements
        for(j=i+1; j<=len; j++){ 
            result.push(str.slice(i, j)); //slice a part of the string, changing the size with the help od the loop
        }
    }

    return result;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;