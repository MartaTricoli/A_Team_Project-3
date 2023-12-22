const $jocFirstDiv = document.querySelector("#joc_firstDiv");
const $jocSecondDiv = document.querySelector("#joc_secondDiv");
const $jocFirstSpan = document.querySelector("#joc_firstSpan");
const $jocSecondSpan = document.querySelector("#joc_secondSpan");
const $featuredNewsLeftBtn = document.querySelector("#featuredNews_leftBtn");
const $featuredNewsRightBtn = document.querySelector("#featuredNews_rightBtn");
const $featuredNewsSliderContainer = document.querySelector(
  "#featuredNews_sliderContainer"
);
const $html = document.querySelector("html");
const $dmBtn = document.querySelector("#darkModeBtn");

const addEventListners = () => {
  $jocFirstSpan.addEventListener("click", () => {
    $jocFirstDiv.classList.remove("hidden");
    $jocSecondDiv.classList.add("hidden");
  });

  $jocSecondSpan.addEventListener("click", () => {
    $jocFirstDiv.classList.add("hidden");
    $jocSecondDiv.classList.remove("hidden");
  });

  $featuredNewsLeftBtn.addEventListener("click", () => {
    $featuredNewsSliderContainer.scrollLeft -=
      $featuredNewsSliderContainer.clientWidth;
  });

  $featuredNewsRightBtn.addEventListener("click", () => {
    $featuredNewsSliderContainer.scrollLeft +=
      $featuredNewsSliderContainer.clientWidth;
  });

  $dmBtn.addEventListener("click", () => {
    if ($html.classList.contains("dark")) {
      $html.classList.remove("dark");
    } else {
      $html.classList.add("dark");
    }
  });
};

addEventListners();
