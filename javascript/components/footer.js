const $html = document.querySelector("#html");
const $darkModeLabel = document.querySelector("#darkmode-label");
const $containerBelow = document.querySelector("#container__below");
const $connectWalletBtn = document.querySelector("#connect_wallet_btn");
const $containerBelowBtnOne = document.querySelector("#container__below-btn-one");
const $containerBelowBtnTwo = document.querySelector("#container__below-btn-two");
const $containerBelowBoxFirst = document.querySelector("#container__below-box-first");
const $containerBelowBoxSecond = document.querySelector("#container__below-box-second");
const $containerBelowBoxSecondOne = document.querySelector("#container__below-box-second-one");
const $containerBelowBoxSecondTwo = document.querySelector("#container__below-box-second-two");
const $containerBelowBoxSecondBtnOne = document.querySelector("#container__below-box-second-btn-one");
const $containerBelowBoxSecondBtnTwo = document.querySelector("#container__below-box-second-btn-two");
const $containerBelowBoxFirstBtnMore = document.querySelector("#container__below-box-first-btn-more");
const $containerBelowBoxFirstHideOne = document.querySelector("#container__below-box-first-hide-one");
const $containerBelowBoxFirstHideTwo = document.querySelector("#container__below-box-first-hide-two");
const $containerBelowBoxFirstHideThree = document.querySelector("#container__below-box-first-hide-three");
const $containerBelowBoxFirstHideFour = document.querySelector("#container__below-box-first-hide-four");
const $containerBelowBoxFirstHideFive = document.querySelector("#container__below-box-first-hide-five");
const $containerBelowBoxFirstHideSix = document.querySelector("#container__below-box-first-hide-six");

const utilities = {
    activeDarkMode: () => {
        $html.classList.toggle("dark");
    },
    appearItem: (item) => {
        item.classList.remove("hidden");  
    },
    disappearItem: (item) => {
        item.classList.add("hidden");
    }
}


$darkModeLabel.addEventListener("click", () => {
    utilities.activeDarkMode();
});

$connectWalletBtn.addEventListener('click', () => {
    utilities.appearItem($containerBelow);
});

$containerBelowBtnTwo.addEventListener("click", () => {
    utilities.disappearItem($containerBelowBoxFirst);
    utilities.appearItem($containerBelowBoxSecond);

    if(!$containerBelowBoxSecond.classList.contains("hidden")) {
        if($html.classList.contains("dark")) {
            $containerBelowBtnOne.classList.remove("dark:bg-color_dark_grey_tab_on");
            $containerBelowBtnTwo.classList.add("dark:bg-color_dark_grey_tab_on");
        } else {
            $containerBelowBtnOne.classList.remove("bg-color_new_gray");
            $containerBelowBtnTwo.classList.add("bg-color_new_gray");
        }
    }
});

$containerBelowBtnOne.addEventListener("click", () => {
    utilities.disappearItem($containerBelowBoxSecond);
    utilities.appearItem($containerBelowBoxFirst);

    if(!$containerBelowBoxFirst.classList.contains("hidden")) {
        if($html.classList.contains("dark")) {
            $containerBelowBtnOne.classList.add("dark:bg-color_dark_grey_tab_on");
            $containerBelowBtnTwo.classList.remove("dark:bg-color_dark_grey_tab_on");
        } else {
            $containerBelowBtnOne.classList.add("bg-color_new_gray");
            $containerBelowBtnTwo.classList.remove("bg-color_new_gray");
        }
    }
});

$containerBelowBoxSecondBtnTwo.addEventListener("click", () => {
    utilities.disappearItem($containerBelowBoxSecondOne);
    utilities.appearItem($containerBelowBoxSecondTwo);

    if(!$containerBelowBoxSecondTwo.classList.contains("hidden")) {
        $containerBelowBoxSecondBtnTwo.classList.add("bg-color_btn_slider_on");
        $containerBelowBoxSecondBtnOne.classList.remove("bg-color_btn_slider_on");
    }
});

$containerBelowBoxSecondBtnOne.addEventListener("click", () => {
    utilities.disappearItem($containerBelowBoxSecondTwo);
    utilities.appearItem($containerBelowBoxSecondOne);

    if(!$containerBelowBoxSecondOne.classList.contains("hidden")) {
        $containerBelowBoxSecondBtnOne.classList.add("bg-color_btn_slider_on");
        $containerBelowBoxSecondBtnTwo.classList.remove("bg-color_btn_slider_on");
    }
});

$containerBelowBoxFirstBtnMore.addEventListener("click", () => {
    utilities.disappearItem($containerBelowBoxFirstBtnMore);
    utilities.appearItem($containerBelowBoxFirstHideOne);
    utilities.appearItem($containerBelowBoxFirstHideTwo);
    utilities.appearItem($containerBelowBoxFirstHideThree);
    utilities.appearItem($containerBelowBoxFirstHideFour);
    utilities.appearItem($containerBelowBoxFirstHideFive);
    utilities.appearItem($containerBelowBoxFirstHideSix);
});