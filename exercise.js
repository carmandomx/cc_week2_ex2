/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let answ = []; // We use and empty array for the answer
    for(i=0;i<str.length;i++){ //for loop with variable i, this loop is for changing the starting point of the for loop "j"
        let stranw = [];
        for(j=0;j<str.length-i;j++){ //for loop with variable j wich will iterate through the string, we rest i to the string lenght because the start point moves one place every for loop "i"
            stranw += str[j+i];//using i+j to change the interation start point
            answ.push(stranw);//we save the answer in the last element of the array
        }
    }
    return answ;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;