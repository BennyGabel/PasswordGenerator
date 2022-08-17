Title: PasswordGenerator

Acceptance Criteria
================================================================================================
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
DONE - WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

I   Changes made to the structure/starter code
    * Created directory and moved STYLE.CSS to assets/css
    * Created directory and moved SCRIPT.JS to assets/js
    * Updated INDEX.HTML to reference CSS and JS to the respective sub directories  - ONLY DONE CHANGES IN INDEX.HTML - Included comments.

II  SCRIPT.JS
    1 Starter code is at the end of the program.
    2 Created function generatePassword. Name given/assigned by the starter code
    3 Naming convension:
      > Character/String variables starting with letter "c"
      > Numeric          variables starting with letter "n" or "ln" (ln = Local Numeric)
      > Boolean/Logical  variables starting with letter "l"
    4 while lLoop        will ask user of characters user want for password to be.  # of characters should be between 8 and 128 characters
      > The loop wont let out user get out of the question if entry is less than 8
      > The loop wont let out user get out of the question if entry is more than 128
      > If user select 0 characters, loop will exit (wont ask any further), will also skip other criteria questions.
    5 Function randomLetter - receive search string as parameter 
      > This function is intended to be used call for different times/purposes
        * UPPER CASE
        * lower case
        * Numeric
        * Special Characters
        * At the very end, a mix of all selected characters
      > Each case contains a different set of characters/string and even a different length
      > The function will receive the string to-be-searched.
      > Calculate a random number Math.random and will multiply by the length of the string (received)
      > Extract the character belonging to that random number
      > Add to the variable containing to the build-up password   cPasswd
    6 Ask for additional criteria. To waranty all the options requested are there, the first round will be added as been evaluated.
      > All strings are set as empty (cLower, cUpper, cNumber, cSpecial)
      > As they are initialize, they will calculate first character on that category
        * Add to the variable containing to the build-up password   cPasswd
      > After all categories were initialized and added, will proceed to calculate the rest of characters
        * cMix = cLower + cUpper + cNumber + cSpecial     Will create cMix containing al the posible values  (selection)
        * Calculate how many characters still need to be calculated      nMissingLetters = numChar - cPasswd.length
        * Loop - calculate missing characters
    > Will return password "cPasswd" to starter code        var password = generatePassword();
    > Once variable password is received, will update id #password into HTML
        <textarea>
            readonly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
        </textarea>

* I left all my attempts/code changes for my future references, for learning purposes
* I enjoyed writting this code, and learning JavaScript
* Please let me know if you have any question


