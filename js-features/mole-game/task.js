let getHole = index => document.getElementById(`hole${index}`);
let deadmole = document.getElementById("dead");
let molelost  = document.getElementById("lost");
let win = parseInt(deadmole.textContent);
let lost = parseInt(molelost.textContent);


for (let i = 1; i <= 9; i++){
    getHole(i).onclick = function () {
    if (this.className.includes('hole_has-mole')){
        win += 1
        deadmole.textContent = win;
    }else {
        lost += 1 
        molelost.textContent = lost;
        };
    checkgame(win, lost)
    };
};


function checkgame(deadmole, molelost){
    if(deadmole == 6){
    alert('Вы победили');
    location.reload()
    } else if (molelost == 4){
    alert ('Вы проиграли');
    location.reload()
    };
};
