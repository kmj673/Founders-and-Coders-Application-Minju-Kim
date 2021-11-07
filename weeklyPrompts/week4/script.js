

// Based on which radio button is selected, choose which function to run. Pass an array as an argument to the particular function.

// Finally, return the result from the function and display it on the page.

// 5️⃣ Add CSS to give the user an intuitive experience

// 6️⃣ Think about and constrain what inputs can be given. The user may be inconsistent in the string they give, for example using spaces or not. How can we account for this, in JavaScript or HTML?

button = document.querySelector('button');
input = document.querySelector('#input');
output = document.querySelector('#output');

//to make the string as the number's array is splitted with comma,
// use the method and split it as individual numbers
function splitByComma() {
  let splitted = input.value.split(',');
  return splitted;
}

function function1(numbers){
  console.log(`this is function 1 ${numbers}`)
}

// typeof parseInt(input.value),parseInt(input.value),
button.addEventListener('click', () => {
  const numbers = splitByComma();
  // switch
  function1(numbers);
});
