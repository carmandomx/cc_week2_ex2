/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let workarr=str.split('');
    let finalarray=[];
    let temparray=[];
    for(let i=0; i<workarr.length; i++){
        temparray=[];

        for(let j=i; j<workarr.length; j++){
            temparray.push(workarr[j]);
            finalarray.push(temparray.join('')); //This was the tricky part
        }

    }

    return finalarray;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;
