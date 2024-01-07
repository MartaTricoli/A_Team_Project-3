document.addEventListener("DOMContentLoaded", () => {
const $hoverTrade = document.querySelector("#nTrade");
const $hoverEarn = document.querySelector("#nEarn");
const $hoverGame = document.querySelector("#nGame");
const $hoverNFT = document.querySelector("#nNFT");
const $hoverMenu = document.querySelector("#nMenu");
const $hoverNetwork = document.querySelector("#nNetwork");
const $menuTrade = document.querySelector("#nmTrade");
const $menuEarn = document.querySelector("#nmEarn");
const $menuGame = document.querySelector("#nmGame");
const $menuNFT = document.querySelector("#nmNFT");
const $menuMenu = document.querySelector("#nmMenu");
const $menuNetwork = document.querySelector("#nmNetwork");

  const setListeners = () => {
    const trade = () => {
      $hoverTrade.addEventListener("mouseenter", () => {
        $menuTrade.classList.remove("hidden");
      });
      $hoverTrade.addEventListener("mouseout", (event) => {
        if (
          !$hoverTrade.contains(event.relatedTarget) &&
          !$menuTrade.contains(event.relatedTarget)
        ) {
          $menuTrade.classList.add("hidden");
        }
      });
      $menuTrade.addEventListener("mouseover", () => {});
      $menuTrade.addEventListener("mouseout", (event) => {
        if (
          !$hoverTrade.contains(event.relatedTarget) &&
          !$menuTrade.contains(event.relatedTarget)
        ) {
          $menuTrade.classList.add("hidden");
        }
      });
    };
  
    const earn = () => {
      $hoverEarn.addEventListener("mouseenter", () => {
        $menuEarn.classList.remove("hidden");
      });
      $hoverEarn.addEventListener("mouseout", (event) => {
        if (
          !$hoverEarn.contains(event.relatedTarget) &&
          !$menuEarn.contains(event.relatedTarget)
        ) {
          $menuEarn.classList.add("hidden");
        }
      });
      $menuEarn.addEventListener("mouseover", () => {});
      $menuEarn.addEventListener("mouseout", (event) => {
        if (
          !$hoverEarn.contains(event.relatedTarget) &&
          !$menuEarn.contains(event.relatedTarget)
        ) {
          $menuEarn.classList.add("hidden");
        }
      });
    };
  
    const game = () => {
      $hoverGame.addEventListener("mouseenter", () => {
        $menuGame.classList.remove("hidden");
      });
      $hoverGame.addEventListener("mouseout", (event) => {
        if (
          !$hoverGame.contains(event.relatedTarget) &&
          !$menuGame.contains(event.relatedTarget)
        ) {
          $menuGame.classList.add("hidden");
        }
      });
      $menuGame.addEventListener("mouseover", () => {});
      $menuGame.addEventListener("mouseout", (event) => {
        if (
          !$hoverGame.contains(event.relatedTarget) &&
          !$menuGame.contains(event.relatedTarget)
        ) {
          $menuGame.classList.add("hidden");
        }
      });
    };
  
    const nft = () => {
      $hoverNFT.addEventListener("mouseenter", () => {
        $menuNFT.classList.remove("hidden");
      });
      $hoverNFT.addEventListener("mouseout", (event) => {
        if (
          !$hoverNFT.contains(event.relatedTarget) &&
          !$menuNFT.contains(event.relatedTarget)
        ) {
          $menuNFT.classList.add("hidden");
        }
      });
      $menuNFT.addEventListener("mouseover", () => {});
      $menuNFT.addEventListener("mouseout", (event) => {
        if (
          !$hoverNFT.contains(event.relatedTarget) &&
          !$menuNFT.contains(event.relatedTarget)
        ) {
          $menuNFT.classList.add("hidden");
        }
      });
    };
  
    const menu = () => {
      $hoverMenu.addEventListener("mouseenter", () => {
        $menuMenu.classList.remove("hidden");
      });
      $hoverMenu.addEventListener("mouseout", (event) => {
        if (
          !$hoverMenu.contains(event.relatedTarget) &&
          !$menuMenu.contains(event.relatedTarget)
        ) {
          $menuMenu.classList.add("hidden");
        }
      });
      $menuMenu.addEventListener("mouseover", () => {});
      $menuMenu.addEventListener("mouseout", (event) => {
        if (
          !$hoverMenu.contains(event.relatedTarget) &&
          !$menuMenu.contains(event.relatedTarget)
        ) {
          $menuMenu.classList.add("hidden");
        }
      });
    };
  
    const network = () => {
      $hoverNetwork.addEventListener("mouseenter", () => {
        $menuNetwork.classList.remove("hidden");
      });
      $hoverNetwork.addEventListener("mouseout", (event) => {
        if (
          !$hoverNetwork.contains(event.relatedTarget) &&
          !$menuNetwork.contains(event.relatedTarget)
        ) {
          $menuNetwork.classList.add("hidden");
        }
      });
      $menuNetwork.addEventListener("mouseover", () => {});
      $menuNetwork.addEventListener("mouseout", (event) => {
        if (
          !$hoverNetwork.contains(event.relatedTarget) &&
          !$menuNetwork.contains(event.relatedTarget)
        ) {
          $menuNetwork.classList.add("hidden");
        }
      });
    };
  
    trade();
    earn();
    game();
    nft();
    menu();
    network();
  };
  setListeners();
});