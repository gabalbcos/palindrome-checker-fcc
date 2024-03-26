const inputBox = document.getElementById('input-Text-To-Check');
const resultText = document.getElementById('result-Text');
const checkButton = document.getElementById('check-button');

function checkPalindrome() {
  let wordToCheck = inputBox.value;  
  wordToCheck = wordToCheck.trim()
  if (wordToCheck.length === 0 ) {
    resultText.textContent = 'Please write a word to check.';
  } else {
  if (wordToCheck.toLowerCase() === wordToCheck.split("").reverse().join("").toLowerCase()) {
    resultText.textContent = `"${wordToCheck}" is a palindrome`;
  } else {
    resultText.textContent = `"${wordToCheck}" is not a palindrome`;
  }
 }
}

checkButton.addEventListener('click', checkPalindrome);