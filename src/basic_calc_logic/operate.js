/* eslint-disable */
import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'X') {
    return one.times(two).toString();
  }
  if (operation === 'Mod') {
    return one.mod(two).toString();
  }
  if (operation === 'Pow') {
      
    return one.pow(two.c[0]).toString();
  }
  if (operation === '%') {
     
    let result = (one*two)/100
     
    return result;
  }
  if (operation === '/') {
    try {
      return one.div(two).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
     try {
      return one.mod(two).toString();
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}