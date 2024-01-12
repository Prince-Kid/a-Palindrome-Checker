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