/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */

    // split the array so we can have access to all the letters of the string str
    let newArr = str.split('');
    let answer = [];

    // first foreach we wont use element value, we only need the index of each element
    newArr.forEach((element, index) => {
        let tempArr = [];

        // we start a loop that start with the index of the forst foreach
        // add to tempArr every element of str from index to newArr length
        // we use this loop to find each element we willwork to add a substring to answer
        // in case we have ['a', 'b', 'c', 'd'] we will gonna add the substring to tempArr
        // if index is 0 we only add ['a', 'b', 'c', 'd'] to tempArr
        // if index increase it adds ['b', 'c', 'd'] to tempArr
        // at the end answer will be ['a']
        // this answer depends on newArr
        for (let count = index; count < newArr.length; count++) {
          tempArr.push(newArr[count]);
        }

        // this second foreach is used based con the loop for we used before
        // we only will use this foreach to get the index of tempArr
        tempArr.forEach((element, index2) => {
          let tempArr2 = []

          // we use this second for loop to build answer value
          // start cound on 0 and go up to the index size of tempArr
          // in case we have ['a', 'b', 'c', 'd'] we will gonna add the substring to tempArr2
          // if index is 0 we only add 'a' to answer, if index increase it adds ab to answer
          // at the end answer will be ['a', 'ab', 'abc' 'abcd]
          // this answer depends on tempArr
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