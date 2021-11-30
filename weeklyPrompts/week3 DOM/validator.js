codename = document.querySelector("#codename");
letterCount = document.querySelector(".letterCount");
lengthValidator = document.querySelector("#lengthValidator");
numberValidator = document.querySelector("#numberValidator");
caseValidator = document.querySelector("#caseValidator");

// to count the letters at real time and let user know
function countLetters() {
  const letters = codename.value.length;
  letterCount.innerText = letters;
  return letters;
}

// to validate length with validator next to conditions list.
function lengthValidate(number) {
  if (number >= 5) {
    // console.log(lengthValidator.classList)
    lengthValidator.classList.add("pass");
    lengthValidator.innerText = "pass";
  } else if (number < 5) {
    lengthValidator.classList.remove("pass");
    lengthValidator.innerText = "not passed";
  }
}

function numberValidate() {
  const numberRegex = /[0-9]/g;
  let result = codename.value.match(numberRegex);
  if (result === null) {
    // the case which doesn't have any number
    numberValidator.classList.remove("pass");
    numberValidator.innerText = "not passed";
  } else {
    // the case which has at least one number
    numberValidator.classList.add("pass");
    numberValidator.innerText = "pass";
  }
}

function caseValidate() {
  const upperCaseRegex = /[A-Z]/g;
  const lowerCaseRegex = /[a-z]/g;
  let upperCaseResult = codename.value.match(upperCaseRegex);
  let lowerCaseResult = codename.value.match(lowerCaseRegex);
  // console.log(upperCaseResult,lowerCaseResult);
  // codename has at least one of both
  if (upperCaseResult != null && lowerCaseResult != null) {
    caseValidator.classList.add("pass");
    caseValidator.innerText = "pass";
    // codename doesn't have both but only have lower or UPPER.
  } else {
    caseValidator.classList.remove("pass");
    caseValidator.innerText = "not passed";
  }
}

codename.addEventListener("keyup", () => {
  const letterCounts = countLetters();
  lengthValidate(letterCounts);
  numberValidate();
  caseValidate();
});
