const img = document.getElementById('cookie');
let counterVal = 0;

let isEnlarged = false;

img.onclick = () => {
    if (isEnlarged) {
        img.width -= 200;
        img.height -= 200;
        counterVal += 1;
    } else {
        img.width += 200;
        img.height += 200;
        counterVal += 1;
    };

    isEnlarged =! isEnlarged;
    let counter  = document.getElementById("clicker__counter")
    counter.textContent = counterVal
};