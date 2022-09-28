/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */

    //we create an array variable to store the new Array of substrings
    let nArray = [];
    //we create a for cycle to go through the original array an to get a pivot index and an another iterated
    //for cycle to go to the next value of the string and my next index
    for(let i = 0; i < str.length; i++){
        for(j =  i + 1; j < str.length + 1; j++){

            //with two indexes we use slice function to generate the substrings and we push every new value in the new Array
            nArray.push(str.slice(i,j));
        }
    }

    
    //we return the substrings resulted
    return(nArray);
    
    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;