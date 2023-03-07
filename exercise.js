/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    let one_substring = '' //Container for one single substring
    let str_arr=str.split("") //str made and array. 'hola'---->['h','o','l','a']
    let subarray=[] // container of sub array after slicing str_array
    const n=str.length // string length
    let sub_strings_container=[] //container of all substrings
    for (let i=0;i<n;i++){ //position from the array to start creating substrings
        for (let j=1;j<n+1-i;j++){ //size of the substrings
            one_substring='' //reset one_substring
            subarray = str_arr.slice(i,j+i)
            for ( let l=0;l<subarray.length;l++){ //we stick together the substring from the array
                one_substring+=subarray[l]
            }
            sub_strings_container.push(one_substring)
        }
    }


    return sub_strings_container
}
/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;