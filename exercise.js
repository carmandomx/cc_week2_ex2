/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let temp= ""; //temporal variable to save for a sec the resulted str
    let resArr=[];//final array to save the strings
    let a=0; //a counter to help insert the elements in the final array

    for (let i = 0; i < str.length; i++) { // first loop to run over the mixes of the current position with the remaining letters
       temp=str[i]; //set the temp variable in the current position
       resArr[a]=temp; //introduce this current variable to the position in a
       a++;//increase the value of the resArr indicator +1
        for (let j = i + 1; j < str.length; j++) { // a second loop to run over the remaining chars in the next position, jumping starting from +1 position
            temp=temp+[str[j]];//current temp indicator at position i is going to concate with the next positions in the loop 
            resArr[a]=temp; //resultant array is going to save the temp variable with his current value at position a
            a++;//increased a indicator to save the next string in the forward position
        }
    }
    /* Only make changes below this comment */
    return resArr;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;