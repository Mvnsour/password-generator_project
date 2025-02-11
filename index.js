import { prompt } from './prompt.js';

// 1st step : recovering settings from the user

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

// 2nd step : generating the password

const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SPECIALS = '!@#$%^&*()';
const NUMBERS = '0123456789';

const generatePassword = (charsLength, specChars, numbers, upperCase) => {
  let charset = LOWERCASE;
  
  if (upperCase) {
    charset += UPPERCASE;
  }
  
  if (specChars) {
    charset += SPECIALS;
  }
  
  if (numbers) {
    charset += NUMBERS;
  }
};

// for each setting, we ask the user until he gives a correct answer

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

  const password = generatePassword(charsLength, specChars, numbers, upperCase);
  console.log(`Your generated password is: password ${password}`);
}

// 3rd step : displaying the password

main();