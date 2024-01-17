const jocFirstDiv = document.querySelector("#joc_firstDiv");
const jocSecondDiv = document.querySelector("#joc_secondDiv");
const jocFirstSpan = document.querySelector("#joc_firstSpan");
const jocSecondSpan = document.querySelector("#joc_secondSpan");
const featuredNewsLeftBtn = document.querySelector("#featuredNews_leftBtn");
const featuredNewsRightBtn = document.querySelector("#featuredNews_rightBtn");
const featuredNewsSliderContainer = document.querySelector(
  "#featuredNews_sliderContainer"
);
const htmlElement = document.querySelector("html");
const darkModeBtn = document.querySelector("#darkModeBtn");

let intervalId;

const toggleDivs = () => {
  jocFirstDiv.classList.toggle("hidden");
  jocSecondDiv.classList.toggle("hidden");
};

const switchJocDivs = () => {
  clearInterval(intervalId);
  intervalId = setInterval(toggleDivs, 3000);
};

const eventListeners = () => {
  jocFirstSpan.addEventListener("click", () => {
    jocFirstDiv.classList.remove("hidden");
    jocSecondDiv.classList.add("hidden");
    switchJocDivs();
  });

  jocSecondSpan.addEventListener("click", () => {
    jocFirstDiv.classList.add("hidden");
    jocSecondDiv.classList.remove("hidden");
    switchJocDivs();
  });

  featuredNewsLeftBtn.addEventListener("click", () => {
    featuredNewsSliderContainer.scrollLeft -= 280;
  });

  featuredNewsRightBtn.addEventListener("click", () => {
    featuredNewsSliderContainer.scrollLeft += 280;
  });

  darkModeBtn.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");
  });
};

switchJocDivs();
eventListeners();
