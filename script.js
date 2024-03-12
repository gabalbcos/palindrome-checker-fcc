const inputBox = document.getElementById('input-Text-To-Check');
const resultText = document.getElementById('result-Text');
const checkButton = document.getElementById('check-Button');

function checkPalindrome() {
  let wordToCheck = inputBox.value;  
  if (wordToCheck.toLowerCase() === wordToCheck.split("").reverse().join("").toLowerCase()) {
    resultText.textContent = `"${wordToCheck}" is a palindrome`;
  } else {
    resultText.textContent = `"${wordToCheck}" is not a palindrome`;
  }
}

checkButton.addEventListener('click', checkPalindrome);