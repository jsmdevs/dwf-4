import { random } from "lodash"

type Jugada = 'piedra' | 'papel' | 'tijera';
type Game = {
    computerPlay: Jugada,
    personPlay: Jugada
};

export const state = {
    data: {
        currentGame: {
            computerPlay: "",
            personPlay: ""
        },
        history: []
    },

    getState() {
        return this.data;
    },

    setMove(game: Jugada) {
        const currentState = this.getState();
        currentState.currentGame.myPlay;
    },

    setGame(option) {

        const moves = {
            1: "piedra",
            2: "papel",
            3:"tijera"
        };

        let computerOption = random(1,3);

        this.data.currentGame.personPlay = option;
        this.data.currentGame.computerPlay = moves[computerOption];
    },


    pushToHistoty(play: Game) {
        const currentState = this.getState();
        currentState.history(play);
    },

    whoWins(myPlay: Jugada, computerPlay: Jugada) {

        const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
        const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
        const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
        const gane = [ganeConPapel, ganeConPiedra, ganeConTijeras].includes(true);

        return gane;
    }
};