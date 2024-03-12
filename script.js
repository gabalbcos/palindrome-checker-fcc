let wordToCheck = prompt("Please enter the word to check");

function checkPalindrome() {
  if (wordToCheck === wordToCheck.split("").reverse().join("")) {
    alert(`"${wordToCheck}" is a palindrome`)
  } else {
    alert(`"${wordToCheck}" is not a palindrome`);
  }
}

