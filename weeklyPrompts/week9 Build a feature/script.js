// grab the prev,next button, slides and slider with queryselector
prevButton = document.querySelector(".prev-button");
nextButton = document.querySelector(".next-button");
slides = document.querySelector(".slide-container").children;

//button
index = 1;
// get button clicked
prevButton.addEventListener("click", updatePrev);
nextButton.addEventListener("click", (event) => {
  if (event.target.id === `${nextButton}`) {
    if (index === 5) {
      index = 1;
      console.log(index);
    } else {
      index++;
      console.log(index);
    }
  }
});

// update the slide for each button
function updatePrev() {}

// function updateNext() {
//   for (let i = 0; i < slides.length; i++) {
//     console.log(i, `${slides[i]}`, {slides[i]});
//     slides[i].classList.toggle("active");
//   }
// }

//slider
// get images number and slider's location value
