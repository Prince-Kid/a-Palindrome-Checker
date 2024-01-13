function checkPalindrome() {
    const input = document.getElementById('text-input').value.trim();
   
    if (!input) {
       alert('Please input a value');
       return;
    }
   
   
    const sanitizedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    let start = 0;
    let end = sanitizedInput.length - 1;
   
    while (start < end) {
       if (sanitizedInput[start] !== sanitizedInput[end]) {
         document.getElementById('result').textContent = `${input} is not a palindrome`;
         return;
       }
       start++;
       end--;
    }
   
    document.getElementById('result').textContent = `${input} is a palindrome`;
   }
   
   document.getElementById('check-btn').addEventListener('click', checkPalindrome);
   /*The provided JavaScript code is designed to determine whether a given 
    input is a palindrome. 
It defines a function called checkPalindrome that performs the following steps:
The function retrieves the value of the input element 
using document.getElementById('text-input').value. 
The .trim() method is used to remove any leading or trailing whitespace from the input.
The input is sanitized by converting it to lowercase 
and removing all non-alphanumeric characters. This is done using 
the toLowerCase() method and 
the replace() method with a regular expression pattern [^a-z0-9].
The sanitized input is then checked to determine if it is a palindrome. 
This is achieved by iterating through the characters of the string from 
both ends and comparing them. If a pair of characters does not match, 
the function updates the text content of the #result element to indicate 
that the input is not a palindrome and returns without executing further.

If the loop completes without finding any non-matching pairs of characters, 
the function updates the text content of the #result element to indicate that 
the input is a palindrome.

*/ 