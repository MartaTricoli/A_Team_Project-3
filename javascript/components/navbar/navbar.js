document.addEventListener("DOMContentLoaded", () => {
  //desktop
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
  //mobile
  const $hoverEarnMB = document.querySelector("#nmbEarn");
  const $hoverGameMB = document.querySelector("#nmbGame");
  const $hoverNFTMB = document.querySelector("#nmbNFT");
  const $hoverMenuMB = document.querySelector("#nmbMenu");
  const $menuEarnMB = document.querySelector("#nmbmEarn");
  const $menuGameMB = document.querySelector("#nmbmGame");
  const $menuNFTMB = document.querySelector("#nmbmNFT");
  const $menuMenuMB = document.querySelector("#nmbmMenu");
  
  const setListeners = () => {
  //desktop
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
      $menuNetwork.addEventListener("mouseout", (event) => {
        if (
          !$hoverNetwork.contains(event.relatedTarget) &&
          !$menuNetwork.contains(event.relatedTarget)
        ) {
          $menuNetwork.classList.add("hidden");
        }
      });
    };
//mobile
    const mbEarn = () => {
      $hoverEarnMB.addEventListener("mouseenter", () => {
        $menuEarnMB.classList.remove("hidden");
      });
      $hoverEarnMB.addEventListener("mouseout", (event) => {
        if (
          !$hoverEarnMB.contains(event.relatedTarget) &&
          !$menuEarnMB.contains(event.relatedTarget)
        ) {
          $menuEarnMB.classList.add("hidden");
        }
      });
      $menuEarnMB.addEventListener("mouseout", (event) => {
        if (
          !$hoverEarnMB.contains(event.relatedTarget) &&
          !$menuEarnMB.contains(event.relatedTarget)
        ) {
          $menuEarnMB.classList.add("hidden");
        }
      });
    };
  
    const mbGame = () => {
      $hoverGameMB.addEventListener("mouseenter", () => {
        $menuGameMB.classList.remove("hidden");
      });
      $hoverGameMB.addEventListener("mouseout", (event) => {
        if (
          !$hoverGameMB.contains(event.relatedTarget) &&
          !$menuGameMB.contains(event.relatedTarget)
        ) {
          $menuGameMB.classList.add("hidden");
        }
      });
      $menuGameMB.addEventListener("mouseout", (event) => {
        if (
          !$hoverGameMB.contains(event.relatedTarget) &&
          !$menuGameMB.contains(event.relatedTarget)
        ) {
          $menuGameMB.classList.add("hidden");
        }
      });
    };
  
    const mbNft = () => {
      $hoverNFTMB.addEventListener("mouseenter", () => {
        $menuNFTMB.classList.remove("hidden");
      });
      $hoverNFTMB.addEventListener("mouseout", (event) => {
        if (
          !$hoverNFTMB.contains(event.relatedTarget) &&
          !$menuNFTMB.contains(event.relatedTarget)
        ) {
          $menuNFTMB.classList.add("hidden");
        }
      });
      $menuNFTMB.addEventListener("mouseout", (event) => {
        if (
          !$hoverNFTMB.contains(event.relatedTarget) &&
          !$menuNFTMB.contains(event.relatedTarget)
        ) {
          $menuNFTMB.classList.add("hidden");
        }
      });
    };
  
    const mbMenu = () => {
      $hoverMenuMB.addEventListener("mouseenter", () => {
        $menuMenuMB.classList.remove("hidden");
      });
      $hoverMenuMB.addEventListener("mouseout", (event) => {
        if (
          !$hoverMenuMB.contains(event.relatedTarget) &&
          !$menuMenuMB.contains(event.relatedTarget)
        ) {
          $menuMenuMB.classList.add("hidden");
        }
      });
      $menuMenuMB.addEventListener("mouseout", (event) => {
        if (
          !$hoverMenuMB.contains(event.relatedTarget) &&
          !$menuMenuMB.contains(event.relatedTarget)
        ) {
          $menuMenuMB.classList.add("hidden");
        }
      });
    };
  
//desktop
    trade();
    earn();
    game();
    nft();
    menu();
    network();
//mobile
    mbEarn();
    mbGame();
    mbNft();
    mbMenu();
  };
  setListeners();
});