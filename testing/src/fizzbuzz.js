/**
 * Escribir una función que al pasarle un número:
 * - Devuelva "fizz" si es múltiplo de 3.
 * - Devuelva "buzz" si es múltiplo de 5.
 * - Devuelva "fizzbuzz" si es múltiplo de 3 y 5.
 * - Devuelva el número si no es múltiplo de ninguno de los anteriores.
 */

export const fizzbuzz = (number) => {

  if (typeof number !== 'number') throw new Error('parameter provided must be a number');
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number');
  
  const multiplies = { 3: 'fizz', 5: 'buzz', 7: 'woff' };
  let output = '';

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if(number % multiplier === 0) output += word
    })

  //refactor:
  // if (number % 15 === 0) return 'fizzbuzz';
  // if (number % 3 === 0) return 'fizz';
  // if (number % 5 === 0) return 'buzz';

  return output || number;
}