const inputBox = document.getElementById('text-input');
const resultText = document.getElementById('result-Text');
const checkButton = document.getElementById('check-btn');

function checkPalindrome() {
  let wordToCheck = inputBox.value;  
  wordToCheck = wordToCheck.trim()
  if (wordToCheck.length === 0 ) {
    resultText.textContent = 'Please write a word to check.';
  } else {
  if (wordToCheck.toLowerCase() === wordToCheck.split("").reverse().join("").toLowerCase()) {
    resultText.innerHTML = `"${wordToCheck}" is a palindrome`;
  } else {
    resultText.innerHTML = `"${wordToCheck}" is not a palindrome`;
  }
 }
}

checkButton.addEventListener('click', checkPalindrome);