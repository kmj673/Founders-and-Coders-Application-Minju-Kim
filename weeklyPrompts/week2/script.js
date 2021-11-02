// 1
function sumTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(sumTwoNumbers(1, 2));

// 2
function fourNumbers(num1, num2, num3, num4) {
  const a = num1 + num2;
  const b = num3 + num4;
  const result = a * b;
  return result;
}

console.log(fourNumbers(1, 2, 3, 4));

// 3 Write a function which accepts two numbers. The function should return the larger number.

function larger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(larger(156, 896));

// 4 Write a function which accepts an array as an argument.
// Each item in the array will be a number.
// The function should add all the numbers in the array and return the result.

function sum(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log(i, array[i])
    result += array[i];
  }
  return result;
}

console.log(sum([1, 2, 3, 4]));
