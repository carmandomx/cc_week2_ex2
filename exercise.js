/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
  /* Only make changes below this comment */
  const substring = [];  //Se crea un array donde iran nuestros substrings
  for (let i = 0; i < str.length; i++) { //Tengo dos iteradores, i avanzará cada vez que j recorra el array completo
    for (let j = i + 1; j <= str.length; j++) {
      substring.push(str.slice(i, j)); //empujo al array que cree al principio un slice que ira creciendo conforme j avanza.
      //La primera iteración sera str.slice(0,1) que es igual a ["a"], por ejemplo, la segunda iteracion será str.slice(0,2) que es igual a ["ab"], y así hasta llegar al final del array.
    }
  }
  return substring; //retorno del alrray que creamos lleno con los valores de las iteraciones.
};
/* Only make changes below this comment */

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;
