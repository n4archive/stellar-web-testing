const backButton = document.querySelector(".back-button");
const slider = document.querySelector(".slider");

backButton.addEventListener("click", (e) => {
  slider.style.transform = "translateX(0)";
});
