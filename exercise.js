/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */

    let res = []; //create an empty result array

    for(i=0; i<str.length; i++){ //for loop to iterate with 1 element
        for(j=i+1; j<=str.length; j++){ ///inner for loop to iterate with 2 elements
            res.push(str.slice(i, j)); //slice method returns a portion of the string, so we just slice the first one and keep moving thanks to the for loop
        }
    }

    return res; //return the result array
    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;