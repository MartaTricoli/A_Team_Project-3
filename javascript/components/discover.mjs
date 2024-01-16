const $cirSup = document.querySelector("#cirSup");
const $left_panel = document.querySelector("#left_panel");
const $right_panel = document.querySelector("#right_panel");

let c = 50;
let h = 0;
let hh = 0;

const cirSupInterval = setInterval(() => {
    c ++;
    $cirSup.innerHTML = Intl.NumberFormat('en-US').format(c);
    if (c === 100) {
        clearInterval(cirSupInterval);
    }
}, 1)

setTimeout(( )=> {
    const leftPanel = setInterval(() => {
        $left_panel.classList.remove(`h-[${h}px]`);
        h += 50;
        $left_panel.classList.add(`h-[${h}px]`);
        if (h === 250) {
            clearInterval(leftPanel);
        }
    }, 1)    
}, 1000)

setTimeout(( )=> {
    const rightPanel = setInterval(() => {
        $right_panel.classList.remove(`h-[${hh}px]`);
        hh += 50;
        $right_panel.classList.add(`h-[${hh}px]`);
        if (hh === 250) {
            clearInterval(rightPanel);
        }
    }, 1)    
}, 2000)
