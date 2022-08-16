// Assignment code here
// alert("Hi");

// window.alert("Welcome to Robot Gladiators! Round " + (1 + 1));
debugger;


// Validate Password length
var numChar = 0
// var lLoop = (1=1);   // True;     
// var lExit = (1=0);   // False;    

var lLoop = Boolean(true);
var lExit = Boolean(false);    

debugger;

// while (numChar<8 || numChar>128) {
while (lLoop) {


  var strChar = prompt("Enter # of characters [8 to 128]");
  
  // var numChar = parseInt(strChar);
  numChar = parseInt(strChar);

  // switch(numChar) {
  // case numChar=0:
  // case numChar<8 || numChar>128:

  // if (numChar=0) {
  if (numChar<1) {
    // code block
    var lExit = confirm("Do you want to cancel?");
    if (lExit) {
      lLoop = false ;
      break;
    }
  } else if (numChar<8) {
    // break;
  
    // code block
    
      alert("Password can not be less than 8 characters");
  } else if (numChar>128) {
        alert("Password can not be more than 128 characters");
  
  } else {
    // numChar has between 8 and 128 characters
    lLoop = false ;
    break;
  }
}










// 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
