//improvement: if user put space while they type, how to detect it and also how to remove those spaces.

button = document.querySelector("button");
codename = document.querySelector("#codename");
output = document.querySelector("p");

function checkLength() {
  if (codename.value.length >= 5) {
    // output.innerText = `true, this codename's length is ${codename.value.length}`;
    // console.log(`true, this codename's length is ${codename.value.length}`)
    return true;
  } else if (codename.value.length < 5) {
    // output.innerText = `false, this codename's length is ${codename.value.length}`;
    // console.log(`false, this codename's length is ${codename.value.length}`)
    return false;
  }
}

function checkCase() {
  let lowerCaseRegex = /[a-z]/g;
  let upperCaseRegex = /[A-Z]/g;
  let upperCaseResult = codename.value.match(upperCaseRegex);
  let lowerCaseResult = codename.value.match(lowerCaseRegex);
  // console.log(upperCaseResult.length, lowerCaseResult.length);
  if (upperCaseResult === null) {
    // console.log('false, this is lowercase only');
    return false;
  } else if (lowerCaseResult === null) {
    // console.log('false, this is Uppercase only');
    return false;
  } else if (upperCaseResult.length > 0 && lowerCaseResult.length > 0) {
    // console.log('true, this has both Uppercase and lowercase');
    return true;
  }
}

function checkNumber() {
  let numberRegex = /[0-9]/g;
  let numberResult = codename.value.match(numberRegex);
  // console.log(numberResult,numberResult.length)
  // check if it is only number.
  if (numberResult === null) {
    // console.log("false, this doesn't have a number");
    return false;
  } else {
    // console.log("true, this has at least one number");
    return true;
  }
}

button.addEventListener("click", () => {
  const lengthResult = checkLength();
  const caseResult = checkCase();
  const numberResult = checkNumber();
  //when there is no string in input bar
  if (codename.value.length === 0) {
    output.innerText = `Please type the string to check if it is valid codename`;
    //when it is valid with case, length and number
  } else if (lengthResult && caseResult && numberResult) {
    output.innerText = `Pass, [${codename.value}] is valid codename.`;
    //when its length is too short
  } else if (!lengthResult) {
    output.innerText = `Fail, [${codename.value}] is too short.`;
    //when its case is not adequate
  } else if (!caseResult) {
    output.innerText = `Fail, [${codename.value}] only has UPPER or lower case.`;
    // when it doesn't have any number
  } else if (!numberResult) {
    output.innerText = `Fail, [${codename.value}] doesn't have any number.`;
  }
});
