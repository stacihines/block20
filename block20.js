// TODO: this file! :)

// Declare the variables to store the state of the app
let numberBank = []; // An array to store the numbers entered by the user
let oddNumbers = []; // An array to store the odd numbers sorted from the number bank
let evenNumbers = []; // An array to store the even numbers sorted from the number bank

// Get the references to the DOM elements
let inputField = document.getElementById("input-field"); // The input field where the user enters a number
let addNumberButton = document.getElementById("add-number-button"); // The button to add a number to the number bank
let sortOneButton = document.getElementById("sort-one-button"); // The button to sort one number from the number bank
let sortAllButton = document.getElementById("sort-all-button"); // The button to sort all numbers from the number bank
let numberBankDisplay = document.getElementById("number-bank-display"); // The element to display the number bank
let oddNumbersDisplay = document.getElementById("odd-numbers-display"); // The element to display the odd numbers
let evenNumbersDisplay = document.getElementById("even-numbers-display"); // The element to display the even numbers

// Define the functions to handle the user interactions
function addNumber() {
  // Get the value from the input field and convert it to a number
  let number = Number(inputField.value);

  // Check if the value is a valid number
  if (isNaN(number)) {
    // If not, alert the user and clear the input field
    alert("Please enter a valid number.");
    inputField.value = "";
  } else {
    // If yes, add the number to the number bank array and update the display
    numberBank.push(number);
    updateNumberBankDisplay();
    // Clear the input field
    inputField.value = "";
  }
}

function sortOne() {
  // Check if the number bank is not empty
  if (numberBank.length > 0) {
    // If not, remove the first number from the number bank array
    let number = numberBank.shift();
    // Check if the number is odd or even
    if (number % 2 === 0) {
      // If even, add it to the even numbers array and update the display
      evenNumbers.push(number);
      updateEvenNumbersDisplay();
    } else {
      // If odd, add it to the odd numbers array and update the display
      oddNumbers.push(number);
      updateOddNumbersDisplay();
    }
    // Update the number bank display
    updateNumberBankDisplay();
  } else {
    // If empty, alert the user
    alert("The number bank is empty.");
  }
}

function sortAll() {
  // Check if the number bank is not empty
  if (numberBank.length > 0) {
    // If not, loop through the number bank array
    for (let number of numberBank) {
      // Check if the number is odd or even
      if (number % 2 === 0) {
        // If even, add it to the even numbers array
        evenNumbers.push(number);
      } else {
        // If odd, add it to the odd numbers array
        oddNumbers.push(number);
      }
    }
    // Update the odd and even numbers displays
    updateOddNumbersDisplay();
    updateEvenNumbersDisplay();
    // Clear the number bank array and update the display
    numberBank = [];
    updateNumberBankDisplay();
  } else {
    // If empty, alert the user
    alert("The number bank is empty.");
  }
}

// Define the functions to update the DOM elements
function updateNumberBankDisplay() {
  // Join the number bank array into a string and set it as the text content of the number bank display element
  numberBankDisplay.textContent = numberBank.join(", ");
}

function updateOddNumbersDisplay() {
  // Join the odd numbers array into a string and set it as the text content of the odd numbers display element
  oddNumbersDisplay.textContent = oddNumbers.join(", ");
}

function updateEvenNumbersDisplay() {
  // Join the even numbers array into a string and set it as the text content of the even numbers display element
  evenNumbersDisplay.textContent = evenNumbers.join(", ");
}

// Add event listeners to the buttons to call the corresponding functions when clicked
addNumberButton.addEventListener("click", addNumber);
sortOneButton.addEventListener("click", sortOne);
sortAllButton.addEventListener("click", sortAll);
