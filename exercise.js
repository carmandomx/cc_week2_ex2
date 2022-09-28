/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let str1= str.split("");
    let array=[];
    let arr=[];
    let counter=1;
    for(let i=0; i<str1.length;i++){
        array.push(str1[i])
        arr=str1[i];
        for(let j=counter;j<str1.length;j++){
                 arr+=str1[j];
                array.push(arr);
        }
        counter++;
    }
    /* Only make changes below this comment */
    return array;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;