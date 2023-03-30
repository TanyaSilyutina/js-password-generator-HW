// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowercase, uppercase, numeric, special;

// Create password length array to verify user input
// arrayRange taken from freeCodeCamp
const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
const passwordLength = arrayRange(8, 128, 1);

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = lowercaseChars.toUpperCase();
const numericChars = "0123456789";
const specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  let userSelectedPasswordLength = promptUserForPasswordLength();
  if (userSelectedPasswordLength === false) return "";
  let chars = promptUserForCharacterTypes();
  let generatedPassword = "";

  for(let i = 0; i < userSelectedPasswordLength; i++){
    //generatedPassword.append(chars.match.random * 10
    generatedPassword += chars.charAt(getRandomInt(chars.length));
  }
  return generatedPassword;
}


// Stores userChoice for password length as an int
function promptUserForPasswordLength() {
  while (true) {
    userSelectedPasswordLength = prompt("How many characters would you like in your password? \nPlease pick from 8 to 128.");
    // handles 'Cancel' input
    if (userSelectedPasswordLength == null) {
      return false;
    }

    choiceInt = parseInt(userSelectedPasswordLength);
    if (isNaN(choiceInt) || !passwordLength.includes(choiceInt)) {
      alert("You entered " + userSelectedPasswordLength + ".\nPlease select the password length ranging from 8 to 128 to proceed.");
      continue;
    }

    return choiceInt;
  }
}

function promptUserForCharacterTypes() {
  while (true) {
    lowercase = confirm("Include lowercase letters?");
    uppercase = confirm("Include uppercase letters?");
    numeric = confirm("Include numbers?");
    special = confirm("Include special characters?");

    if (!lowercase && !uppercase && !numeric && !special) {
      alert("Please pick at least one character type.");
      continue;
    }

    let selectedCharsTypes = "";
    
    if (lowercase) selectedCharsTypes += lowercaseChars;
    if (uppercase) selectedCharsTypes += uppercaseChars;
    if (numeric) selectedCharsTypes += numericChars;
    if (special) selectedCharsTypes += specialChars;

    return selectedCharsTypes;
  }

}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
