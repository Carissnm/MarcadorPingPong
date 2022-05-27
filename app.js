
const jugador1 = {
    firstName: "Jugador 1",
    score:0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
};

const jugador2 = {
    firstName: "Jugador 2",
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
};

const mensaje = document.querySelector("#mensaje")
const botonReset = document.querySelector("#reset");
const cantPartidasSelector = document.querySelector("#partidas")
let cantidadPartidas = 3;
let isGameOver = false;

function scoreKeeper(jugador, oponente){
    if(!isGameOver){
        jugador.score += 1;
        if(jugador.score === cantidadPartidas){
            isGameOver = true;
            jugador.display.classList.add("winner");
            oponente.display.classList.add("loser");
            jugador.button.disabled = true;
            oponente.button.disabled = true;
            jugador.button.classList.add("boton-disabled");
            oponente.button.classList.add("boton-disabled");
            mensaje.classList.add("final")
            mensaje.textContent = `¡¡¡Ganó ${jugador.firstName}!!!`            
        }
        jugador.display.textContent = jugador.score;
    }
}

function reset(){
    isGameOver = false;
    mensaje.textContent = '';
    mensaje.classList.remove("final")
    for(j of [jugador1, jugador2]){
        j.score = 0;
        j.button.disabled = false;
        j.display.classList.remove("winner", "loser");
        j.display.textContent = 0;
        j.button.classList.remove("boton-disabled");
    }
}

jugador1.button.addEventListener("click", function(){
    scoreKeeper(jugador1, jugador2);
});

jugador2.button.addEventListener("click", function(){
    scoreKeeper(jugador2, jugador1);
})

botonReset.addEventListener("click", reset);

cantPartidasSelector.addEventListener("change",function(){
    cantidadPartidas = Number(this.value);
    reset();
})

