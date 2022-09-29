/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let arr= [];  //first we create an empty array to save our result
    let lang = str.length;  //we use this one to check the length of the string and get a variable
    for (let i = 0; i < lang; i++) {   //then we make 2 for cycles   
        for (let j = i+1; j <= lang; j++) {  //j has to be i+1 cause it needs to be the next position 
/*now we need something that cuts the strings and changes the size while using the cycle 
this magic thing is called slice*/
            arr.push(str.slice(i,j));//we obtain a new array
        }
    }
    return arr;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;