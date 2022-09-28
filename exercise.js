/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    
    let arrSub = [];                                            //  Creates an array to store each substring.
    let indexToSub = 0;                                         //  Creates an index to substrings array.
    let strTemp = '';                                           //  Creates a temporal string.

    //  For each character in the string, add this character and all of the contiguous sequence.
    for (let index = 0; index < str.length; index++) {
        const element = str[index];                             //  Creates a constant to handle each character.

        arrSub.splice(indexToSub,0,element);                    //  Add each character to the array. 
        indexToSub++;                                           //  Increase the index of substrings array.
        strTemp = strTemp.concat(element);                      //  Add each character to the temporal string to find the next sequence.
        
        //  For each character in the string after the previous character added, will be added.
        for (let index2 = 0; index2 < str.length; index2++) {
            const element2 = str[index2];                       //  Creates a constant to handle each character after the previous added characters.

            //  If the the character is after the previous added character, then add it to the array.
            if (index2 > index) {
                strTemp = strTemp.concat(element2);             //  Concatenates the next character to temporal string.
                arrSub.splice(indexToSub,0,strTemp);            //  Add the tempral string to the substring array.
                indexToSub++;                                   //  Increase the index of substrings array.
            }
        }
        strTemp ='';                                            //  Clean the temporal string after each character.
    }
    return arrSub;                                              //  Returns the substrings array.
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;