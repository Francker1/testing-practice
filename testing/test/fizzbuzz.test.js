import { describe, expect, it } from 'vitest';
import { fizzbuzz } from '../src/fizzbuzz';


describe("fizzbuzz", () => {

  /** Puedes eliminar un test que ya está cubierto por los siguientes */
  // it("should be a function", () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // });

  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  });

  it('should throw a specific message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
  });

  it('should throw a specific message when not a number (NaN) is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
  });

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  });

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  });

  it('should return "fizz" is number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  });

  it('should return "fizz" is number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz');
    expect(fizzbuzz(9)).toBe('fizz');
    expect(fizzbuzz(12)).toBe('fizz');
  });

  /** Los tests se pueden ir apagando o eliminando, este es redundante: */
  // it('should return 4 if number provided is 4', () => {
  //   expect(fizzbuzz(4)).toBe(4);
  // });

  it('should return "buzz" is number provided is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
    expect(fizzbuzz(10)).toBe('buzz');
  });

  it('should return "fizzbuzz" if number provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
    expect(fizzbuzz(45)).toBe('fizzbuzz');
  });

  it('should return "woff" is number provided is 7', () => {
    expect(fizzbuzz(7)).toBe('woff');
  });

  it('should return "woff" is number provided is multiple of 7', () => {
    expect(fizzbuzz(14)).toBe('woff');
    expect(fizzbuzz(49)).toBe('woff');
  });

  it('should return "fizzwoff" if number provided is multiple of 3 and 7', () => {
    expect(fizzbuzz(21)).toBe('fizzwoff');
  });

  it('should return "buzzwoff" if number provided is multiple of 5 and 7', () => {
    expect(fizzbuzz(35)).toBe('buzzwoff');
  });
});