const $jocFirstDiv = document.querySelector("#joc_firstDiv");
const $jocSecondDiv = document.querySelector("#joc_secondDiv");
const $jocFirstSpan = document.querySelector("#joc_firstSpan");
const $jocSecondSpan = document.querySelector("#joc_secondSpan");

const addEventListners = () => {
  $jocFirstSpan.addEventListener("click", () => {
    $jocFirstDiv.classList.remove("hidden");
    $jocSecondDiv.classList.add("hidden");
  });

  $jocSecondSpan.addEventListener("click", () => {
    $jocFirstDiv.classList.add("hidden");
    $jocSecondDiv.classList.remove("hidden");
  });
};

addEventListners();
