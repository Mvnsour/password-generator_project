import { prompt } from './prompt.js';

function askCharsLength() {
  let charsLength = Number(prompt('How many character do you want ? (12-36)\n'));
  
  if (Number.isNaN(charsLength) || charsLength > 36 || charsLength < 12) {
  throw new Error("Please you must write a number between 8 and 36. Try again.\n");
  }

  return charsLength;
}

function askSpecialChars() {
  let specialChars = prompt('Do you want special characters ? (y/n)\n');
  
  if (specialChars !== 'y' && specialChars !== 'n') {
    throw new Error(`Please you must write "y" for "yes" or "n" for "no". Try again.\n`);
  }

  return specialChars;
}

function askNumbers() {
  let numbers = prompt('Do you want numbers ? (y/n)\n');
  
  if (numbers !== 'y' && numbers !== 'n') {
    throw new Error(`Please you must write "y" for "yes" or "n" for "no". Try again.\n`);
  }

  return numbers;
}

function askUpperCase() {
  let upperCase = prompt('Do you want upper cases ? (y/n)\n');
  
  if (upperCase !== 'y' && upperCase !== 'n') {
    throw new Error(`Please you must write "y" for "yes" or "n" for "no". Try again.\n`);
  }

  return upperCase;
}

const main = () => {
  let charsLength = null;
  let specChars = null;
  let numbers = null;
  let upperCase = null;

  while (
    charsLength === null || specChars === null ||
    numbers === null || upperCase === null
  ) {
    try {
      charsLength = charsLength ? charsLength : askCharsLength();
      specChars = specChars ? specChars : askSpecialChars();
      numbers = numbers ? numbers : askNumbers();
      upperCase = upperCase ? upperCase : askUpperCase();
    } catch (error) {
      console.error(error.message);
    }
  }
}

main();