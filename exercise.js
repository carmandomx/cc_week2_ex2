/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    // I need a variale to storage all the substrings
    const result = [];
    // I also need a variable to store the combined character and then push the result to the substring array
    let char = "";
    // I used a for loop to look into each character of the string that users gives me
    for (let i = 0; i < str.length; i++) {
        // I used another loop estarting from the last iteration so that it does not repeat, and
        // The purpose of the this loop is that we take all the characters in the first iteration which is jus the first element of the srting
        // then fisrt element plus the second, then we will have 3 characters, and so on. Once the second loop finishes, we start 
        // in the second position of the given string, and then repeat all I said before.
        for (let j = i; j < str.length; j++) {
            // As I said before, I refresh the char variable depending on the iteration of the second loop
            char += str[j];
            // Once I refresh, I push the result to the array
            result.push(char)
        }
        // This part is the one that was more difficult haha, I needed to start the char in 0 every iteration of the first loop
        // Because if not, ii was right, but it wasent giving me the just the second letter first every refresh, it was giving me the combination of all. 
        char = ""
    }
    return result;


}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;