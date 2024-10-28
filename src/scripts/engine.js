const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },
    values:{
        timerId : null,
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        corretTime: 60,
    },
    actions: {
        countDownTimerid: setInterval(countDown,1000),
    }
};

function countDown() {
    state.values.corretTime--;
    state.view.timeLeft.textContent = state.values.corretTime;
    if (state.values.corretTime < 0) {
        alert("Game Over! o seu resultado foi: " + state.values.result);
        state.values.corretTime = 60;
    }
}

function playSound(audioName){
let audio =  new Audio(`./src/audios/${audioName}.m4a`)
    audio.volume = 0.2;
    audio.play();
}

function radomSquare() {

    state.view.squares.forEach((square) =>{
        square.classList.remove("enemy");
    })

    let radomNumber = Math.floor(Math.random() * 9);
    let radomSquare = state.view.squares[radomNumber];
    radomSquare.classList.add("enemy");
    state.values.hitPosition = radomSquare.id
}

function moveEnemy() {
    state.values.timerId = setInterval(radomSquare, state.values.gameVelocity);
}

function addListenerHitBox(){
    state.view.squares.forEach((square) =>{
        square.addEventListener("mousedown",()=>{
            if (square.id === state.values.hitPosition) {
                   state.values.result++;
                   state.view.score.textContent = state.values.result;
                   state.values.hitPosition = null;
                   playSound("hit");
            }
        })
    })
}

function init(){
    moveEnemy();
    addListenerHitBox();
}

init();