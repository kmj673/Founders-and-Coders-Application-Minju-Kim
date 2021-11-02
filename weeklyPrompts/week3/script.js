// Check the 📌 pinned messages for our updated how to...

// The prompts for this week guide you to create a Codename validator 🕵️

// 1️⃣ Open a new StackBlitz project with HTML, CSS and JavaScript files. Check everything is set up as you expect it - is your CSS linked in your HTML? Does your JavaScript file run?

// 2️⃣ Add an input box, a label, and a button to the HTML. Your input will be a string.

// 3️⃣ Write a function that checks the length of the string. The function should output true if the string more than 5 characters long. Otherwise, return false.

// 4️⃣ Write a function that checks the string contains at least one lowercase letter; and at least one uppercase letter. If both are present, the function should return true - and if either are missing, it should return false.

// 5️⃣  Finally, use DOM Manipulation to tie everything together 🧙  You'll need to check the value of the input when the user clicks the button. When the button is clicked, verify the input gives true when given as an argument to each of the functions.

// 6️⃣ If both functions return true give visual feedback to the user that the codename is valid. If either or both functions return false then give the user feedback that the codename is not valid. How you implement this is up to you. 🎨

// Example inputs:

// Gregor23 is a valid username, and so is a88aFan. HELLOworld is too!

// Invalid inputs include: d0g as it's too short and has no uppercase letters; 902101 since it has no letters.

button = document.querySelector("button");
input = document.querySelector("#string");
output = document.querySelector("p");

function checkLength() {
  if (input.value.length >= 5) {
    output.innerText = `true, the string's length is ${input.value.length}`;
  } else {
    output.innerText = `false, the string's length is ${input.value.length}`;
  }
}

function checkCase() {
  // check if it is empty string.
  // check if it has at least one UPPERCASE
  // check if it has at least one lowercase.
  // if it has both UPPERCASE & lowercase, it is true.
}

function checkNumber() {
  // check if it is only number.
}

button.addEventListener("click", checkCase);
