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
    }
};

function radomSquare() {

    state.view.squares.forEach((square) =>{
        square.classList.remove("enemy");
    })

    let radomNumber = Math.floor(Math.random() * 9);
    let radomSquare = state.view.squares[radomNumber];
    radomSquare.classList.add("enemy");
}

function moveEnemy() {
    state.values.timerId = setInterval(radomSquare, state.values.gameVelocity);
}

function addListenerHitBox(){
    state.view.squares.forEach((square) =>{})
}

function init(){
    moveEnemy();
}

init();