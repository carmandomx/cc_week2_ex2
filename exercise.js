/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let newArr = str.split('');
    let answer = [];
    newArr.forEach((element, index) => {
        let tempArr = [];
        for (let count = index; count < newArr.length; count++) {
          tempArr.push(str[count]);
        }
        tempArr.forEach((element, index2) => {
          let tempArr2 = []
          for (let count = 0; count <= index2; count++) {
            tempArr2.push(tempArr[count]);
          }
          answer.push(tempArr2.join(''));
        });
    });
    return answer
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;