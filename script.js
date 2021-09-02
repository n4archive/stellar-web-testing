var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "0rem 0rem";
    } else {
      panel.style.maxHeight = "40vh";
      panel.style.padding = "1rem 0rem";
    }
  });
}

// const bubbles = document.getElementsByClassName("bubble");

// var winWidth = window.innerWidth;
// var winHeight = window.innerHeight;

// for (var i = 0; i < bubbles.length; i++) {
//   // shortcut! the current div in the list
//   var thisDiv = bubbles[i];

//   randomTop = getRandomNumber(0, winHeight);
//   randomLeft = getRandomNumber(0, winWidth);

//   // update top and left position

//   thisDiv.style.top = randomTop + "px";
//   thisDiv.style.left = randomLeft + "px";
// }

// function getRandomNumber(min, max) {
//   return Math.random() * (max - min) + min;
// }
