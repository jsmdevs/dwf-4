import { state } from "../../state";

export function initGame(params) {

    const data = state.getState();
    const currentGame = data.currentGame;
    const history = data.history

    const imgWin = require("url:../../assets/img/win.svg");
    const imgLoser = require("url:../../assets/img/loser.svg");
    const imgEmpate = require("url:../../assets/img/empate.svg");

    const imgList = {
        piedra: require("url:../../assets/img/piedra.svg"),
        papel: require("url:../../assets/img/papel.svg"),
        tijera: require("url:../../assets/img/tijera.svg")
    }

    const div = document.createElement("div");

    div.classList.add("game");

    div.innerHTML = `
        <div class="computer-vs-you">
            <img class="option-computer" src="${imgList[currentGame.computerPlay]}" alt="Juego de compuradora">
            <img class="option-you" src="${imgList[currentGame.personPlay]}" alt="Juego de persona">
        </div>
        <div class="results">
            <img class="results__img" src="" alt="Resultado de jugada">
            <div class="score">\
                <h2 class="score__title">Score</h2>
                <p class="score__person-title">Vos: <span class="score__person-number"></span></p>
                <p class="score__computer-title">Máquina: <span class="score__computer-number"></span></p>
            </div>
            <button class="btn">Volver a jugar</button>
        </div>
    `;

    const btn = div.querySelector(".btn");

    btn.addEventListener("click", () => {
        params.goTo('play');
    })

    let counter = 0;
    const intervaloId = setInterval(() => {

        counter++;
        const resultsElem = div.querySelector(".results");
        const resultsImg = div.querySelector(".results__img") as HTMLImageElement;
        
        if (counter > 1) {
            const resulWhoWin = state.whoWins(currentGame.personPlay, currentGame.computerPlay);
            
            const pointsComputer = div.querySelector(".score__computer-number");
            const pointsPerson = div.querySelector(".score__person-number");

            pointsComputer.textContent = history.points.computer;
            pointsPerson.textContent = history.points.person;

            if(currentGame.personPlay == currentGame.computerPlay){
                resultsImg.src = imgEmpate;
                resultsElem.classList.add("bg-empate");
            }else{
                resultsImg.src = resulWhoWin ? imgWin : imgLoser;
                resulWhoWin ? resultsElem.classList.add("bg-win") : resultsElem.classList.add("bg-loser");
            }
            resultsElem.classList.add("show");
            clearInterval(intervaloId);
        };

    }, 1000);

    return div;
}