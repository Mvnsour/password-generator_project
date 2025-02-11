import { prompt } from './prompt.js';

function askCharsLength() {
  let charLength = Number(prompt('How many characters do you want ? (8-36)\n'));
  
  if (Number.isNaN(charLength) || charLength > 36 || charLength < 8) {
  throw new Error("Please you must write a number between 8 and 36. Try again.\n");
  }
  return charLength;
}