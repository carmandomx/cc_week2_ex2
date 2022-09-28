/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all
*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */

    //I create an empty array to store the new array of substrings
    const array = [];

    //I declare an aux that helps us with the string iteration
    let aux = 0;

    //I create this while to make sure that we can go through every string
    //It checks if our aux is different than our str length

    while (aux != str.length ) {

    //I created this for loop to go through the string (str)
    for (let i = aux; i < str.length; i++) {

        //with push we add items to the array
        //having 'substring(i+1,aux)' is going to start at the next position and finish to its right 
        array.push(str.substring(i+1,aux))
    }
        //this is for the variable to be increasing when every iteration happens
        aux ++;
    }

    return array;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;