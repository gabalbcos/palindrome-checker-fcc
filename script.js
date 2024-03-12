const inputBox = document.getElementById('input-Text-To-Check');
const resultText = document.getElementById('result-Text');

let wordToCheck = prompt("Please enter the word to check");

function checkPalindrome() {
  if (wordToCheck === wordToCheck.split("").reverse().join("")) {
    resultText.textContent = `"${wordToCheck}" is a palindrome`;
  } else {
    resultText.textContent = `"${wordToCheck}" is not a palindrome`;
  }
}

