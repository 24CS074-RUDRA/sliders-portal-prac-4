// Slider setup
let currentIndex = 0;
const visibleSlides = 3;
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

// Move to a specific slide index (with wrapping)
function moveToSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - visibleSlides;
  } else if (index > totalSlides - visibleSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  const offset = (100 / visibleSlides) * currentIndex;
  slider.style.transform = `translateX(-${offset}%)`;
}

// Next button click
nextButton.addEventListener("click", () => {
  moveToSlide(currentIndex + visibleSlides);
});

// Previous button click
prevButton.addEventListener("click", () => {
  moveToSlide(currentIndex - visibleSlides);
});

// Initialize
moveToSlide(0);