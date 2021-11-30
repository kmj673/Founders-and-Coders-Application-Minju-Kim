// 5️⃣ Add CSS to give the user an intuitive experience

// 6️⃣ Think about and constrain what inputs can be given. The user may be inconsistent in the string they give, for example using spaces or not. How can we account for this, in JavaScript or HTML?

button = document.querySelector('button');
input = document.querySelector('#input');
functionOutput = document.querySelector('#functionOutput');
resultOutput = document.querySelector('#resultOutput');
// to make the string as array which is splitted by comma

function splitByComma() {
  let splitted = input.value.split(',');
  return splitted;
}

// return the doubled array
function function1(numbers) {
  const doubleArray = numbers.map((element) => element * 2);
  // console.log(doubleArray);
  functionOutput.innerHTML = `Function1 is selected.`;
  resultOutput.innerHTML = `Result: [${doubleArray}]`;
}

// return the total value which is added up
function function2(numbers) {
  const total = numbers.reduce(
    (previous, current) => parseInt(previous) + parseInt(current)
  );
  functionOutput.innerHTML = `Function2 is selected.`;
  resultOutput.innerHTML = `Result: [${total}]`;
}

//filter the value which is divisible by 2 only.
function function3(numbers) {
  const filtered = numbers.filter((element) => element % 2 === 0);
  functionOutput.innerHTML = `Function3 is selected.`;
  resultOutput.innerHTML = `Result: [${filtered}]`;
}

//return the array that multiply the element by its index
function function4(numbers) {
  const indexMultiply = numbers.map((element, index) => {
    return element * index;
  });
  functionOutput.innerHTML = `Function4 is selected.`;
  resultOutput.innerHTML = `Result: [${indexMultiply}]`;
}

button.addEventListener('click', () => {
  const numbers = splitByComma();
  // console.log(numbers);
  const functions = document.querySelectorAll('input[name="function"]');
  let selectedFunc;
  for (func of functions) {
    if (func.checked) {
      selectedFunc = func.value;
    }
  }
  // console.log(typeof selectedFunc)
  switch (selectedFunc) {
    case 'f1':
      function1(numbers);
      break;
    case 'f2':
      function2(numbers);
      break;
    case 'f3':
      function3(numbers);
      break;
    case 'f4':
      function4(numbers);
      break;
  }
});
