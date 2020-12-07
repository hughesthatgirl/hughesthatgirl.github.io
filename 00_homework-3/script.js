//TODO:

//Create a function to build string based on selected criteria
//Create function to set the length of the string to the length selected by the user and build the password;

// When generateBtn is clicked...
// run buildString function
// run buildPassword function 
// display final password string inside of #password

//Extra:
// when generateBtn is clicked...if no criteria and/or no length has been selected - show error messages
// Add a reset button to clear out the form and generate another password
// Change opacity of "generate password" button to full opacity if criteria is met

var lettersUpper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lettersLower = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specialChar = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var criteria = '';

var hasLowerCase = document.getElementById('pwLowerCase');
var hasUpperCase = document.getElementById('pwUpperCase');
var hasNumeric = document.getElementById('pwNumeric');
var hasSpecialChar = document.getElementById('pwSpecialChar');

var pwLength = document.getElementById('pwLength');

var generateBtn = document.getElementById('generate');
var passwordContainer = document.getElementById('password');

//If criteria checkbox is selected... add the associated character string to the 'criteria' variable
//Return the final 'criteria' string
function buildString(){
    if (!hasLowerCase.checked && !hasUpperCase.checked && !hasNumeric.checked && !hasSpecialChar.checked){
        criteria = '';
    }

	if (hasLowerCase.checked){
    	criteria += lettersLower;
	} 

	if (hasUpperCase.checked){
    	criteria += lettersUpper;
	} 
    
    if (hasNumeric.checked){
    	criteria += numbers;
	} 
    
    if (hasSpecialChar.checked){
    	criteria += specialChar;
	}
    
    return criteria; 
}

//Use this later to the return the value of #pwLength input
function getLengthValue(inputEl){
  return inputEl.value;
}

//Pass in the length selected by the user (this is being stored in the variable pwLength);
//Call the buildString function and get the length of the string
//Do the math to generate the password based on the criteria returned from buildString() and the length chosen by the user
//Return the result
function buildPassword(length) {
	var passwordStr = buildString();
	var passwordLength = passwordStr.length;

	var result = '';

	for ( let i = 0; i < length; i++ ) {
		result += passwordStr.charAt(Math.floor(Math.random() * passwordLength));
	}

	return result;
}

//Call buildPassword and pass in pwLength
//Update the innerText of #password with the final password string
generateBtn.addEventListener('click', function(){
	var password = buildPassword(getLengthValue(pwLength));
	passwordContainer.innerText = password;
});