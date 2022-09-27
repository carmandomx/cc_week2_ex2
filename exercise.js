/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */

    //In this array I will save the result
    let result = [];
    //I need a variable to independently handle the array index of the result
    resultIndex = 0;

    //This first FOR increases the index of the letter with which the substring begins
    for( i = 0; i < str.length; i++){
        //This second FOR increases the index of the final letter of the substring
        for( j = i; j < str.length; j++){
            //The substring method is the best tool to solve this problem, because it returns the substring directly, 
            //only passing the indices of the first letter and the last letter +1
            result[resultIndex] = str.substring(i,j+1);
            //Increasing the index of the result
            resultIndex += 1;
        }
    }
    return result;

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;