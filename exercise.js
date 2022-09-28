/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    //First we need to make an array with the string
    let strarray = str.split(" ");
    /*Then we declare an empty array to save the substrings and a string that is going to save 
    the substrings values*/
    let substringsarr = [];
    let tempsubstring = "";

    //Now we go trough the array
    for(let i = 0; i < str.length; i++){
        //if its not a blank space, we continue, else, we go to the next position
        if(str[i] !== " "){
            substringsarr.push(str[i]);
            tempsubstring = str[i];
            /*we then need to explore every subsequent position to see if it makes a substring and
            if it does, save it and continue, else we kill the loop and go to the next position*/
            for(let j = i+1; j < str.length; j++){
                if(str[j] !== " "){
                    tempsubstring = tempsubstring + str[j];
                    substringsarr.push(tempsubstring);
                }else{
                    break;
                }
            }
        }
    }
    return substringsarr;
    /* Only make changes below this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;