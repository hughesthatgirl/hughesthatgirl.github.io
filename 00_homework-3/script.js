//TODO:
// Add some error messaging to #password telling user they must set a length first
// #passwordOptions should be hidden on page load
// When generateBtn is clicked it should toggle the visually-hidden class on #passwordOption to reveal it
// When generateBtn is clicked update #password innerText to say "set a password length to get started"
// When a user chooses a password length, update #password innerText to a random string of that length
// When a user selects a criteria, update the generated string to include the criteria and update #password innerText to the new string

//When a user sets the password length, run a function to generate a random string of letters
//Check the value of the input
//Store that string in a variable

//When a user selects one of the criteria checkboxes, run a function to update the randomly generated string with the criteria
//Check for the :checked value of checkboxes



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
