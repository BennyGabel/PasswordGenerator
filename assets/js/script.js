
// debugger;

function generatePassword() {
  // Validate Password length
  var numChar = 0
  // var lLoop = (1=1);   // True;     
  // var lExit = (1=0);   // False;    

  var lLoop = Boolean(true);
  var lExit = Boolean(false);    
  var lCont = Boolean(true);

  // debugger;

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
        lCont = false ;
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

  function randomLetter(cSearch) {
    // debugger;

    lnPos = 0
    lnPos=Math.round(Math.random()*cSearch.length)

    return cSearch.substr(lnPos,1)
  }

  if ((numChar>0) && (numChar<=128)) {
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    var lInclLowerC = confirm("Do you want to include lower case?");
    var lInclUpperC = confirm("Do you want to include upper case?");
    var lInclNumber = confirm("Do you want to include numbers?");
    var lInclSpecial = confirm("Do you want to include special characters?");

    // Set Variables 
    var cPasswd  = "" ;   // Buil the password
    var cMix     = "" ;   // Characters available

    var cLower   = "" ;
    var cUpper   = "" ;
    var cNumber  = "" ;
    var cSpecial = "" ;



    // Define possible values

    // Originally I was planning to define them everything into one big variable, but afterward I decided to have it independently

    if (lInclLowerC) {
      // lcMix = lcMix + "abcdefghijklmnopqrstuvwxyz"
      cLower = "abcdefghijklmnopqrstuvwxyz"   // 26
      cPasswd = cPasswd + randomLetter(cLower) ;
    }

    if (lInclUpperC) {
      // lcMix = lcMix + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      cUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"   // 26
      cPasswd = cPasswd + randomLetter(cUpper) ;
    }

    if (lInclNumber) {
      //  lcMix = lcMix + "0123456789"
      cNumber = "0123456789"                  // 10
      cPasswd = cPasswd + randomLetter(cNumber) ;
    }

    if (lInclSpecial) {
      // lcMix = lcMix + " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      // lcMix = lcMix + '"';
      cSpecial = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";    // 32
      cSpecial = cSpecial + '"';
      cPasswd = cPasswd + randomLetter(cSpecial) ;
    }

    // Since all the variable had been defined as empty, they can be added - they were all defined.
    cMix = cLower + cUpper + cNumber + cSpecial ;

    // Calculate how many more letters have to be calculated
    nMissingLetters = numChar - cPasswd.length ;
    nCnt            = 1 ;
    // debugger;

    while (nCnt<=nMissingLetters) {
      cPasswd = cPasswd + randomLetter(cMix)  ; 
      nCnt += 1 ;
    }

    return cPasswd
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
